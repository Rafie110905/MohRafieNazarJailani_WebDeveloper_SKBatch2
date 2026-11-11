import { motion, MotionConfig } from 'framer-motion'
import roles from './data/roles.json'
import RoleCard from './components/RoleCard.jsx'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen bg-[#f7f5ef] font-sans text-[#171a22]">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-4 sm:px-6 lg:px-8">
          <header className="flex items-center justify-between gap-4 rounded-[1.4rem] border border-white/80 bg-white/85 px-4 py-3 shadow-[0_8px_30px_rgba(27,39,66,0.06)] backdrop-blur sm:px-6">
            <a href="#beranda" className="min-w-0">
              <span className="block text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#1767e8]">Peluang karier</span>
              <span className="mt-0.5 block truncate text-sm font-bold text-[#303847] sm:text-base">Bersama Sekolah Karir</span>
            </a>
            <nav aria-label="Navigasi utama" className="flex shrink-0 items-center gap-2 sm:gap-5">
              <a href="#beranda" className="hidden text-sm font-semibold text-[#5b6475] transition hover:text-[#1767e8] sm:inline-flex">Tentang tim</a>
              <a href="#lowongan" className="hidden text-sm font-semibold text-[#5b6475] transition hover:text-[#1767e8] sm:inline-flex">Posisi terbuka</a>
              <a href="#lowongan" className="inline-flex min-h-11 items-center rounded-full bg-[#e8edf6] px-5 py-2.5 text-sm font-bold text-[#171a22] transition hover:bg-[#dce5f4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1767e8]">
              Lihat posisi
              </a>
            </nav>
          </header>

          <section id="beranda" aria-labelledby="recruit-title" className="relative mt-5 overflow-hidden rounded-[1.5rem] bg-[#eaf0ff] px-5 py-7 sm:rounded-[2rem] sm:px-10 sm:py-14 lg:px-16 lg:py-16">
            <div aria-hidden="true" className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-[#c7d8ff]/70 blur-3xl" />
            <div aria-hidden="true" className="absolute -bottom-48 right-1/3 h-80 w-80 rounded-full bg-[#fff0c8]/70 blur-3xl" />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="max-w-2xl"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-[#cbd8f3] bg-white/70 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#315796]">
                  <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#1767e8]" />
                  Kami sedang mencari talenta
                </span>
                <h1 id="recruit-title" className="mt-4 text-[2.25rem] font-extrabold leading-[1.1] tracking-[-0.045em] sm:mt-6 sm:text-6xl lg:text-[4.25rem]">
                  Bangun masa depan
                  <br />
                  <span className="text-[#1767e8]">karier bersama kami.</span>
                </h1>
                <p className="mt-4 max-w-xl text-[0.95rem] leading-6 text-[#525b6b] sm:mt-6 sm:text-lg sm:leading-8">
                  Kami membantu lebih banyak orang melangkah ke dunia kerja. Yuk, ciptakan pengalaman belajar dan karier yang berdampak bersama tim Sekolah Karir.
                </p>
                <a href="#lowongan" className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#1767e8] px-6 py-3 font-bold text-white shadow-lg shadow-blue-900/15 transition hover:-translate-y-0.5 hover:bg-[#1058ce] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1767e8] sm:mt-8 sm:w-auto">
                  Jelajahi posisi terbuka
                  <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 10h12M11 5l5 5-5 5" />
                  </svg>
                </a>
              </motion.div>

              <div aria-hidden="true" className="relative mx-auto hidden aspect-square w-full max-w-[19rem] items-center justify-center lg:flex">
                <div className="absolute inset-3 rounded-full border border-[#9fb8e7]/60" />
                <div className="absolute inset-10 rounded-full border border-dashed border-[#9fb8e7]/70" />
                <div className="absolute right-8 top-10 h-4 w-4 rounded-full bg-[#f2b94b]" />
                <div className="absolute bottom-12 left-7 h-3 w-3 rounded-full bg-[#65b993]" />
                <div className="relative -rotate-3 rounded-3xl border border-white/80 bg-white/60 p-3 shadow-xl backdrop-blur">
                  <div className="w-56 rounded-2xl bg-white p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#7b8494]">Kesempatan baru</span>
                      <span className="rounded-full bg-[#e3f4ed] px-2.5 py-1 text-[10px] font-bold text-[#24724d]">OPEN</span>
                    </div>
                    <div className="mt-5 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf0ff] text-[#1767e8]">
                        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="7" width="18" height="13" rx="2" />
                          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18m-11 0v2h4v-2" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold">Kerja bermakna</div>
                        <div className="mt-1 text-xs text-[#687184]">Bertumbuh bersama tim</div>
                      </div>
                    </div>
                    <div className="mt-5 flex gap-1.5">
                      <span className="h-1.5 w-10 rounded-full bg-[#1767e8]" />
                      <span className="h-1.5 w-6 rounded-full bg-[#d5e0f6]" />
                      <span className="h-1.5 w-6 rounded-full bg-[#d5e0f6]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="lowongan" aria-labelledby="roles-title" className="scroll-mt-8 py-10 sm:py-16">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#1767e8]">Temukan peranmu</p>
                <h2 id="roles-title" className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Posisi yang tersedia</h2>
              </div>
              <p className="text-sm font-medium text-[#697181]">{roles.length} posisi terbuka</p>
            </div>
            <ul className="mt-6 grid grid-cols-1 gap-4 md:mt-7 md:grid-cols-3 md:gap-5">
              {roles.map((role, index) => (
                <RoleCard key={role.id} role={role} index={index} />
              ))}
            </ul>

            <motion.div
              id="apply"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="mt-6 flex flex-col items-start gap-5 rounded-[1.5rem] bg-[#171a22] p-5 text-white sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:p-8"
            >
              <div>
                <h2 className="text-xl font-extrabold">Belum menemukan peran yang cocok?</h2>
                <p className="mt-2 max-w-xl leading-6 text-[#c4c9d2]">Ceritakan hal yang ingin kamu bangun bersama Sekolah Karir.</p>
              </div>
              <a href="mailto:karir@example.com?subject=Lamaran%20Sekolah%20Karir" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#f2c65d] px-6 py-3 font-bold text-[#171a22] transition hover:-translate-y-0.5 hover:bg-[#ffda7c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto">
                Kirim lamaran
                <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 10h12M11 5l5 5-5 5" />
                </svg>
              </a>
            </motion.div>
          </section>

          <footer className="flex flex-col gap-3 border-t border-[#e6e3dc] pt-5 text-sm text-[#697181] sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <p className="font-semibold text-[#4e5665]">Karier di Sekolah Karir</p>
            <p className="sm:text-right">Belajar skill. Bangun portofolio. Siapkan karier.</p>
          </footer>
        </div>
      </main>
    </MotionConfig>
  )
}
