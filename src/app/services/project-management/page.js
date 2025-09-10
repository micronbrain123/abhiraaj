'use client';

import { useState } from 'react';

const ProjectManagementPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'benefits', label: 'Benefits' }
  ];

  const services = [
    'Project Planning & Strategy',
    'Risk Assessment & Mitigation',
    'Resource Allocation & Management',
    'Timeline Development & Monitoring',
    'Quality Control & Assurance',
    'Stakeholder Communication',
    'Budget Management',
    'Performance Tracking & Reporting'
  ];

  const benefits = [
    { title: 'Cost Efficiency', description: 'Optimize project budgets and reduce unnecessary expenses through strategic planning.' },
    { title: 'Time Management', description: 'Meet deadlines consistently with proper planning and execution frameworks.' },
    { title: 'Quality Assurance', description: 'Ensure high-quality deliverables at every stage with rigorous quality control.' },
    { title: 'Risk Reduction', description: 'Identify and mitigate potential project risks early to avoid costly delays.' }
  ];

  const processSteps = [
    { step: '1', title: 'Discovery & Analysis', description: 'Understanding project requirements, goals, constraints, and stakeholder expectations.' },
    { step: '2', title: 'Planning & Strategy', description: 'Developing comprehensive project plans with detailed timelines and resource allocation.' },
    { step: '3', title: 'Implementation', description: 'Executing the project plan with continuous monitoring and adaptive management practices.' },
    { step: '4', title: 'Monitoring & Control', description: 'Tracking progress, managing changes, and ensuring quality throughout the project lifecycle.' },
    { step: '5', title: 'Delivery & Closure', description: 'Ensuring successful project delivery and conducting thorough closure activities.' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Project Management Consulting
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Professional project management services to deliver your projects on time, 
            within budget, and to the highest standards of quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
              Get Free Consultation
            </button>
            <button className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
              View Portfolio
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Services?</h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    With extensive experience managing complex projects across various industries, 
                    we bring proven methodologies and best practices to ensure your project&apos;s success.
                  </p>
                  <div className="space-y-4">
                    {[
                      'Certified PMP professionals with industry expertise',
                      'Proven track record of successful project deliveries',
                      'Customized solutions for your specific needs',
                      'Transparent communication and regular updates'
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
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Success Metrics</h3>
                  <div className="space-y-6">
                    {[
                      { label: 'On-Time Delivery', value: 95 },
                      { label: 'Budget Adherence', value: 92 },
                      { label: 'Client Satisfaction', value: 98 }
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
            </div>
          )}

          {/* Services Tab */}
          {activeTab === 'services' && (
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Comprehensive project management services tailored to your specific requirements.
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
                        <p className="text-gray-600 text-sm">Professional {service.toLowerCase()} to ensure project success and stakeholder satisfaction.</p>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  A systematic approach to ensure efficient and effective project management.
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
                  The advantages of partnering with our professional project management team.
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
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our project management expertise can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors">
              Contact Us Today
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

export default ProjectManagementPage;