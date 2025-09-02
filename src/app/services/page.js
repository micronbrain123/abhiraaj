import React from 'react';
import { ArrowRight, Users, Calculator, HardHat, Zap, Home } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Project Management Consultant',
    description: 'Professional project management services to ensure your projects are completed on time, within budget, and to the highest quality standards.',
    icon: Users,
    href: '/services/project-management',
    features: ['Strategic Planning', 'Risk Management', 'Quality Assurance', 'Timeline Optimization']
  },
  {
    id: 2,
    title: 'Project Billing',
    description: 'Comprehensive billing and financial management services for construction and development projects with accurate cost tracking.',
    icon: Calculator,
    href: '/services/project-billing',
    features: ['Cost Estimation', 'Invoice Management', 'Financial Reporting', 'Budget Control']
  },
  {
    id: 3,
    title: 'Man Power Supply',
    description: 'Reliable skilled and unskilled workforce supply for construction, industrial, and commercial projects across various sectors.',
    icon: HardHat,
    href: '/services/man-power-supply',
    features: ['Skilled Workers', 'Safety Trained Staff', 'Flexible Staffing', 'Quality Personnel']
  },
  {
    id: 4,
    title: 'Electromechanical Items Supply',
    description: 'Supply of high-quality electromechanical equipment and components for industrial and commercial applications.',
    icon: Zap,
    href: '/services/electromechanical-items',
    features: ['Quality Components', 'Technical Support', 'Timely Delivery', 'Competitive Pricing']
  },
  {
    id: 5,
    title: 'Property Sell and Purchase',
    description: 'Expert real estate services for buying and selling residential and commercial properties with complete legal support.',
    icon: Home,
    href: '/services/property-services',
    features: ['Market Analysis', 'Legal Documentation', 'Property Evaluation', 'Transaction Support']
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-800 mb-3">
            Our Services
          </h1>
          <p className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed text-gray-600">
            Comprehensive solutions for all your construction, management, and property needs. 
            We deliver excellence across multiple domains with professional expertise.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Icon Section */}
                      <div className="flex-shrink-0">
                        <div 
                          className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center"
                        >
                          <Icon className="w-6 h-6 text-gray-600" />
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="flex-1 space-y-4">
                        <div>
                          <h2 className="text-lg md:text-xl font-medium mb-2 text-gray-800">
                            {service.title}
                          </h2>
                          <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                            {service.description}
                          </p>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div 
                                className="w-1 h-1 bg-gray-400 rounded-full"
                              ></div>
                              <span className="text-xs font-normal text-gray-500">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Learn More Link */}
                        <div className="pt-2">
                          <a 
                            href={service.href}
                            className="inline-flex items-center space-x-2 text-xs font-normal text-gray-700 hover:text-gray-900 hover:underline transition-all duration-200"
                          >
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-xl font-medium text-gray-800 mb-3">
            Ready to Get Started?
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Contact us today to discuss your project requirements and discover how we can help you achieve your goals.
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center space-x-2 bg-gray-800 hover:bg-gray-900 text-white px-12 py-2.5 rounded-md text-base font-normal transition-all duration-200"
          >
            <span>Contact Us Today</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}