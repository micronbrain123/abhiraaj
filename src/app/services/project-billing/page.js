'use client';

import { useState } from 'react';

const ProjectBillingPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'benefits', label: 'Benefits' }
  ];

  const services = [
    'Invoice Generation & Management',
    'Time Tracking & Billing',
    'Expense Tracking & Reporting',
    'Multi-Currency Support',
    'Automated Billing Cycles',
    'Payment Processing Integration',
    'Financial Reporting & Analytics',
    'Tax Compliance & Documentation'
  ];

  const benefits = [
    { title: 'Accurate Billing', description: 'Eliminate billing errors and ensure accurate invoicing with automated systems.' },
    { title: 'Cash Flow Management', description: 'Improve cash flow with faster billing cycles and streamlined payment processes.' },
    { title: 'Time Efficiency', description: 'Reduce administrative overhead with automated billing and reporting systems.' },
    { title: 'Transparency', description: 'Provide clear, detailed billing information to clients and stakeholders.' }
  ];

  const processSteps = [
    { step: '1', title: 'Setup & Configuration', description: 'Configure billing parameters, rates, and client-specific requirements.' },
    { step: '2', title: 'Time & Expense Tracking', description: 'Monitor project hours, expenses, and resource utilization in real-time.' },
    { step: '3', title: 'Invoice Generation', description: 'Generate accurate, professional invoices based on tracked time and expenses.' },
    { step: '4', title: 'Review & Approval', description: 'Review billing details and obtain necessary approvals before sending invoices.' },
    { step: '5', title: 'Payment & Follow-up', description: 'Process payments and manage follow-ups for outstanding invoices.' }
  ];

  const billingModels = [
    { title: 'Fixed Price', description: 'Predetermined project cost with clear deliverables and milestones.' },
    { title: 'Time & Materials', description: 'Billing based on actual hours worked and materials used.' },
    { title: 'Retainer', description: 'Monthly retainer fee for ongoing services and support.' },
    { title: 'Milestone-based', description: 'Payment tied to specific project milestones and deliverables.' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Project Billing Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Streamline your project billing process with accurate tracking, automated invoicing, 
            and comprehensive financial reporting solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
              Get Free Demo
            </button>
            <button className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
              View Pricing
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Billing Solutions?</h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Our comprehensive billing solutions help you maintain accurate financial records, 
                    improve cash flow, and reduce administrative overhead for your projects.
                  </p>
                  <div className="space-y-4">
                    {[
                      'Automated invoice generation and delivery',
                      'Real-time expense and time tracking',
                      'Multi-currency and tax compliance support',
                      'Integration with popular accounting software',
                      'Detailed financial reporting and analytics'
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
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Billing Performance</h3>
                  <div className="space-y-6">
                    {[
                      { label: 'Billing Accuracy', value: 99 },
                      { label: 'Processing Speed', value: 95 },
                      { label: 'Client Satisfaction', value: 97 },
                      { label: 'Payment Collection', value: 88 }
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

              {/* Billing Models Section */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Supported Billing Models</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {billingModels.map((model, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">{model.title}</h4>
                      <p className="text-gray-600">{model.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Services Tab */}
          {activeTab === 'services' && (
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Billing Services</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Complete billing solutions designed to streamline your financial processes.
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
                        <p className="text-gray-600 text-sm">Professional {service.toLowerCase()} to ensure accurate and efficient financial management.</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Process Tab */}
          {activeTab === 'process' && (
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Billing Process</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  A systematic approach to ensure accurate and timely project billing.
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
                  The advantages of implementing our professional billing solutions.
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
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    'Reduced billing errors',
                    'Faster invoice processing',
                    'Improved client relationships',
                    'Better cash flow management',
                    'Detailed financial insights',
                    'Compliance with tax regulations'
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
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Streamline Your Billing?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our billing solutions can improve your project's financial management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors">
              Start Free Trial
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

export default ProjectBillingPage;