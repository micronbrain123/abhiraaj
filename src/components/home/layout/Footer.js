import Link from 'next/link';

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
      { name: 'Project Management Consultant', href: '/services#project-management' },
      { name: 'Project Billing', href: '/services#billing' },
      { name: 'Man Power Supply', href: '/services#manpower' },
      { name: 'Electromechanical Items Supply', href: '/services#electromechanical' },
      { name: 'Property Sell and Purchase', href: '/services#property' },
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
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src="/images/logo.jpg" 
                  alt="Abhiraaj Logo" 
                  className="w-10 h-12 lg:w-12 lg:h-12 object-contain transition-transform group-hover:scale-105"
                />
              </div>
            </Link>
            </div>
            
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Professional project management consultant providing comprehensive solutions 
              for project billing, manpower supply, electromechanical items, and property services.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+91" className="text-sm hover:text-gray-900 transition-colors">
                  +91 92057 75477
                </a>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-600">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:abhiraaj@live.com" className="text-sm hover:text-gray-900 transition-colors">
                  abhiraaj@live.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3 text-gray-600">
                <svg className="w-5 h-5 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <address className="text-sm not-italic leading-relaxed">
                  Sector-105, Faridabad<br />
                  Haryana, India
                </address>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Our Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200 leading-relaxed"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Work Locations */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Work Locations</h3>
            <ul className="space-y-3 mb-8">
              {workLocations.map((location) => (
                <li key={location} className="text-gray-600 text-sm flex items-center space-x-2">
                  <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{location}</span>
                </li>
              ))}
            </ul>

            {/* Business Hours */}
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Business Hours</h4>
              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2 mb-4 md:mb-0">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-gray-900 text-sm transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="md:order-1">
              <p className="text-gray-500 text-sm">
                © {currentYear} Abhiraaj. All rights reserved. 
                <span className="ml-2 text-gray-400">
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