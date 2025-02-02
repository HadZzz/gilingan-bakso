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
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Gilingan Bakso Mas Wandi Malingping #1 Sejak 2010',
  description: 'Pusat jasa penggilingan daging bakso premium dan bumbu bakso terlengkap di Malingping. Melayani pedagang bakso sejak 2010 dengan mesin modern dan standar higienis tinggi.',
  slogan: 'Gilingan Bakso Terbaik & Terpercaya di Malingping',
  url: 'https://gilinganbaksomaswandi.com',
  telephone: '+62 812-3456-7890',
  email: 'gilinganbaksomaswandi@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Raya Ps. Malingping No.3',
    addressLocality: 'Malingping Selatan',
    addressRegion: 'Banten',
    postalCode: '42391',
    addressCountry: 'ID'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '-6.7577',
    longitude: '106.0755'
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '08:00',
    closes: '17:00'
  },
  priceRange: '$$',
  image: [
    'https://gilinganbaksomaswandi.com/images/og-mage.jpeg',
    'https://gilinganbaksomaswandi.com/images/about.jpeg'
  ],
  sameAs: [
    'https://facebook.com/gilinganbaksomaswandi',
    'https://instagram.com/gilinganbaksomaswandi'
  ]
};

export const metadata = {
  icons: {
    icon: '/vercel.svg',
    shortcut: '/vercel.svg',
    apple: '/vercel.svg',
  },
  title: 'Gilingan Bakso Mas Wandi Malingping | Jasa Penggilingan Daging Premium #1',
  description: '🥇 Gilingan Bakso Mas Wandi Malingping - Pusat jasa penggilingan daging bakso premium dan bumbu bakso terlengkap di Malingping. ✓ Halal ✓ Higienis ✓ Mesin Modern ✓ Berpengalaman sejak 2010. Harga mulai Rp 15.000/kg. Kunjungi kami di Jl. Raya Ps. Malingping No.3 atau Hubungi +62 812-3456-7890 untuk info lengkap.',
  keywords: ['gilingan bakso malingping', 'gilingan bakso mas wandi', 'jasa giling daging malingping', 'bumbu bakso malingping', 'penggilingan daging halal malingping', 'supplier bakso malingping', 'gilingan bakso terbaik malingping', 'gilingan bakso terdekat malingping', 'harga gilingan daging malingping', 'tempat giling daging bakso malingping', 'gilingan bakso murah malingping', 'giling daging bakso malingping', 'mesin giling bakso malingping', 'jasa penggilingan daging malingping'],
  alternates: {
    canonical: 'https://gilinganbaksomaswandi.com'
  },
  authors: [{ name: 'Mas Wandi' }],
  creator: 'Mas Wandi',
  openGraph: {
    title: 'Gilingan Bakso Mas Wandi Malingping | Jasa Penggilingan Daging Premium #1',
    description: 'Gilingan Bakso Mas Wandi Malingping - Pusat jasa penggilingan daging bakso premium dan bumbu bakso terlengkap di Malingping sejak 2010. Kunjungi kami di Jl. Raya Ps. Malingping No.3.',
    url: 'https://baksomaswandi.com',
    siteName: 'Gilingan Bakso Mas Wandi',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bakso Mas Wandi Malingping'
      }
    ],
    locale: 'id_ID',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  // Add structured data script to head
  const structuredDataScript = {
    __html: JSON.stringify(structuredData)
  };

  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
