const AboutPage = () => {
  const companyStats = [
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "5+", label: "Service Categories" }
  ];

  const services = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Project Management Consultant",
      description: "End-to-end project planning, execution, and delivery with proven methodologies ensuring successful completion within budget and timeline."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Project Billing",
      description: "Comprehensive billing solutions with transparent pricing structures and detailed cost management for all project phases."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Man Power Supply",
      description: "Skilled workforce provision and management services ensuring the right talent for your project requirements and timelines."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Electromechanical Items Supply",
      description: "Complete supply chain solutions for electromechanical equipment and components with quality assurance and timely delivery."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Property Sell and Purchase",
      description: "Professional real estate services including property buying, selling, and investment consultation with market expertise."
    }
  ];

  const workLocations = [
    "Delhi NCR",
    "Vrindavan", 
    "Sonipat",
    "Rohtak",
    "Udaipur (Rajasthani)"
  ];

  const values = [
    {
      title: "Excellence",
      description: "We maintain the highest standards in every project, ensuring quality delivery that exceeds expectations."
    },
    {
      title: "Integrity", 
      description: "Transparent business practices with honest communication and ethical approach to all our partnerships."
    },
    {
      title: "Innovation",
      description: "Embracing modern methodologies and technologies to deliver efficient and effective solutions."
    },
    {
      title: "Partnership",
      description: "Building long-term relationships with clients through dedicated service and continuous support."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-3 py-1.5 mb-4 shadow-sm">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              <span className="text-xs font-medium text-gray-700">About Abhiraaj</span>
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              15+ Years of Professional Excellence
            </h1>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Abhiraaj has been a trusted partner for businesses across multiple sectors, 
              delivering comprehensive project management and supply chain solutions with 
              unwavering commitment to quality and client satisfaction.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-gray-50 rounded-full px-3 py-1.5 mb-4">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                <span className="text-xs font-medium text-gray-700">Our Story</span>
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Building Success Through Innovation and Dedication
              </h2>
              
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">
                  Founded over 15 years ago, Abhiraaj began as a vision to bridge the gap between 
                  project requirements and reliable execution. What started as a small consulting 
                  firm has grown into a comprehensive solution provider serving clients across 
                  multiple industries and locations.
                </p>
                
                <p className="leading-relaxed">
                  Our journey has been marked by continuous learning, adaptation, and an unwavering 
                  commitment to excellence. From our headquarters in Sector-105, Faridabad, Haryana, 
                  we&apos;ve expanded our reach to serve clients across Delhi NCR, Vrindavan, Sonipat, 
                  Rohtak, and Udaipur.
                </p>
                
                <p className="leading-relaxed">
                  Today, we stand as a trusted partner for businesses seeking reliable project 
                  management, efficient supply chain solutions, and comprehensive support services 
                  that drive growth and success.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Company Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-gray-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <div className="font-medium text-gray-900">Headquarters</div>
                    <div className="text-gray-600 text-sm">Sector-105, Faridabad, Haryana</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-gray-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <div className="font-medium text-gray-900">Phone</div>
                    <div className="text-gray-600 text-sm">+91 92057 75477</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-gray-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <div className="text-gray-600 text-sm">abhiraaj@live.com</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-gray-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div className="font-medium text-gray-900">Experience</div>
                    <div className="text-gray-600 text-sm">15+ Years in Industry</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-3 py-1.5 mb-4 shadow-sm">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              <span className="text-xs font-medium text-gray-700">Our Expertise</span>
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Service Portfolio
            </h2>
            
            <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We offer a complete range of professional services designed to meet 
              diverse business needs across multiple industries and sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700 rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300">
                  {service.icon}
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Locations */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gray-50 rounded-full px-3 py-1.5 mb-4">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              <span className="text-xs font-medium text-gray-700">Work Locations</span>
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Serving Multiple Locations
            </h2>
            
            <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our extensive network covers major cities and regions, ensuring 
              local expertise and support wherever your projects are located.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {workLocations.map((location, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-100 text-center hover:shadow-md transition-all duration-300"
              >
                <div className="text-lg font-bold text-gray-900 mb-1">
                  {location}
                </div>
                <div className="w-8 h-0.5 bg-blue-500 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-3 py-1.5 mb-4 shadow-sm">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              <span className="text-xs font-medium text-gray-700">Our Values</span>
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              What Drives Us Forward
            </h2>
            
            <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our core values shape every decision we make and every service we deliver, 
              ensuring consistent excellence in all our client relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 lg:p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-12 translate-y-12"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-xl lg:text-2xl font-bold mb-3">
                Ready to Work Together?
              </h3>
              <p className="text-gray-300 mb-6 max-w-xl mx-auto text-sm lg:text-base">
                Let&apos;s discuss how our 15+ years of experience can help bring 
                your next project to successful completion.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-all duration-200 text-sm lg:text-base"
                >
                  Get In Touch
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="tel:+919205775477"
                  className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-white font-medium rounded-lg border border-white hover:bg-white hover:text-gray-900 transition-all duration-200 text-sm lg:text-base"
                >
                  Call: +91 92057 75477
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;