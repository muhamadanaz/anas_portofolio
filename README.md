# Portofolio Muhamad Anas Nabila

Portofolio satu halaman menggunakan Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, lucide-react, dan next-themes. Konten portofolio dipusatkan di `data/portfolio.ts`.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000). Pemeriksaan kode dan build produksi:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Melengkapi konten

1. Tambahkan foto di `public/`, lalu isi `photoUrl` di `data/portfolio.ts` dengan path lokal seperti `/foto-anas.jpg`. Selama belum ada foto, halaman memakai avatar `MA`.
2. Letakkan CV di `public/cv.pdf`; tombol unduh sudah mengarah ke file tersebut.
3. Isi URL GitHub, LinkedIn, dan Instagram pada `contact.socialLinks`. Tautan kosong tidak ditampilkan.
4. Untuk masing-masing proyek, isi `demoUrl` dan `githubUrl` bila tersedia. Tambahkan screenshot di `public/projects/`, lalu isi `image`; tanpa screenshot, kartu memakai placeholder gradien.
5. Form kontak memakai `mailto:ndubsskidipapap@gmail.com`, memvalidasi nama, email, dan pesan, lalu membuka aplikasi email pengunjung. Tidak perlu layanan pihak ketiga atau konfigurasi server; uji pengiriman di perangkat dengan aplikasi email yang tersedia. Untuk pengiriman langsung dari situs tanpa aplikasi email, integrasikan layanan seperti Formspree/EmailJS sendiri.

Metadata SEO dan Open Graph ada di `app/layout.tsx`. Warna, tipografi, dan responsivitas berada di `app/globals.css`.

## Deploy ke Vercel

Push proyek ke repository Git, impor repository di [Vercel](https://vercel.com/new), lalu deploy dengan preset Next.js. Pastikan CV, foto, dan screenshot yang sudah dikonfigurasi ikut masuk ke folder `public/`.
