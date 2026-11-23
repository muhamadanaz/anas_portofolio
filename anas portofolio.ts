export type PortfolioProject = {
  title: string;
  description: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  image: string;
};

export type PortfolioTimelineItem = {
  role: string;
  organization: string;
  period: string;
  kind: "Pengalaman" | "Pendidikan";
  details?: string[];
};

export function isConfigured(value: string | undefined): value is string {
  return Boolean(value?.trim() && !/\bTODO\b/i.test(value));
}

export const portfolio = {
  name: "Muhamad Anas Nabila",
  initials: "MA",
  role: "Mahasiswa Teknik Informatika | Web Developer & Data Analyst",
  greeting: "Halo, saya",
  valueStatement:
    "Saya memadukan pembelajaran Teknik Informatika dengan pengalaman magang, organisasi, pengembangan web berbasis Laravel, serta riset analisis data & Machine Learning.",
  availability: "Terbuka untuk kesempatan magang, kerja, dan kolaborasi",
  location: "Demak, Jawa Tengah",
  seoTitle: "Muhamad Anas Nabila | Portofolio Mahasiswa Teknik Informatika",
  seoDescription:
    "Portofolio Muhamad Anas Nabila, mahasiswa S1 Teknik Informatika Universitas Semarang, Web Developer, dan Data Analyst.",
  heroPhotoUrl: "/foto-portofoliohero.jpeg",
  aboutPhotoUrl: "/foto-portofoliosementara.jpeg",
  cvUrl: "/CV MUHAMAD ANAS NABILA.pdf",
  // TODO: Letakkan file CV di public/cv.pdf.
  bio: "Saya adalah mahasiswa S1 Teknik Informatika di Universitas Semarang (2022–2026). Saya memiliki pengalaman magang di instansi pemerintah, berkontribusi dalam kepemimpinan organisasi dan kegiatan KKN, membangun sistem informasi berbasis Laravel, serta meneliti analisis data dan Machine Learning untuk Tugas Akhir. Saya terbuka untuk kesempatan magang, kerja, dan kolaborasi.",
  stats: [
    { value: "3", label: "Proyek" },
    { value: "3", label: "Pengalaman kerja/magang" },
    { value: "2", label: "Pencapaian kepemimpinan" },
  ],
  navigation: [
    { label: "Tentang", href: "#tentang" },
    { label: "Keahlian", href: "#keahlian" },
    { label: "Proyek", href: "#proyek" },
    { label: "Perjalanan", href: "#perjalanan" },
    { label: "Pelatihan & Pencapaian", href: "#pelatihan" },
  ],
  skills: [
    {
      category: "Teknis",
      items: [
        "Python",
        "Laravel",
        "PHP",
        "Analisis Data (NLP)",
        "Naive Bayes",
        "VS Code",
        "Microsoft Office",
        "Administrasi",
      ],
    },
    {
      category: "Soft skill",
      items: ["Kepemimpinan", "Analisis", "Administrasi"],
    },
    {
      category: "Keahlian lain",
      items: ["Welder Pipa (SMAW 2G/PC)"],
    },
  ],
  projects: [
    {
      title: "Analisis Sentimen Driver ShopeeFood Kota Semarang",
      description:
        "Tugas Akhir (Skripsi) S1 Teknik Informatika yang menganalisis sentimen dan persepsi para pengemudi ShopeeFood terhadap kebijakan biaya parkir di Kota Semarang menggunakan algoritma Machine Learning Naive Bayes dan pemrosesan teks (NLP).",
      tags: ["Python", "Naive Bayes", "NLP", "Analisis Sentimen", "Data Science"],
      demoUrl: "",
      // TODO: Isi dengan URL demo proyek jika tersedia.
      githubUrl: "",
      // TODO: Isi dengan URL GitHub proyek jika tersedia.
      image: "",
      // TODO: Tambahkan screenshot proyek ke public/projects/ dan isi path image.
    },
    {
      title: "Website Profil Desa Mluweh, Ungaran Timur",
      description:
        "Website profil untuk Desa Mluweh, Kecamatan Ungaran Timur, Kabupaten Semarang. Dibangun dengan Laravel untuk menampilkan informasi desa kepada masyarakat.",
      tags: ["Laravel", "PHP"],
      demoUrl: "",
      // TODO: Isi dengan URL demo proyek jika tersedia.
      githubUrl: "",
      // TODO: Isi dengan URL GitHub proyek jika tersedia.
      image: "",
      // TODO: Tambahkan screenshot proyek ke public/projects/ dan isi path image.
    },
    {
      title: "Sistem Informasi Absensi, Balai Latihan Kerja Demak",
      description:
        "Sistem informasi absensi berbasis Laravel yang dirancang dan diimplementasikan sebagai tugas kerja praktik. Proyek ini dikerjakan selama magang di Dinas Balai Latihan Kerja Demak pada Agustus–Oktober 2025.",
      tags: ["Laravel", "PHP", "Sistem Informasi"],
      demoUrl: "",
      // TODO: Isi dengan URL demo proyek jika tersedia.
      githubUrl: "",
      // TODO: Isi dengan URL GitHub proyek jika tersedia.
      image: "",
      // TODO: Tambahkan screenshot proyek ke public/projects/ dan isi path image.
    },
  ] satisfies PortfolioProject[],
  timeline: [
    {
      role: "Magang",
      organization: "Dinas Balai Latihan Kerja Demak, Kab. Demak",
      period: "Agustus 2025 - Oktober 2025",
      kind: "Pengalaman",
      details: [
        "Membantu administrasi kantor dan ikut serta dalam kegiatan dinas",
        "Membantu pengelolaan pendaftaran peserta pelatihan",
        "Menjadi asisten guru pelatihan Komputer Office dan Teknik Sepeda Motor",
        "Membuat tugas kerja praktik: Perancangan dan Implementasi Sistem Informasi Absensi di BLK Demak",
      ],
    },
    {
      role: "Operator",
      organization: "Shopee Express, Kab. Demak",
      period: "Februari 2025 - Maret 2025",
      kind: "Pengalaman",
    },
    {
      role: "Asisten Pelaksana Lapangan Proyek",
      organization: "CV Bhara Sakti Abadi, Kota Semarang",
      period: "Januari 2023 - Februari 2023",
      kind: "Pengalaman",
      details: [
        "Ikut menghitung dan mencatat material",
        "Menjadi perantara antara petugas lapangan dan pekerja mengenai situasi lokasi proyek",
        "Menyampaikan instruksi kepada pekerja lapangan",
      ],
    },
    {
      role: "S1 Teknik Informatika",
      organization: "Universitas Semarang",
      period: "2022 - 2026",
      kind: "Pendidikan",
      details: [
        "Tugas Akhir: Analisis sentimen driver shopeefood terhadap biaya parkir di kota semarang menggunakan metode naive bayes",
      ],
    },
    {
      role: "SMA/Sederajat (IPS)",
      organization: "MA Hidayatul Mubtadi'in, Kab. Demak",
      period: "2019 - 2022",
      kind: "Pendidikan",
    },
    {
      role: "SMP/Sederajat",
      organization: "MTs Asy-Syarifiyah",
      period: "2017 - 2019",
      kind: "Pendidikan",
    },
  ] satisfies PortfolioTimelineItem[],
  training: [
    {
      title: "Teknologi Informasi dan Komunikasi - C Essentials",
      organization: "Sipkol Universitas Semarang",
      period: "Oktober 2026",
    },
    {
      title: "Teknik Las - Pipe Welder SMAW 2G/PC",
      organization: "Balai Latihan Kerja Kabupaten Demak",
      period: "Juli 2022",
    },
  ],
  achievements: [
    { title: "Ketua Kuliah Kerja Nyata (KKN)", period: "2025" },
    {
      title: "Wakil Ketua Organisasi Daerah Ikatan Mahasiswa Demak",
      period: "2024",
    },
  ],
  contact: {
    email: "ndubsskidipapap@gmail.com",
    whatsappUrl: "https://wa.me/6281353657838",
    web3formsAccessKey: "9df9e7fd-9c85-4f31-a9df-bd6463c2967d",
    socialLinks: [
      { label: "GitHub", href: "", icon: "github" },
      // TODO: Isi tautan GitHub jika tersedia.
      { label: "LinkedIn", href: "", icon: "linkedin" },
      // TODO: Isi tautan LinkedIn jika tersedia.
      { label: "Instagram", href: "", icon: "instagram" },
      // TODO: Isi tautan Instagram jika tersedia.
    ],
  },
  content: {
    navLabel: "Navigasi utama",
    menuOpen: "Buka menu",
    menuClose: "Tutup menu",
    heroCtaProjects: "Lihat Proyek",
    heroCtaContact: "Hubungi Saya",
    heroCtaCv: "Unduh CV",
    aboutEyebrow: "Tentang Saya",
    aboutHeading: "Mengenal saya lebih dekat.",
    skillsEyebrow: "Keahlian",
    skillsHeading: "Bekal untuk terus berkembang.",
    projectsEyebrow: "Proyek",
    projectsHeading: "Proyek yang pernah saya kerjakan.",
    timelineEyebrow: "Pengalaman & Pendidikan",
    timelineHeading: "Perjalanan saya.",
    trainingEyebrow: "Pelatihan & Pencapaian",
    trainingHeading: "Pembelajaran dan kontribusi.",
    trainingTitle: "Pelatihan",
    achievementsTitle: "Pencapaian",
    contactEyebrow: "Kontak",
    contactHeading: "Mari terhubung.",
    contactDescription:
      "Saya terbuka untuk kesempatan magang, kerja, dan kolaborasi.",
    emailButton: "Email",
    whatsappButton: "WhatsApp",
    formName: "Nama",
    formEmail: "Email",
    formMessage: "Pesan",
    formNamePlaceholder: "Nama kamu",
    formEmailPlaceholder: "nama@email.com",
    formMessagePlaceholder: "Tulis pesan kamu",
    formSubmit: "Kirim Pesan",
    formSubmitting: "Sedang mengirim...",
    formSuccessTitle: "Pesan Berhasil Terkirim!",
    formSuccessDesc:
      "Terima kasih telah menghubungi. Pesan Anda telah terkirim ke email saya dan akan segera saya tanggapi.",
    formReset: "Kirim pesan lain",
    formNote: "Pesan akan dikirim langsung ke inbox email saya.",
    formRequiredError: "Mohon lengkapi nama, email, dan pesan.",
    formEmailError: "Masukkan alamat email yang valid.",
    footerText: "© 2026 Muhamad Anas Nabila",
    backToTop: "Kembali ke atas",
    skipToContent: "Lewati ke konten utama",
    navContact: "Hubungi Saya",
  },
};
