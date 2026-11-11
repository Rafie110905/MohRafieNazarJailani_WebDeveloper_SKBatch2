# Sekolah Karir – Recruitment Landing Page

Section landing page rekrutmen yang responsif dan interaktif, dibuat untuk Mini Assignment Web Developer SK Batch 2. Berisi headline, tiga kartu posisi (job title, employment type, location), dan CTA lamaran.

**Live preview:** [https://moh-rafie-nazar-jailani-web-develop.vercel.app/]
**Repository:** https://github.com/Rafie110905/MohRafieNazarJailani_WebDeveloper_SKBatch2

## Cara menjalankan secara lokal

Butuh Node.js yang didukung Vite 8.

```bash
npm install
npm run dev       # buka URL lokal yang ditampilkan Vite
npm run build     # build production ke dist/
npm run preview   # cek build production secara lokal
```

## Stack

React (Vite), Tailwind CSS v4, dan Framer Motion.

## Struktur singkat

- `src/data/roles.json` – mock data lowongan (array objek statis)
- `src/components/RoleCard.jsx` – kartu posisi
- `src/App.jsx` – headline, grid kartu, dan CTA global

## Keputusan teknis utama

- **Mock data**: seluruh lowongan dan email kontak (`karir@example.com`) adalah data contoh, bukan data nyata. Menambah posisi cukup menambah objek di `roles.json`.
- **Layout responsif (mobile-first)**: satu kolom di bawah 768px (`grid-cols-1`), tiga kolom mulai breakpoint `md` (≥768px).
- **CTA**: ada tombol di setiap kartu dan satu CTA global di bawah grid.
- **Mengapa Framer Motion dan Tailwind digabung**:
  - Framer Motion dipakai untuk animasi masuk berurutan (headline, lalu kartu, lalu CTA) dengan `delay: index * 0.15`. Delay per item pada list lebih mudah dan rapi dengan Framer Motion; dengan Tailwind murni harus menulis keyframes dan `animation-delay` kustom.
  - Tailwind dipakai untuk micro-interaction yang cukup dengan CSS: hover lift kartu (`hover:-translate-y-2 hover:shadow-xl`), pergeseran ikon panah (`group-hover:translate-x-1`), dan feedback tombol (`hover:scale-105 active:scale-95`). Lebih ringan karena tanpa JavaScript.
  - Wrapper animasi masuk dan elemen yang di-hover dipisah supaya transform Framer Motion tidak bentrok dengan transform Tailwind.
- **Aksesibilitas**: animasi menghormati pengaturan reduced motion di sistem (`MotionConfig reducedMotion="user"`), fokus keyboard terlihat, dan tombol punya `aria-label` spesifik per posisi.

## Catatan penggunaan AI

**Tool yang dipakai:** Copilot AI.

**Bantuan AI:**
- Copilot AI: membantu menafsirkan brief serta menyusun dan meninjau implementasi.
