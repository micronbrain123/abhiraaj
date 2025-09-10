'use client';

import { useState } from 'react';

const PropertyServicesPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'benefits', label: 'Benefits' }
  ];

  const services = [
    'Property Buying Consultation',
    'Property Selling & Marketing',
    'Property Valuation & Appraisal',
    'Investment Advisory Services',
    'Legal Documentation Support',
    'Property Management',
    'Market Analysis & Research',
    'Mortgage & Financing Assistance'
  ];

  const benefits = [
    { title: 'Market Expertise', description: 'Deep knowledge of NCR and North India real estate markets and property trends.' },
    { title: 'End-to-End Service', description: 'Complete support from property search to final documentation.' },
    { title: 'Transparent Process', description: 'Clear communication and transparent pricing throughout the transaction.' },
    { title: 'Legal Compliance', description: 'Ensuring all transactions comply with local laws and regulations.' }
  ];

  const processSteps = [
    { step: '1', title: 'Consultation & Requirements', description: 'Understanding your property needs, budget, and preferences through detailed consultation.' },
    { step: '2', title: 'Property Search & Evaluation', description: 'Identifying suitable properties based on your criteria and conducting thorough evaluations.' },
    { step: '3', title: 'Negotiation & Agreement', description: 'Negotiating the best terms and preparing purchase/sale agreements.' },
    { step: '4', title: 'Due Diligence & Documentation', description: 'Conducting property inspections, verifying documents, and ensuring legal compliance.' },
    { step: '5', title: 'Transaction Completion', description: 'Facilitating final payments, registration, and handover of property ownership.' }
  ];

  const propertyTypes = [
    { 
      title: 'Residential Properties', 
      types: ['Apartments & Condos', 'Independent Houses', 'Villas & Bungalows', 'Plots & Land'] 
    },
    { 
      title: 'Commercial Properties', 
      types: ['Office Spaces', 'Retail Shops', 'Warehouses', 'Industrial Land'] 
    },
    { 
      title: 'Investment Properties', 
      types: ['Rental Properties', 'Commercial Buildings', 'Development Land', 'REITs'] 
    },
    { 
      title: 'Luxury Properties', 
      types: ['Premium Apartments', 'Luxury Villas', 'Penthouses', 'Farmhouses'] 
    }
  ];

  const marketInsights = [
    { metric: 'Properties Sold', value: '300+', period: 'Last Year' },
    { metric: 'Average Days on Market', value: '35', period: 'Current Quarter' },
    { metric: 'Client Satisfaction', value: '95%', period: 'Overall Rating' },
    { metric: 'Market Coverage', value: '5+', period: 'Cities Served' }
  ];

  const locations = [
    'Delhi NCR',
    'Vrindavan',
    'Sonipat',
    'Rohtak',
    'Udaipur (Rajasthan)',
    'Faridabad, Haryana'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Abhiraaj Property Services
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Professional real estate services for buying, selling, and investing in properties across North India. 
            We provide expert guidance and comprehensive support throughout your property journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-black text-white font-medium rounded-lg">
              Find Properties
            </button>
            <button className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Sell Property
            </button>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-16">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Abhiraaj Property Services?</h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    With extensive experience in the North India real estate market and deep local knowledge, 
                    we provide comprehensive property services tailored to your specific needs and goals.
                  </p>
                  <div className="space-y-4">
                    {[
                      'Licensed real estate professionals',
                      'Extensive property database across NCR',
                      'Market analysis and pricing expertise',
                      'Legal and documentation support',
                      'Personalized service and consultation'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <p className="text-gray-600">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Market Performance</h3>
                  <div className="space-y-6">
                    {[
                      { label: 'Successful Transactions', value: 94 },
                      { label: 'Client Satisfaction', value: 95 },
                      { label: 'Market Knowledge', value: 96 },
                      { label: 'On-Time Closure', value: 90 }
                    ].map((stat, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-700 font-medium">{stat.label}</span>
                          <span className="text-gray-900 font-bold">{stat.value}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-black h-2 rounded-full" style={{width: `${stat.value}%`}}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Market Insights */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Market Insights</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {marketInsights.map((insight, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                      <div className="text-3xl font-bold text-black mb-2">{insight.value}</div>
                      <div className="text-lg font-semibold text-gray-700 mb-1">{insight.metric}</div>
                      <div className="text-sm text-gray-500">{insight.period}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Areas */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Work Locations</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {locations.map((location, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                      <span className="text-gray-700 font-medium">{location}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 inline-block">
                    <h4 className="font-semibold text-gray-900 mb-2">Business Hours</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                      <div>Saturday: 9:00 AM - 2:00 PM</div>
                      <div>Sunday: Closed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Services Tab */}
          {activeTab === 'services' && (
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Comprehensive real estate services covering all aspects of property transactions across North India.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{service}</h3>
                        <p className="text-gray-600 text-sm">Professional {service.toLowerCase()} with expert guidance and comprehensive support.</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Property Types */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Property Types</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {propertyTypes.map((category, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">{category.title}</h4>
                      <div className="space-y-2">
                        {category.types.map((type, typeIndex) => (
                          <div key={typeIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-black rounded-full"></div>
                            <span className="text-sm text-gray-600">{type}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Services */}
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Additional Services</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    'Property Photography',
                    'Virtual Property Tours',
                    'Home Staging Advice',
                    'Market Comparison Analysis',
                    'Investment Portfolio Review',
                    'Rental Property Management'
                  ].map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700 text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Process Tab */}
          {activeTab === 'process' && (
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  A systematic approach to ensure smooth and successful property transactions.
                </p>
              </div>
              <div className="space-y-6">
                {processSteps.map((phase, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">{phase.step}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{phase.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Process Benefits */}
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Process Benefits</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">For Buyers</h4>
                    <div className="space-y-2">
                      {['Personalized property search', 'Market analysis and insights', 'Negotiation support', 'Legal documentation assistance'].map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-black rounded-full"></div>
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">For Sellers</h4>
                    <div className="space-y-2">
                      {['Property valuation and pricing', 'Marketing and promotion', 'Buyer screening and qualification', 'Transaction management'].map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-black rounded-full"></div>
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Benefits Tab */}
          {activeTab === 'benefits' && (
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Benefits</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  The advantages of choosing Abhiraaj professional property services.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>

              {/* Additional Benefits */}
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Additional Benefits</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    'Save time and effort',
                    'Access to exclusive listings',
                    'Professional networking',
                    'Market trend insights',
                    'Investment advice',
                    'Financing assistance',
                    'Risk mitigation',
                    'After-sale support',
                    'Property maintenance guidance'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Value Proposition */}
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Our Value Proposition</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">North India Market Knowledge</h4>
                      <p className="text-gray-600 text-sm">Deep understanding of NCR, Haryana, and Rajasthan property trends, pricing, and growth potential.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Professional Approach</h4>
                      <p className="text-gray-600 text-sm">Comprehensive project management experience applied to real estate transactions.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Personalized Service</h4>
                      <p className="text-gray-600 text-sm">Tailored solutions based on your specific needs, preferences, and budget across multiple locations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Property Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're buying, selling, or investing across North India, we're here to guide you through every step of the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-black font-medium rounded-lg">
              Schedule Consultation
            </button>
            <button className="px-8 py-3 border border-gray-600 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
              Call: 92057 75477
            </button>
          </div>
          <div className="mt-6 text-gray-400">
            <p>📍 Sector-105, Faridabad, Haryana, India</p>
            <p>✉️ abhiraaj@live.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyServicesPage;