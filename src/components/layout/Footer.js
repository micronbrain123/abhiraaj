import Link from 'next/link';
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Project Management Consultant', href: '/services/project-management' },
      { name: 'Project Billing', href: '/services/project-billing' },
      { name: 'Man Power Supply', href: '/services/man-power-supply' },
      { name: 'Electromechanical Items Supply', href: '/services/electromechanical-items' },
      { name: 'Property Services', href: '/services/property-services' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  };

  const workLocations = [
    'Delhi NCR',
    'Vrindavan',
    'Sonipat',
    'Rohtak',
    'Udaipur (Rajasthan)'
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-gray-100/80 to-gray-200/60">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      {/* Decorative top border */}
      <div className="h-0.5 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300"></div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              {/* Logo with enhanced styling */}
              <Link href="/" className="flex items-center space-x-3 group">
                  <Image  
                    src="/images/logo.jpg" 
                    alt="Abhiraaj Logo"
                    width={56}   
                    height={56}  
                    className="w-8 h-10 lg:w-10 lg:h-12 object-contain transition-transform group-hover:scale-105"
                  />
              </Link>
              <div>
                <h3 className="text-xl font-bold text-gray-800 tracking-wide">Abhiraaj</h3>
                <p className="text-sm text-gray-600 font-medium">Professional Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Professional project management consultant providing comprehensive solutions 
              for project billing, manpower supply, electromechanical items, and property services.
            </p>

            {/* Contact Info with enhanced styling */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-600 hover:text-gray-800 transition-colors duration-200 group">
                <div className="p-2 rounded-lg bg-white/60 group-hover:bg-gray-700 group-hover:text-white transition-all duration-200">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+919205775477" className="text-sm font-medium">
                  +91 92057 75477
                </a>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-600 hover:text-gray-800 transition-colors duration-200 group">
                <div className="p-2 rounded-lg bg-white/60 group-hover:bg-gray-700 group-hover:text-white transition-all duration-200">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:abhiraaj@live.com" className="text-sm font-medium">
                  abhiraaj@live.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3 text-gray-600 group">
                <div className="p-2 rounded-lg bg-white/60 mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <address className="text-sm not-italic leading-relaxed font-medium">
                  Sector-105, Faridabad<br />
                  Haryana, India
                </address>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-800 text-sm transition-all duration-200 hover:translate-x-1 inline-block font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-6 relative">
              Our Services
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-800 text-sm transition-all duration-200 hover:translate-x-1 inline-block leading-relaxed font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Work Locations */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-6 relative">
              Work Locations
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full"></div>
            </h3>
            <ul className="space-y-3 mb-8">
              {workLocations.map((location) => (
                <li key={location} className="text-gray-600 text-sm flex items-center space-x-3 font-medium">
                  <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full"></div>
                  <span>{location}</span>
                </li>
              ))}
            </ul>

            {/* Business Hours with enhanced card */}
            <div className="bg-white/70 backdrop-blur-sm p-5 rounded-2xl border border-gray-200/40 shadow-md">
              <h4 className="text-sm font-bold text-gray-800 mb-4 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Business Hours
              </h4>
              <div className="space-y-3 text-xs text-gray-600">
                <div className="flex justify-between items-center py-1">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="bg-gray-200/70 px-2 py-1 rounded-lg font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="font-medium">Saturday</span>
                  <span className="bg-gray-200/70 px-2 py-1 rounded-lg font-semibold">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="font-medium">Sunday</span>
                  <span className="bg-gray-300/50 text-gray-700 px-2 py-1 rounded-lg font-semibold">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative border-t border-gray-200/40 bg-gradient-to-r from-white/60 to-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2 mb-4 md:mb-0">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-800 text-sm transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="md:order-1">
              <p className="text-gray-600 text-sm font-medium">
                © {currentYear} Abhiraaj. All rights reserved. 
                <span className="ml-2 text-gray-500">
                  Professional Project Management & Supply Solutions
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;