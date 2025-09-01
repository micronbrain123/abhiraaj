'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroData = [
    {
      title: "Professional Project Management",
      subtitle: "Consultant Services",
      description: "Expert project management consulting with proven strategies to deliver your projects on time and within budget.",
      buttonText: "Learn More",
      buttonLink: "/services#project-management"
    },
    {
      title: "Reliable Man Power",
      subtitle: "Supply Solutions",
      description: "Skilled workforce solutions tailored to your project requirements with experienced professionals across various domains.",
      buttonText: "Get Quote",
      buttonLink: "/contact"
    },
    {
      title: "Electromechanical Items",
      subtitle: "Supply & Support",
      description: "Quality electromechanical equipment and components supply with comprehensive technical support and maintenance.",
      buttonText: "View Services",
      buttonLink: "/services#electromechanical"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [heroData.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroData.length) % heroData.length);
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden py-16 lg:py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            {/* Company Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-3 py-1.5 shadow-sm">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-gray-700">Professional Services Available</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                <span className="block">{heroData[currentSlide].title}</span>
                <span className="block text-gray-600 text-xl sm:text-2xl lg:text-3xl mt-1">
                  {heroData[currentSlide].subtitle}
                </span>
              </h1>
              
              <p className="text-base text-gray-600 leading-relaxed max-w-xl">
                {heroData[currentSlide].description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={heroData[currentSlide].buttonLink}
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all duration-200 text-sm"
              >
                {heroData[currentSlide].buttonText}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-medium rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 text-sm"
              >
                <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact Us
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-xl font-bold text-gray-900 mb-0.5">15+</div>
                <div className="text-xs text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-gray-900 mb-0.5">500+</div>
                <div className="text-xs text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-gray-900 mb-0.5">5</div>
                <div className="text-xs text-gray-600">Service Areas</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            {/* Main Visual Container */}
            <div className="relative bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              {/* Services Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "📊", title: "Project Management", color: "bg-blue-50 text-blue-600" },
                  { icon: "💼", title: "Billing Solutions", color: "bg-green-50 text-green-600" },
                  { icon: "👥", title: "Man Power Supply", color: "bg-purple-50 text-purple-600" },
                  { icon: "⚡", title: "Electromechanical", color: "bg-yellow-50 text-yellow-600" },
                  { icon: "🏠", title: "Property Services", color: "bg-red-50 text-red-600" },
                  { icon: "📍", title: "Multi Location", color: "bg-indigo-50 text-indigo-600" }
                ].map((service, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg ${service.color} transition-transform hover:scale-105 cursor-pointer`}
                  >
                    <div className="text-lg mb-1">{service.icon}</div>
                    <div className="text-xs font-medium">{service.title}</div>
                  </div>
                ))}
              </div>

              {/* Contact Info Card */}
              <div className="mt-6 p-3 bg-gray-50 rounded-lg border">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-medium text-gray-900 text-sm">Ready to Help</span>
                </div>
                <div className="space-y-1.5 text-xs text-gray-600">
                  <div className="flex items-center space-x-2">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+91 76698 49556</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <span>Faridabad, Haryana</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements - Smaller */}
            <div className="absolute -top-3 -right-3 w-6 h-6 bg-yellow-400 rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400 rounded-full opacity-40 animate-pulse"></div>
          </div>
        </div>

        {/* Slide Controls */}
        <div className="flex justify-center items-center space-x-3 mt-8">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200"
            aria-label="Previous slide"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex space-x-1.5">
            {heroData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  currentSlide === index ? 'bg-gray-900' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200"
            aria-label="Next slide"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;