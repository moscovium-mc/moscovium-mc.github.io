'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function BackHome() {
  const pathname = usePathname();
  if (pathname === '/') return null;

  return (
    <nav className="mb-8">
      <Link
        href="/"
        className="text-sm text-gray-400 dark:text-gray-500 hover:text-blue-500 dark:hover:text-gray-300 transition-colors"
      >
        ← back to home
      </Link>
    </nav>
  );
}
