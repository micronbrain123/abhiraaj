'use client';

import { useState } from 'react';

const ManpowerSupplyPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'benefits', label: 'Benefits' }
  ];

  const services = [
    'Skilled Technical Personnel',
    'Project-Based Staffing',
    'Contract & Temporary Staffing',
    'Permanent Placement Services',
    'Specialized Consultants',
    'Team Augmentation',
    'Executive Search & Recruitment',
    'Workforce Management Solutions'
  ];

  const benefits = [
    { title: 'Quality Talent', description: 'Access to pre-screened, qualified professionals with proven expertise.' },
    { title: 'Cost Efficiency', description: 'Reduce recruitment costs and overhead expenses with flexible staffing solutions.' },
    { title: 'Quick Deployment', description: 'Rapid mobilization of resources to meet urgent project requirements.' },
    { title: 'Risk Management', description: 'Minimize hiring risks with our thorough vetting and compliance processes.' }
  ];

  const processSteps = [
    { step: '1', title: 'Requirements Analysis', description: 'Understanding your specific manpower needs, skill requirements, and project timelines.' },
    { step: '2', title: 'Talent Sourcing', description: 'Leveraging our extensive network to identify and recruit suitable candidates.' },
    { step: '3', title: 'Screening & Assessment', description: 'Comprehensive evaluation including technical skills, experience, and cultural fit.' },
    { step: '4', title: 'Deployment & Onboarding', description: 'Smooth integration of selected personnel into your project teams.' },
    { step: '5', title: 'Ongoing Support', description: 'Continuous monitoring and support to ensure optimal performance and satisfaction.' }
  ];

  const sectors = [
    { title: 'Information Technology', skills: ['Software Development', 'System Administration', 'Data Analytics', 'Cybersecurity'] },
    { title: 'Engineering & Construction', skills: ['Civil Engineering', 'Mechanical Engineering', 'Project Management', 'Quality Control'] },
    { title: 'Healthcare', skills: ['Nursing', 'Medical Technology', 'Healthcare Administration', 'Clinical Research'] },
    { title: 'Finance & Accounting', skills: ['Financial Analysis', 'Accounting', 'Audit', 'Tax Compliance'] },
    { title: 'Manufacturing', skills: ['Production Management', 'Quality Assurance', 'Supply Chain', 'Maintenance'] },
    { title: 'Hospitality & Retail', skills: ['Customer Service', 'Sales', 'Operations Management', 'Event Management'] }
  ];

  const staffingTypes = [
    { title: 'Temporary Staffing', description: 'Short-term personnel for specific projects or seasonal demands.' },
    { title: 'Contract Staffing', description: 'Medium to long-term professionals for extended project durations.' },
    { title: 'Permanent Placement', description: 'Full-time employees for ongoing organizational needs.' },
    { title: 'Consultant Services', description: 'Specialized experts for advisory and implementation roles.' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Manpower Supply Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Connect with top-tier professionals across diverse industries. We provide skilled manpower 
            solutions tailored to your project requirements and business objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
              Find Talent
            </button>
            <button className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Post Requirements
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Manpower Solutions?</h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    With extensive industry experience and a vast network of qualified professionals, 
                    we deliver the right talent at the right time for your business success.
                  </p>
                  <div className="space-y-4">
                    {[
                      'Extensive talent pool across multiple industries',
                      'Rigorous screening and verification processes',
                      'Flexible engagement models and contracts',
                      'Compliance with labor laws and regulations',
                      '24/7 support and account management'
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
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Service Statistics</h3>
                  <div className="space-y-6">
                    {[
                      { label: 'Successful Placements', value: 94 },
                      { label: 'Client Retention Rate', value: 89 },
                      { label: 'Candidate Satisfaction', value: 96 },
                      { label: 'Time to Fill Positions', value: 85 }
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

              {/* Staffing Types Section */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Staffing Solutions</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {staffingTypes.map((type, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">{type.title}</h4>
                      <p className="text-gray-600">{type.description}</p>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Comprehensive manpower solutions to meet your diverse business requirements.
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
                        <p className="text-gray-600 text-sm">Professional {service.toLowerCase()} to support your business operations and project success.</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Industry Sectors */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Industry Expertise</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sectors.map((sector, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">{sector.title}</h4>
                      <div className="space-y-2">
                        {sector.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            <span className="text-sm text-gray-600">{skill}</span>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  A systematic approach to identify, evaluate, and deploy the right talent for your needs.
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
                  The advantages of partnering with our manpower supply services.
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
                    'Scalable workforce solutions',
                    'Reduced recruitment time',
                    'Access to specialized skills',
                    'Flexible contract terms',
                    'Compliance management',
                    'Performance monitoring',
                    'Cost-effective solutions',
                    'Industry expertise',
                    'Quality assurance'
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

              {/* Why Choose Us */}
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Why Businesses Choose Us</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Proven Track Record</h4>
                      <p className="text-gray-600 text-sm">Years of successful placements across diverse industries and project types.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Quality Assurance</h4>
                      <p className="text-gray-600 text-sm">Rigorous screening processes ensure only qualified candidates are presented.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Ongoing Support</h4>
                      <p className="text-gray-600 text-sm">Continuous support throughout the engagement period for optimal results.</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Find the Right Talent?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your manpower requirements and find the perfect professionals for your project.
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

export default ManpowerSupplyPage;