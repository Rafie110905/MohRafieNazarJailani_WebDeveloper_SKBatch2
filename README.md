# Sekolah Karir — Recruitment Landing Page

Landing page rekrutmen responsif untuk Mini Assignment Web Developer SK Batch 2. Halaman berisi headline, tiga kartu posisi, dan CTA lamaran.

## Menjalankan project

Gunakan Node.js yang didukung oleh Vite 8.

```bash
npm install
npm run dev       # buka URL lokal yang ditampilkan Vite
npm run build     # build production ke dist/
npm run preview   # cek build production secara lokal
```

## Keputusan utama

- React, Vite, Tailwind CSS v4, dan Framer Motion.
- Data lowongan disimpan di `src/data/roles.json` agar mudah diperbarui.
- Grid mobile-first: satu kolom di layar kecil dan tiga kolom mulai breakpoint `md`.
- CTA setiap kartu menuju bagian lamaran; sesuaikan alamat `karir@example.com` di `src/App.jsx` dengan email rekrutmen sebenarnya sebelum dipublikasikan.
- Animasi masuk menghormati preferensi reduced motion sistem.

## Catatan AI

Copilot AI digunakan untuk membantu menafsirkan brief serta menyusun dan meninjau implementasi. Pastikan memahami kode dan mengganti data kontak contoh sebelum mengumpulkan project.
