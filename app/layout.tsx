import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import BackHome from '../components/back-home';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://moscovium-mc.github.io'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'moscovium-mc',
    template: '%s | moscovium-mc'
  },
  description: "moscovium-mc's GitHub page, security blog and insights.",
  openGraph: {
    title: 'moscovium-mc',
    description: "moscovium-mc's GitHub page, security blog and insights.",
    url: 'https://moscovium-mc.github.io',
    siteName: 'moscovium-mc',
    images: [
      {
        url: '/prof_pic.jpg',
        width: 512,
        height: 512
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary',
    title: 'moscovium-mc',
    description: "moscovium-mc's GitHub page, security blog and insights.",
    images: ['/prof_pic.jpg']
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="antialiased tracking-tight">
        <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 dark:bg-zinc-950 bg-white text-gray-900 dark:text-zinc-200">
          <main className="max-w-[60ch] mx-auto w-full space-y-6">
            <BackHome />
            {children}
          </main>
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
}

function Footer() {
  const links = [
    { name: 'github', url: 'https://github.com/moscovium-mc' },
    { name: 'email', url: 'mailto:pub.inbox@proton.me' },
    { name: 'blog', url: '/n' },
    { name: 'donate', url: '/donate' }
  ];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
