import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Green Living Calculator',
  description: 'Calculate and reduce your carbon footprint with our easy-to-use tool.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-green-50`}>
        <nav className="bg-green-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">Green Living Calculator</Link>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
              <li><Link href="/tips" className="hover:underline">Tips</Link></li>
              <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            </ul>
          </div>
        </nav>
        {children}
        <footer className="bg-green-800 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Green Living Calculator. All rights reserved.</p>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  )
}