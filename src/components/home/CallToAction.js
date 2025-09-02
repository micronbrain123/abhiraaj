const CallToAction = () => {
  const contactOptions = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Us",
      description: "Speak directly with our experts",
      contact: "+91 92057 75477",
      href: "tel:+919205775477",
      bgColor: "from-blue-50 to-blue-100",
      textColor: "text-blue-700",
      hoverColor: "hover:from-blue-100 hover:to-blue-200"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      description: "Send us your project details",
      contact: "info@abhiraaj.com",
      href: "mailto:info@abhiraaj.com",
      bgColor: "from-green-50 to-green-100",
      textColor: "text-green-700",
      hoverColor: "hover:from-green-100 hover:to-green-200"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visit Us",
      description: "Meet us at our office",
      contact: "Delhi NCR, India",
      href: "/contact",
      bgColor: "from-purple-50 to-purple-100",
      textColor: "text-purple-700",
      hoverColor: "hover:from-purple-100 hover:to-purple-200"
    }
  ];

  const benefits = [
    "Free Initial Consultation",
    "Custom Project Solutions",
    "15+ Years Experience",
    "24/7 Customer Support"
  ];

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-3 py-1.5 mb-4 shadow-sm">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
            <span className="text-xs font-medium text-gray-700">Get Started Today</span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of satisfied clients who have achieved success with our 
            comprehensive project management and supply chain solutions.
          </p>
        </div>

        {/* Main CTA Card */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 lg:p-8 mb-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-12 translate-y-12"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-xl lg:text-2xl font-bold mb-3">
              Start Your Project Today
            </h3>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto text-sm lg:text-base">
              Get a free consultation and project estimate. Our experts are ready 
              to help you achieve your business goals with proven strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-all duration-200 text-sm lg:text-base shadow-lg hover:shadow-xl"
              >
                Get Free Consultation
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              
              <div className="flex items-center space-x-4 text-sm">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300 hidden sm:inline">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactOptions.map((option, index) => (
            <a
              key={index}
              href={option.href}
              className={`group bg-gradient-to-br ${option.bgColor} ${option.hoverColor} p-6 rounded-xl border border-gray-100 transition-all duration-300 hover:shadow-lg block`}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-white ${option.textColor} rounded-xl mb-4 shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                {option.icon}
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900">
                  {option.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {option.description}
                </p>
                <p className={`text-sm font-medium ${option.textColor}`}>
                  {option.contact}
                </p>
              </div>

              {/* Hover Arrow */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center text-gray-500 text-xs font-medium">
                  <span>Contact now</span>
                  <svg className="ml-1 w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-white to-gray-50 p-6 lg:p-8 rounded-xl border border-gray-200">
          <div className="text-center">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Trusted by 500+ Clients Across Multiple Industries
            </h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-xs text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-xs text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-xs text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">5</div>
                <div className="text-xs text-gray-600">Major Cities</div>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-6">
              From Delhi NCR to Udaipur, we've helped businesses across industries achieve 
              their goals with our comprehensive solutions and dedicated support.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+919205775477"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all duration-200 text-sm"
              >
                <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now: +91 92057 75477
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-medium rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 text-sm"
              >
                View Our Work
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CallToAction;