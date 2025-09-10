'use client';

import { useState } from 'react';

const ElectromechanicalSupplyPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'products', label: 'Products' },
    { id: 'process', label: 'Process' },
    { id: 'benefits', label: 'Benefits' }
  ];

  const productCategories = [
    'Motors & Drives',
    'Control Systems & Panels',
    'Power Distribution Equipment',
    'Sensors & Instrumentation',
    'Pumps & Compressors',
    'HVAC Systems',
    'Industrial Automation Components',
    'Safety & Protection Devices'
  ];

  const benefits = [
    { title: 'Quality Assurance', description: 'Certified products from trusted manufacturers with comprehensive warranties.' },
    { title: 'Technical Support', description: 'Expert technical assistance for product selection and implementation.' },
    { title: 'Competitive Pricing', description: 'Cost-effective solutions through strategic supplier partnerships.' },
    { title: 'Timely Delivery', description: 'Efficient supply chain management ensuring on-time delivery.' }
  ];

  const processSteps = [
    { step: '1', title: 'Requirement Analysis', description: 'Understanding your specific technical requirements and project specifications.' },
    { step: '2', title: 'Product Selection', description: 'Identifying suitable products from our extensive catalog of certified suppliers.' },
    { step: '3', title: 'Quotation & Approval', description: 'Providing detailed quotations with technical specifications and delivery timelines.' },
    { step: '4', title: 'Procurement & Quality Check', description: 'Sourcing products and conducting thorough quality inspections before dispatch.' },
    { step: '5', title: 'Delivery & Support', description: 'Ensuring safe delivery with ongoing technical support and after-sales service.' }
  ];

  const industries = [
    { 
      title: 'Manufacturing', 
      products: ['Industrial Motors', 'Control Panels', 'Conveyor Systems', 'Safety Equipment'] 
    },
    { 
      title: 'Oil & Gas', 
      products: ['Explosion-Proof Equipment', 'Pressure Sensors', 'Flow Control Valves', 'Emergency Shutdown Systems'] 
    },
    { 
      title: 'Construction', 
      products: ['Building Automation', 'HVAC Systems', 'Electrical Distribution', 'Lighting Solutions'] 
    },
    { 
      title: 'Water Treatment', 
      products: ['Pumps & Motors', 'Control Systems', 'Filtration Equipment', 'Monitoring Instruments'] 
    },
    { 
      title: 'Power Generation', 
      products: ['Generators', 'Switchgear', 'Protection Relays', 'Monitoring Systems'] 
    },
    { 
      title: 'Mining', 
      products: ['Heavy-Duty Motors', 'Conveyor Components', 'Ventilation Systems', 'Safety Equipment'] 
    }
  ];

  const supplierPartners = [
    { name: 'Siemens', category: 'Automation & Control' },
    { name: 'ABB', category: 'Motors & Drives' },
    { name: 'Schneider Electric', category: 'Power Distribution' },
    { name: 'Honeywell', category: 'Process Control' },
    { name: 'Emerson', category: 'Industrial Automation' },
    { name: 'Rockwell Automation', category: 'Control Systems' }
  ];

  const specifications = [
    { title: 'Voltage Range', value: '24V DC to 690V AC' },
    { title: 'Power Rating', value: '0.1kW to 5000kW' },
    { title: 'Temperature Range', value: '-40°C to +85°C' },
    { title: 'Protection Rating', value: 'IP20 to IP68' },
    { title: 'Certifications', value: 'CE, UL, IEC, ATEX' },
    { title: 'Warranty Period', value: '12-36 Months' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Electromechanical Items Supply
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Comprehensive supply of high-quality electromechanical components and systems 
            from leading manufacturers for industrial, commercial, and infrastructure projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
              Request Quote
            </button>
            <button className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Product Catalog
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Supply Services?</h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    With established partnerships with leading manufacturers and extensive industry experience, 
                    we provide reliable supply of certified electromechanical components for diverse applications.
                  </p>
                  <div className="space-y-4">
                    {[
                      'Authorized dealer for premium brands',
                      'Comprehensive product range and inventory',
                      'Technical expertise and application support',
                      'Competitive pricing with bulk discounts',
                      'Fast delivery and logistics support'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <p className="text-gray-600">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Supply Performance</h3>
                  <div className="space-y-6">
                    {[
                      { label: 'Order Accuracy', value: 98 },
                      { label: 'On-Time Delivery', value: 95 },
                      { label: 'Product Quality', value: 99 },
                      { label: 'Customer Satisfaction', value: 96 }
                    ].map((stat, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-700 font-medium">{stat.label}</span>
                          <span className="text-gray-900 font-bold">{stat.value}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gray-900 h-2 rounded-full" style={{width: `${stat.value}%`}}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technical Specifications */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technical Specifications Range</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {specifications.map((spec, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{spec.title}</h4>
                      <p className="text-gray-600 font-medium">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Supplier Partners */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Authorized Partners</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {supplierPartners.map((partner, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                      <h4 className="font-semibold text-gray-900 mb-1">{partner.name}</h4>
                      <p className="text-sm text-gray-600">{partner.category}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Products Tab */}
          {activeTab === 'products' && (
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Product Range</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Comprehensive selection of electromechanical components and systems for diverse applications.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {productCategories.map((category, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{category}</h3>
                        <p className="text-gray-600 text-sm">High-quality {category.toLowerCase()} from certified manufacturers with full technical support.</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Industry Applications */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Industry Applications</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {industries.map((industry, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">{industry.title}</h4>
                      <div className="space-y-2">
                        {industry.products.map((product, productIndex) => (
                          <div key={productIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            <span className="text-sm text-gray-600">{product}</span>
                          </div>
                        ))}
                      </div>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Supply Process</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Streamlined process to ensure accurate procurement and timely delivery of your requirements.
                </p>
              </div>
              <div className="space-y-6">
                {processSteps.map((phase, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
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
            </div>
          )}

          {/* Benefits Tab */}
          {activeTab === 'benefits' && (
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Benefits</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  The advantages of partnering with us for your electromechanical supply needs.
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
                    'Bulk quantity discounts',
                    'Express delivery options',
                    'Technical documentation',
                    'Installation support',
                    'Warranty management',
                    'Spare parts availability',
                    'Custom configurations',
                    'Training programs',
                    '24/7 technical hotline'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quality Standards */}
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Quality & Compliance</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Quality Standards</h4>
                    <div className="space-y-2">
                      {['ISO 9001:2015 Certified', 'IEC Standards Compliance', 'CE Marking Verification', 'UL Listed Products'].map((standard, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                          <span className="text-sm text-gray-600">{standard}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Testing & Inspection</h4>
                    <div className="space-y-2">
                      {['Factory Acceptance Testing', 'Pre-Shipment Inspection', 'Documentation Verification', 'Performance Testing'].map((test, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                          <span className="text-sm text-gray-600">{test}</span>
                        </div>
                      ))}
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Source Your Components?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your electromechanical supply requirements and provide the best solutions for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors">
              Get Quote Today
            </button>
            <button className="px-8 py-3 border border-gray-600 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
              Call: 92057 75477
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ElectromechanicalSupplyPage;