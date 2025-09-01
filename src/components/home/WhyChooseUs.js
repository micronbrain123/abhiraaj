const WhyChooseUs = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Proven Expertise",
      description: "Over 15+ years of experience in project management and supply chain solutions with a track record of successful project deliveries.",
      stats: "500+ Projects"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Fast & Efficient",
      description: "Quick turnaround times with efficient processes that ensure your projects stay on schedule without compromising quality.",
      stats: "24/7 Support"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "Cost-Effective",
      description: "Competitive pricing with transparent billing practices. Get maximum value for your investment with no hidden costs.",
      stats: "Best Rates"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Skilled Team",
      description: "Expert professionals with specialized skills in project management, technical services, and supply chain management.",
      stats: "Expert Team"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensure that all deliverables meet the highest standards and client expectations.",
      stats: "ISO Standards"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Wide Coverage",
      description: "Serving multiple locations including Delhi NCR, Vrindavan, Sonipat, Rohtak, and Udaipur with local expertise.",
      stats: "5+ Locations"
    }
  ];

  const testimonialStats = [
    { number: "98%", label: "Client Satisfaction" },
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Projects Delivered" },
    { number: "5", label: "Service Categories" }
  ];

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gray-50 rounded-full px-3 py-1.5 mb-4">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
            <span className="text-xs font-medium text-gray-700">Why Choose Abhiraaj</span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Professional Excellence in Every Project
          </h2>
          
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            With over 15+ years of industry experience, we deliver comprehensive project management 
            and supply solutions that drive success for our clients across multiple sectors.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {testimonialStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-xs text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700 rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {feature.stats}
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Arrow */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center text-gray-500 text-xs font-medium">
                  <span>Learn more</span>
                  <svg className="ml-1 w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-gray-50 to-white p-6 lg:p-8 rounded-xl border border-gray-200">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-sm text-gray-600 mb-6 max-w-xl mx-auto">
              Get in touch with our expert team to discuss your project requirements 
              and discover how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all duration-200 text-sm"
              >
                Get Free Consultation
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="tel:+919205775477"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-medium rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 text-sm"
              >
                <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call: +91 92057 75477
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;