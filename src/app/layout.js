import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/home/layout/Header'
import Footer from '@/components/home/layout/Footer'

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

        {/* Back to top button */}
        <button
          id="back-to-top"
          className="fixed bottom-6 right-6 bg-gray-900 text-white p-3 rounded-full shadow-lg opacity-0 invisible transition-all duration-300 hover:bg-gray-800 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 z-40"
          aria-label="Back to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>

        {/* Back to top functionality */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Back to top functionality
              window.addEventListener('scroll', function() {
                const backToTop = document.getElementById('back-to-top');
                if (window.pageYOffset > 300) {
                  backToTop.style.opacity = '1';
                  backToTop.style.visibility = 'visible';
                } else {
                  backToTop.style.opacity = '0';
                  backToTop.style.visibility = 'invisible';
                }
              });

              document.getElementById('back-to-top').addEventListener('click', function() {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              });

              // Smooth scrolling for anchor links
              document.addEventListener('click', function(e) {
                if (e.target.matches('a[href^="#"]')) {
                  e.preventDefault();
                  const target = document.querySelector(e.target.getAttribute('href'));
                  if (target) {
                    target.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }
              });
            `
          }}
        />
      </body>
    </html>
  )
}