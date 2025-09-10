import React from 'react';
import Link from 'next/link';

const PrivacyPolicy = () => {
  const lastUpdated = "January 15, 2025";

  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Personal Information: Name, email address, phone number, and business address when you contact us or request our services.",
        "Project Information: Details about your projects, requirements, and specifications shared during consultations.",
        "Communication Records: Records of our communications, including emails, phone calls, and meeting notes.",
        "Technical Information: IP address, browser type, and device information when you visit our website."
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "Provide and deliver our professional services including project management consulting, project billing, manpower supply, electromechanical items supply, and property services.",
        "Communicate with you about your projects, service updates, and business matters.",
        "Process payments and maintain financial records related to our services.",
        "Improve our services and develop new offerings based on client needs.",
        "Comply with legal obligations and protect our legitimate business interests."
      ]
    },
    {
      title: "Information Sharing and Disclosure",
      content: [
        "We do not sell, trade, or rent your personal information to third parties.",
        "We may share information with trusted service providers who assist in our operations, under strict confidentiality agreements.",
        "We may disclose information when required by law or to protect our rights and the safety of others.",
        "Project-related information may be shared with relevant stakeholders as necessary for service delivery, with your consent."
      ]
    },
    {
      title: "Data Security",
      content: [
        "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
        "We use secure communication channels for sensitive information transmission.",
        "Access to personal information is limited to authorized personnel who need it for business purposes.",
        "We regularly review and update our security practices to ensure data protection."
      ]
    },
    {
      title: "Data Retention",
      content: [
        "We retain personal information only as long as necessary to fulfill the purposes for which it was collected.",
        "Project-related information is typically retained for 7 years for legal and business purposes.",
        "Communication records are maintained for the duration of our business relationship and as required by law.",
        "You may request deletion of your personal information, subject to legal and contractual obligations."
      ]
    },
    {
      title: "Your Rights",
      content: [
        "Access: Request access to your personal information we hold.",
        "Correction: Request correction of inaccurate or incomplete information.",
        "Deletion: Request deletion of your personal information, subject to legal requirements.",
        "Objection: Object to processing of your personal information for direct marketing purposes.",
        "Portability: Request transfer of your personal information to another service provider where technically feasible."
      ]
    },
    {
      title: "Cookies and Website Analytics",
      content: [
        "Our website may use cookies to improve user experience and analyze website traffic.",
        "You can disable cookies through your browser settings, though this may affect website functionality.",
        "We may use analytics tools to understand website usage patterns and improve our online presence.",
        "No personal information is collected through cookies without your explicit consent."
      ]
    },
    {
      title: "Third-Party Services",
      content: [
        "We may use third-party services for payment processing, email communication, and other business operations.",
        "These service providers are bound by confidentiality agreements and data protection requirements.",
        "We ensure that third-party services comply with applicable privacy laws and regulations.",
        "Links to third-party websites are provided for convenience, and we are not responsible for their privacy practices."
      ]
    },
    {
      title: "International Data Transfers",
      content: [
        "Your personal information is primarily processed and stored within India.",
        "If international transfers are necessary for service delivery, we ensure appropriate safeguards are in place.",
        "We comply with applicable laws regarding cross-border data transfers.",
        "You will be notified of any significant changes to data processing locations."
      ]
    },
    {
      title: "Changes to This Policy",
      content: [
        "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws.",
        "Significant changes will be communicated through email or prominent website notices.",
        "Continued use of our services after policy updates constitutes acceptance of the revised terms.",
        "The effective date of the current policy is indicated at the top of this document."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Link 
              href="/"
              className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-6 group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how Abhiraaj collects, uses, and protects your personal information.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 inline-block">
              <p className="text-gray-200 text-sm">
                <span className="font-semibold">Last Updated:</span> {lastUpdated}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200/60 p-8 mb-8">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-gray-100 rounded-xl">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Commitment to Your Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Abhiraaj is committed to protecting and respecting your privacy. As a professional project management consultant providing services including project billing, manpower supply, electromechanical items supply, and property services, we handle your information with the highest level of care and security. This Privacy Policy explains how we collect, use, store, and protect your personal information in accordance with applicable privacy laws and regulations.
              </p>
            </div>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200/60 overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-sm font-bold text-gray-600 mr-4">
                    {index + 1}
                  </span>
                  {section.title}
                </h3>
                
                <div className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-600 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl shadow-lg p-8 mt-12">
          <div className="text-center">
            <div className="p-4 bg-white/10 rounded-2xl inline-block mb-6">
              <svg className="w-8 h-8 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Questions About This Policy?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              If you have any questions about this Privacy Policy or how we handle your personal information, please don&apos;t hesitate to contact us.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a 
                href="mailto:abhiraaj@live.com"
                className="flex items-center justify-center space-x-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-4 transition-all duration-200 group"
              >
                <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-white font-medium">abhiraaj@live.com</span>
              </a>
              
              <a 
                href="tel:+919205775477"
                className="flex items-center justify-center space-x-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-4 transition-all duration-200 group"
              >
                <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-white font-medium">+91 92057 75477</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;