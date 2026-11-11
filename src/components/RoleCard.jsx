import { motion } from 'framer-motion'

const badgeStyle = {
  Remote: 'bg-emerald-50 text-emerald-700',
  Hybrid: 'bg-amber-50 text-amber-700',
  'On-site': 'bg-violet-50 text-violet-700',
}

const accentStyle = [
  'from-[#1767e8] to-[#8db4ff]',
  'from-[#65b993] to-[#b2dfc9]',
  'from-[#f2b94b] to-[#ffdc8c]',
]

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  )
}

export default function RoleCard({ role, index }) {
  return (
    // motion wrapper handles the entrance; the inner <article> owns hover styles
    // so framer-motion's transform never fights Tailwind's hover lift.
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.15, ease: 'easeOut' }}
    >
      <article className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-[1.5rem] border border-[#e8e5de] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c5d5f7] hover:shadow-xl hover:shadow-slate-950/10 sm:p-7">
        <div aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accentStyle[index % accentStyle.length]}`} />
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
            <span className="rounded-full bg-[#eaf0ff] px-3 py-1.5 text-[#2459d3] ring-1 ring-[#1767e8]/10">{role.type}</span>
            <span className={`rounded-full px-3 py-1.5 ring-1 ${badgeStyle[role.location] ?? 'bg-gray-100 text-gray-700'} ring-black/5`}>
              {role.location}
            </span>
          </div>
          <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f7f8fb] text-[#8992a2] transition-colors group-hover:bg-[#eaf0ff] group-hover:text-[#1767e8]">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="7" width="18" height="13" rx="2" />
              <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18m-11 0v2h4v-2" />
            </svg>
          </span>
        </div>

        <div>
          <h3 className="text-xl font-extrabold tracking-tight text-[#171a22]">{role.title}</h3>
          <p className="mt-2.5 leading-6 text-[#687184]">{role.summary}</p>
        </div>

        <a
          href="#apply"
          aria-label={`Lamar sebagai ${role.title}`}
          className="mt-auto inline-flex min-h-12 items-center justify-between gap-2 rounded-xl bg-[#f3f5f9] px-4 py-3 font-bold text-[#303847] transition-colors duration-200 hover:bg-[#1767e8] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1767e8]"
        >
          Lamar peran ini
          <ArrowIcon />
        </a>
      </article>
    </motion.li>
  )
}
