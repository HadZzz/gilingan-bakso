import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Schema.org structured data for local business
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Berapa harga jasa penggilingan daging bakso di Malingping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Harga jasa penggilingan daging bakso di Gilingan Bakso Mas Wandi Malingping mulai dari Rp 15.000/kg untuk penggilingan standar. Kami juga menyediakan paket lengkap termasuk bumbu dengan harga yang bersaing.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah gilingan bakso Mas Wandi bersertifikat halal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, Gilingan Bakso Mas Wandi telah bersertifikat halal dan menggunakan mesin modern dengan standar higienis tinggi. Kami berkomitmen menjaga kualitas dan kehalalan produk sejak 2010.",
      },
    },
    {
      "@type": "Question",
      name: "Di mana lokasi Gilingan Bakso Mas Wandi di Malingping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gilingan Bakso Mas Wandi berlokasi strategis di Jl. Raya Ps. Malingping No.3, Malingping Selatan, Kec. Malingping, Kabupaten Lebak, Banten 42391. Mudah dijangkau dari pasar Malingping.",
      },
    },
    {
      "@type": "Question",
      name: "Apa saja layanan yang tersedia di Gilingan Bakso Mas Wandi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kami menyediakan jasa penggilingan daging premium, penjualan bumbu bakso spesial, dan paket lengkap bahan bakso. Semua menggunakan mesin modern dan dijamin kualitasnya.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa lama proses penggilingan daging bakso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Proses penggilingan daging bakso di tempat kami rata-rata memakan waktu 15-30 menit tergantung jumlah daging. Kami mengutamakan kualitas hasil gilingan yang halus dan higienis.",
      },
    },
  ],
};

const businessStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gilingan Bakso Mas Wandi Malingping #1 Sejak 2010",
  description:
    "Pusat jasa penggilingan daging bakso premium dan bumbu bakso terlengkap di Malingping. Melayani pedagang bakso sejak 2010 dengan mesin modern dan standar higienis tinggi.",
  slogan: "Gilingan Bakso Terbaik & Terpercaya di Malingping",
  url: "https://gilinganbaksomaswandi.com",
  telephone: "+62 812-3456-7890",
  email: "gilinganbaksomaswandi@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Raya Ps. Malingping No.3",
    addressLocality: "Malingping Selatan",
    addressRegion: "Banten",
    postalCode: "42391",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-6.7577",
    longitude: "106.0755",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "08:00",
    closes: "17:00",
  },
  priceRange: "$$",
  image: [
    "https://gilinganbaksomaswandi.com/images/og-mage.jpeg",
    "https://gilinganbaksomaswandi.com/images/about.jpeg",
  ],
  sameAs: [
    "https://facebook.com/gilinganbaksomaswandi",
    "https://instagram.com/gilinganbaksomaswandi",
  ],
};

export const metadata = {
  verification: {
    google: "googled3abef38210a98f2",
  },
  icons: {
    icon: [
      { url: "/images/logo.jpg", type: "image/jpeg" },
      { url: "/images/logo.jpg", sizes: "16x16", type: "image/jpeg" },
      { url: "/images/logo.jpg", sizes: "32x32", type: "image/jpeg" },
      { url: "/images/logo.jpg", sizes: "96x96", type: "image/jpeg" },
    ],
    shortcut: "/images/logo.jpg",
    apple: "/images/logo.jpg",
    other: [
      {
        rel: "mask-icon",
        url: "/images/logo.jpg",
        color: "#000000",
      },
    ],
  },
  metadataBase: new URL("https://gilinganbaksomaswandi.com"), // Tambahkan ini
  title: {
    default:
      "Gilingan Bakso Mas Wandi Malingping | Jasa Penggilingan Daging Premium #1",
    template: "%s | Gilingan Bakso Mas Wandi",
  },
  description:
    "🥇 Gilingan Bakso Mas Wandi Malingping - Pusat jasa penggilingan daging bakso premium dan bumbu bakso terlengkap di Malingping. ✓ Halal ✓ Higienis ✓ Mesin Modern ✓ Berpengalaman sejak 2010. Harga mulai Rp 15.000/kg. Kunjungi kami di Jl. Raya Ps. Malingping No.3 atau Hubungi +62 812-3456-7890 untuk info lengkap.",
  keywords: [
    "gilingan bakso malingping",
    "gilingan bakso mas wandi",
    "jasa giling daging malingping",
    "bumbu bakso malingping",
    "penggilingan daging halal malingping",
    "supplier bakso malingping",
    "gilingan bakso terbaik malingping",
    "gilingan bakso terdekat malingping",
    "harga gilingan daging malingping",
    "tempat giling daging bakso malingping",
    "gilingan bakso murah malingping",
    "giling daging bakso malingping",
    "mesin giling bakso malingping",
    "jasa penggilingan daging malingping",
  ],
  alternates: {
    canonical: "https://gilinganbaksomaswandi.com",
  },
  authors: [{ name: "Mas Wandi" }],
  creator: "Mas Wandi",
  openGraph: {
    title:
      "Gilingan Bakso Mas Wandi Malingping | Jasa Penggilingan Daging Premium #1",
    description:
      "Gilingan Bakso Mas Wandi Malingping - Pusat jasa penggilingan daging bakso premium dan bumbu bakso terlengkap di Malingping sejak 2010. Kunjungi kami di Jl. Raya Ps. Malingping No.3.",
    url: "https://gilinganbaksomaswandi.com",
    siteName: "Gilingan Bakso Mas Wandi",
    images: [
      {
        url: "/images/logo.jpg", // Gunakan logo yang sama
        width: 1200,
        height: 630,
        alt: "Gilingan Bakso Mas Wandi Malingping",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  // Add structured data scripts to head
  const structuredDataScripts = [
    {
      __html: JSON.stringify(businessStructuredData),
    },
    {
      __html: JSON.stringify(faqStructuredData),
    },
  ];

  return (
    <html lang="id">
      <head>
        {structuredDataScripts.map((script, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={script}
          />
        ))}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
