'use client';

import { useState } from 'react';

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'quality',
      title: 'Quality Assurance',
      subtitle: 'Excellence in Every Delivery',
      description: 'We maintain the highest standards of quality across all our services with rigorous quality control processes and continuous improvement initiatives.',
      features: [
        'ISO Standard Compliance',
        'Regular Quality Audits',
        'Certified Professionals',
        'Continuous Improvement',
        'Client Feedback Integration'
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      stats: { value: '98%', label: 'Quality Score' }
    },
    {
      id: 'technology',
      title: 'Modern Technology',
      subtitle: 'Cutting-Edge Solutions',
      description: 'Leveraging the latest technology and digital tools to streamline processes, improve efficiency, and deliver superior results for our clients.',
      features: [
        'Digital Project Management',
        'Real-time Tracking Systems',
        'Cloud-based Solutions',
        'Mobile Applications',
        'Data Analytics & Reporting'
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      stats: { value: '24/7', label: 'System Uptime' }
    },
    {
      id: 'support',
      title: 'Customer Support',
      subtitle: 'Always Here for You',
      description: 'Round-the-clock customer support with dedicated account managers ensuring seamless communication and prompt resolution of any concerns.',
      features: [
        '24/7 Customer Support',
        'Dedicated Account Managers',
        'Multi-channel Communication',
        'Quick Response Times',
        'Proactive Issue Resolution'
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25c0 1.117.448 2.153 1.172 2.925m3.025 3.025A6.25 6.25 0 0012 21.75c-1.117 0-2.153-.448-2.925-1.172m-3.025-3.025A6.25 6.25 0 012.25 12c0-1.117.448-2.153 1.172-2.925" />
        </svg>
      ),
      stats: { value: '<2hrs', label: 'Response Time' }
    },
    {
      id: 'experience',
      title: 'Industry Experience',
      subtitle: 'Proven Track Record',
      description: 'Over 15+ years of industry experience with successful project deliveries across various sectors and a deep understanding of market dynamics.',
      features: [
        '15+ Years Experience',
        'Multi-sector Expertise',
        'Proven Methodologies',
        'Industry Best Practices',
        'Continuous Learning'
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stats: { value: '500+', label: 'Projects Done' }
    }
  ];

  const achievements = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Secure Operations',
      description: 'Data security and confidentiality maintained at all levels'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising quality'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: 'Cost Effective',
      description: 'Competitive pricing with transparent billing practices'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Guaranteed Results',
      description: 'Success-oriented approach with measurable outcomes'
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gray-50 rounded-full px-3 py-1.5 mb-4">
            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
            <span className="text-xs font-medium text-gray-700">Key Features</span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            What Makes Us Different
          </h2>
          
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover the key features and advantages that set Abhiraaj apart in delivering 
            exceptional project management and supply chain solutions.
          </p>
        </div>

        {/* Tabbed Content */}
        <div className="mb-12">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-1.5 mb-8 p-1.5 bg-gray-50 rounded-xl">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2.5 rounded-lg font-medium transition-all duration-300 text-sm ${
                  activeTab === index
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 lg:p-8 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              {/* Left Content */}
              <div className="space-y-5">
                {/* Icon & Stats */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700 rounded-xl">
                    {tabs[activeTab].icon}
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-gray-900">
                      {tabs[activeTab].stats.value}
                    </div>
                    <div className="text-xs text-gray-600">
                      {tabs[activeTab].stats.label}
                    </div>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">
                      {tabs[activeTab].title}
                    </h3>
                    <div className="text-base text-gray-600 font-medium">
                      {tabs[activeTab].subtitle}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {tabs[activeTab].description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-2.5">
                  {tabs[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Visual */}
              <div className="relative">
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-base font-medium text-gray-900">
                      {tabs[activeTab].title} Dashboard
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Mock Dashboard Content */}
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-gray-50 p-2.5 rounded-lg">
                          <div className="w-full h-1.5 bg-gray-200 rounded mb-2"></div>
                          <div className="w-2/3 h-1.5 bg-gray-300 rounded"></div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <div className="w-1/3 h-2.5 bg-gray-300 rounded"></div>
                        <div className="w-1/4 h-2.5 bg-gray-200 rounded"></div>
                      </div>
                      <div className="space-y-1.5">
                        <div className="w-full h-1.5 bg-gray-200 rounded"></div>
                        <div className="w-4/5 h-1.5 bg-gray-200 rounded"></div>
                        <div className="w-3/5 h-1.5 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-purple-400 rounded-full opacity-40 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group text-center p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700 rounded-xl mb-3 group-hover:scale-105 transition-transform duration-300">
                {achievement.icon}
              </div>
              <h3 className="text-base font-medium text-gray-900 mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-600 text-xs">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;