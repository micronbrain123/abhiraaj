import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BackToTop from '@/components/ui/BackToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Abhiraaj - Project Management & Supply Solutions',
  description: 'Professional project management consultant, project billing, man power supply, electromechanical items supply, and property services in Faridabad, Haryana.',
  keywords: 'project management, consultant, billing, manpower supply, electromechanical, property services, Faridabad, Haryana',
  authors: [{ name: 'Abhiraaj' }],
  creator: 'Abhiraaj',
  publisher: 'Abhiraaj',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Abhiraaj - Project Management & Supply Solutions',
    description: 'Professional project management consultant, project billing, man power supply, electromechanical items supply, and property services in Faridabad, Haryana.',
    url: 'https://abhiraaj.com',
    siteName: 'Abhiraaj',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhiraaj - Project Management & Supply Solutions',
    description: 'Professional project management consultant, project billing, man power supply, electromechanical items supply, and property services.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Additional meta tags */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="contact" content="abhiraaj@live.com" />
        <meta name="phone" content="+91-76698-49556" />
        <meta name="address" content="Sector-105, Faridabad, Haryana, India" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900 overflow-x-hidden`}>
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50 transition-all"
        >
          Skip to main content
        </a>

        {/* Header - Fixed at top */}
        <Header />

        {/* Main content area with proper spacing for fixed header */}
        <main id="main-content" className="min-h-screen pt-16 lg:pt-20">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Loading indicator (optional) */}
        <div id="loading-indicator" className="hidden fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>

        {/* Back to top button - Now a React component */}
        <BackToTop />
      </body>
    </html>
  )
}