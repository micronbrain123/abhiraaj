'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const servicesRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Project Management Consultant', href: '/services/project-management' },
    { name: 'Project Billing', href: '/services/project-billing' },
    { name: 'Man Power Supply', href: '/services/man-power-supply' },
    { name: 'Electromechanical Items Supply', href: '/services/electromechanical-items' },
    { name: 'Property Sell and Purchase', href: '/services/property-services' },
  ];

  const isActive = (href) => pathname === href;
  const isServicesActive = () => pathname.startsWith('/services');

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gradient-to-r from-[#f1e8d9] via-[#f3eadb] to-[#f1e8d9] backdrop-blur-md shadow-xl border-b border-[#d6ac9c]/30' 
          : 'bg-gradient-to-r from-[#f1e8d9]/95 via-[#f3eadb]/95 to-[#f1e8d9]/95 backdrop-blur-sm'
      }`}
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-4 group">
              <img 
                src="/images/logo.jpg" 
                alt="Abhiraaj Logo" 
                className="w-12 h-12 lg:w-14 lg:h-14 object-contain transition-transform group-hover:scale-105"
              />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => (
              <div key={item.name} className="relative" ref={item.hasDropdown ? servicesRef : null}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                      className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center space-x-2 ${
                        isServicesActive()
                          ? 'text-white bg-gradient-to-r from-[#862315] to-[#a96c6c] shadow-lg'
                          : 'text-[#94746c] hover:text-[#862315] hover:bg-white/60 hover:shadow-md backdrop-blur-sm'
                      }`}
                    >
                      <span>{item.name}</span>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Services Dropdown */}
                    <div
                      className={`absolute top-full left-0 mt-3 w-80 bg-white/95 backdrop-blur-md border border-[#d6ac9c]/30 rounded-2xl shadow-2xl transition-all duration-300 transform ${
                        isServicesOpen 
                          ? 'opacity-100 translate-y-0 visible' 
                          : 'opacity-0 -translate-y-4 invisible'
                      }`}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <div className="p-2">
                        {services.map((service, index) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block px-4 py-3 text-sm text-[#94746c] hover:bg-gradient-to-r hover:from-[#862315] hover:to-[#a96c6c] hover:text-white transition-all duration-200 rounded-xl group"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <div className="flex items-start space-x-3">
                              <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-[#e5bab0] to-[#d6ac9c] group-hover:from-white group-hover:to-white text-[#862315] group-hover:text-[#862315] rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200">
                                {index + 1}
                              </span>
                              <span className="font-semibold leading-tight">{service.name}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                      {/* Dropdown arrow */}
                      <div className="absolute -top-2 left-6 w-4 h-4 bg-white/95 border-l border-t border-[#d6ac9c]/30 transform rotate-45 backdrop-blur-md"></div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      isActive(item.href)
                        ? 'text-white bg-gradient-to-r from-[#862315] to-[#a96c6c] shadow-lg'
                        : 'text-[#94746c] hover:text-[#862315] hover:bg-white/60 hover:shadow-md backdrop-blur-sm'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden xl:flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2 text-[#94746c] hover:text-[#862315] transition-colors duration-200 group">
              <div className="p-2 rounded-lg bg-white/40 group-hover:bg-[#862315] group-hover:text-white transition-all duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="font-semibold">92057 75477</span>
            </div>
            <div className="flex items-center space-x-2 text-[#94746c] group">
              <div className="p-2 rounded-lg bg-white/40">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="font-semibold">Faridabad, Haryana</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-xl text-[#94746c] hover:text-[#862315] hover:bg-white/60 transition-all duration-200 backdrop-blur-sm"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-[#d6ac9c]/30 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-xl mt-2">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                          isServicesActive()
                            ? 'text-white bg-gradient-to-r from-[#862315] to-[#a96c6c] shadow-lg'
                            : 'text-[#94746c] hover:text-[#862315] hover:bg-[#f3eadb]/50'
                        }`}
                      >
                        <span>{item.name}</span>
                        <svg 
                          className={`w-5 h-5 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {/* Mobile Services Dropdown */}
                      {isMobileServicesOpen && (
                        <div className="ml-6 mt-3 space-y-2 border-l-2 border-[#d6ac9c]/50 pl-4">
                          {services.map((service, index) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsMobileServicesOpen(false);
                              }}
                              className="block px-3 py-2 text-sm text-[#94746c] hover:text-[#862315] hover:bg-[#e5bab0]/30 rounded-lg transition-all duration-200 font-medium"
                            >
                              <div className="flex items-start space-x-3">
                                <span className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-[#e5bab0] to-[#d6ac9c] text-[#862315] rounded-full flex items-center justify-center text-xs font-bold">
                                  {index + 1}
                                </span>
                                <span className="leading-tight">{service.name}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                        isActive(item.href)
                          ? 'text-white bg-gradient-to-r from-[#862315] to-[#a96c6c] shadow-lg'
                          : 'text-[#94746c] hover:text-[#862315] hover:bg-[#f3eadb]/50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-6 mt-6 border-t border-[#d6ac9c]/30 space-y-4">
                <div className="flex items-center space-x-3 px-3 py-2 text-[#94746c]">
                  <div className="p-2 rounded-lg bg-[#e5bab0]/30">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold">92057 75477</span>
                </div>
                <div className="flex items-center space-x-3 px-3 py-2 text-[#94746c]">
                  <div className="p-2 rounded-lg bg-[#e5bab0]/30">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold">Sector-105, Faridabad, Haryana</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;