const ContactPage = () => {
  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      description: "Call us for immediate assistance",
      contact: "+91 92057 75477",
      href: "tel:+919205775477",
      bgColor: "from-blue-50 to-blue-100",
      textColor: "text-blue-700"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      description: "Send us your project details",
      contact: "abhiraaj@live.com",
      href: "mailto:abhiraaj@live.com",
      bgColor: "from-green-50 to-green-100",
      textColor: "text-green-700"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visit Us",
      description: "Meet us at our office",
      contact: "Sector-105, Faridabad, Haryana",
      href: "#location",
      bgColor: "from-purple-50 to-purple-100",
      textColor: "text-purple-700"
    }
  ];

  const workLocations = [
    {
      city: "Delhi NCR",
      description: "Primary service area with comprehensive coverage"
    },
    {
      city: "Faridabad",
      description: "Headquarters location with full office facilities"
    },
    {
      city: "Vrindavan",
      description: "Regional service center for specialized projects"
    },
    {
      city: "Sonipat",
      description: "Local presence for quick project support"
    },
    {
      city: "Rohtak",
      description: "Extended service coverage for diverse clientele"
    },
    {
      city: "Udaipur",
      description: "Rajasthan operations with local expertise"
    }
  ];

  const services = [
    "Project Management Consultant",
    "Project Billing", 
    "Man Power Supply",
    "Electromechanical Items Supply",
    "Property Sell and Purchase"
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-3 py-1.5 mb-4 shadow-sm">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              <span className="text-xs font-medium text-gray-700">Contact Abhiraaj</span>
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Let's Start Your Next Project
            </h1>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your project requirements? Our team of experts is here to help 
              you achieve your business goals with our comprehensive solutions and dedicated support.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="text-center">
              <div className="bg-gradient-to-br from-white to-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">24/7</div>
                <div className="text-xs text-gray-600 font-medium">Support Available</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-white to-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">15+</div>
                <div className="text-xs text-gray-600 font-medium">Years Experience</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-white to-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">500+</div>
                <div className="text-xs text-gray-600 font-medium">Projects Completed</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-white to-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">6+</div>
                <div className="text-xs text-gray-600 font-medium">Cities Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Choose your preferred way to reach us. We're here to help and respond 
              quickly to all inquiries about our services and project opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                className={`group bg-gradient-to-br ${method.bgColor} hover:shadow-lg p-6 rounded-xl border border-gray-100 transition-all duration-300 block`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-white ${method.textColor} rounded-xl mb-4 shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                  {method.icon}
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-gray-900">
                    {method.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {method.description}
                  </p>
                  <p className={`text-sm font-medium ${method.textColor}`}>
                    {method.contact}
                  </p>
                </div>

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
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Fill out the form below and we'll get back to you within 24 hours 
              with a detailed response to your inquiry.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 p-6 lg:p-8 rounded-xl border border-gray-100 shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Required
                </label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Location
                </label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                  <option value="">Select location</option>
                  <option value="delhi-ncr">Delhi NCR</option>
                  <option value="faridabad">Faridabad</option>
                  <option value="vrindavan">Vrindavan</option>
                  <option value="sonipat">Sonipat</option>
                  <option value="rohtak">Rohtak</option>
                  <option value="udaipur">Udaipur (Rajasthan)</option>
                  <option value="other">Other Location</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                  placeholder="Please describe your project requirements, timeline, and any specific details..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all duration-200 text-sm lg:text-base"
                >
                  Send Message
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
                <p className="text-xs text-gray-500 mt-3">
                  We'll respond within 24 hours with a detailed consultation
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Office Details */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-gray-50 rounded-full px-3 py-1.5 mb-4">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                <span className="text-xs font-medium text-gray-700">Office Information</span>
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Visit Our Office
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Abhiraaj Headquarters
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-gray-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900">Address</div>
                        <div className="text-gray-600 text-sm">Sector-105, Faridabad, Haryana</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-gray-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900">Business Hours</div>
                        <div className="text-gray-600 text-sm">Monday - Saturday: 9:00 AM - 6:00 PM</div>
                        <div className="text-gray-600 text-sm">Sunday: Available for urgent projects</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-gray-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900">Emergency Contact</div>
                        <div className="text-gray-600 text-sm">24/7 support for existing projects</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+919205775477"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all duration-200 text-sm"
                  >
                    <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call: +91 92057 75477
                  </a>
                  <a
                    href="mailto:abhiraaj@live.com"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-medium rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 text-sm"
                  >
                    <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Us
                  </a>
                </div>
              </div>
            </div>

            {/* Services & Locations */}
            <div className="space-y-8">
              {/* Services */}
              <div>
                <div className="inline-flex items-center space-x-2 bg-gray-50 rounded-full px-3 py-1.5 mb-4">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span className="text-xs font-medium text-gray-700">Our Services</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  What We Offer
                </h3>
                
                <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-100">
                  <div className="grid grid-cols-1 gap-3">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Work Locations */}
              <div id="location">
                <div className="inline-flex items-center space-x-2 bg-gray-50 rounded-full px-3 py-1.5 mb-4">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span className="text-xs font-medium text-gray-700">Service Areas</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Where We Work
                </h3>
                
                <div className="space-y-3">
                  {workLocations.map((location, index) => (
                    <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-4 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">{location.city}</div>
                          <div className="text-xs text-gray-600">{location.description}</div>
                        </div>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 lg:p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-12 translate-y-12"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-xl lg:text-2xl font-bold mb-3">
                Need Immediate Assistance?
              </h3>
              <p className="text-gray-300 mb-6 max-w-xl mx-auto text-sm lg:text-base">
                For urgent project matters or emergency support, our team is available 
                24/7 to help you resolve any issues quickly and efficiently.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+919205775477"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-all duration-200 text-sm lg:text-base"
                >
                  <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Emergency Call: +91 92057 75477
                </a>
                <a
                  href="mailto:abhiraaj@live.com?subject=Urgent Project Matter"
                  className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-white font-medium rounded-lg border border-white hover:bg-white hover:text-gray-900 transition-all duration-200 text-sm lg:text-base"
                >
                  Urgent Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;