import React from 'react';
import Link from 'next/link';

const TermsOfService = () => {
  const lastUpdated = "January 15, 2025";

  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By engaging our services or accessing our website, you agree to be bound by these Terms of Service and all applicable laws and regulations.",
        "If you do not agree with any of these terms, you are prohibited from using or accessing our services.",
        "These terms constitute a legally binding agreement between you and Abhiraaj.",
        "We reserve the right to update these terms at any time, and continued use of our services constitutes acceptance of any modifications."
      ]
    },
    {
      title: "Services Description",
      content: [
        "Project Management Consulting: Professional guidance and oversight for your projects from conception to completion.",
        "Project Billing Services: Comprehensive billing management, invoice processing, and financial documentation for projects.",
        "Manpower Supply: Provision of qualified personnel for temporary or permanent positions across various sectors.",
        "Electromechanical Items Supply: Sourcing and supply of quality electromechanical equipment and components.",
        "Property Services: Real estate consulting, property management, and related professional services."
      ]
    },
    {
      title: "Service Terms and Conditions",
      content: [
        "All services are provided subject to separate service agreements that detail specific terms, deliverables, and timelines.",
        "Service availability may vary based on location, with primary operations in Delhi NCR, Vrindavan, Sonipat, Rohtak, and Udaipur.",
        "We reserve the right to refuse service or terminate existing agreements for breach of terms or non-payment.",
        "Service modifications or customizations may incur additional charges as mutually agreed upon.",
        "Force majeure events may affect service delivery, and we will make reasonable efforts to minimize disruptions."
      ]
    },
    {
      title: "Payment Terms",
      content: [
        "Payment terms are specified in individual service agreements and may vary based on service type and duration.",
        "Standard payment terms are Net 30 days from invoice date unless otherwise specified in the service agreement.",
        "Late payments may incur interest charges at the rate of 1.5% per month or the maximum allowed by law.",
        "All prices are exclusive of applicable taxes unless explicitly stated otherwise.",
        "Refunds are subject to the terms specified in individual service agreements and applicable consumer protection laws."
      ]
    },
    {
      title: "Client Responsibilities",
      content: [
        "Provide accurate and complete information necessary for service delivery.",
        "Ensure timely payment of all invoices and fees as per agreed terms.",
        "Comply with all applicable laws and regulations related to the services being provided.",
        "Provide reasonable access to facilities, personnel, and information required for service delivery.",
        "Maintain confidentiality of any proprietary information shared by Abhiraaj during service delivery."
      ]
    },
    {
      title: "Intellectual Property Rights",
      content: [
        "All intellectual property developed by Abhiraaj in the course of providing services remains our property unless otherwise agreed in writing.",
        "Clients retain ownership of their pre-existing intellectual property and information provided to us.",
        "We may use general knowledge, skills, and experience gained during service delivery for other clients.",
        "Any jointly developed intellectual property will be governed by specific agreements executed between parties.",
        "Unauthorized use of our intellectual property, including methodologies and processes, is strictly prohibited."
      ]
    },
    {
      title: "Confidentiality and Non-Disclosure",
      content: [
        "We maintain strict confidentiality regarding all client information and business matters.",
        "Confidential information includes but is not limited to business plans, financial data, technical specifications, and proprietary processes.",
        "Our confidentiality obligations survive termination of service agreements indefinitely unless information becomes publicly available.",
        "We may disclose confidential information only when required by law or with explicit written consent from the client.",
        "Clients are expected to maintain similar confidentiality regarding our business methods and proprietary information."
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        "Our total liability for any claim arising from our services shall not exceed the total amount paid by the client for the specific service giving rise to the claim.",
        "We are not liable for indirect, consequential, special, or punitive damages under any circumstances.",
        "Force majeure events, including but not limited to natural disasters, government actions, or labor disputes, may affect service delivery without liability.",
        "Clients are responsible for maintaining adequate insurance coverage for their operations and projects.",
        "Our liability is limited to direct damages caused by our negligence or breach of contract."
      ]
    },
    {
      title: "Indemnification",
      content: [
        "Clients agree to indemnify and hold Abhiraaj harmless from claims arising from their use of our services or violation of these terms.",
        "This includes legal fees and costs incurred in defending against such claims.",
        "Indemnification obligations survive termination of service agreements.",
        "We will provide prompt notice of any claims for which indemnification may be sought.",
        "Clients have the right to participate in the defense of any indemnified claims with counsel of their choice."
      ]
    },
    {
      title: "Termination",
      content: [
        "Either party may terminate service agreements with appropriate notice as specified in individual contracts.",
        "Immediate termination may occur in cases of material breach, non-payment, or violation of these terms.",
        "Upon termination, all outstanding invoices become immediately due and payable.",
        "We will return client property and confidential information upon termination, subject to our retention obligations.",
        "Termination does not relieve parties of obligations that by their nature should survive termination."
      ]
    },
    {
      title: "Dispute Resolution",
      content: [
        "We encourage resolution of disputes through direct negotiation and good faith discussions.",
        "If direct resolution is not possible, disputes will be resolved through binding arbitration in accordance with Indian Arbitration and Conciliation Act.",
        "Arbitration proceedings will be conducted in New Delhi, India, with proceedings in English.",
        "The decision of the arbitrator(s) shall be final and binding on all parties.",
        "Each party bears their own costs unless the arbitrator decides otherwise."
      ]
    },
    {
      title: "Governing Law and Jurisdiction",
      content: [
        "These terms are governed by the laws of India without regard to conflict of law principles.",
        "Any legal proceedings not subject to arbitration shall be conducted in the courts of New Delhi, India.",
        "We comply with all applicable Indian laws and regulations in the conduct of our business.",
        "International clients acknowledge and consent to Indian law governance and jurisdiction.",
        "If any provision of these terms is found unenforceable, the remaining provisions shall remain in full effect."
      ]
    },
    {
      title: "Miscellaneous Provisions",
      content: [
        "These terms, together with specific service agreements, constitute the complete agreement between parties.",
        "No oral modifications are binding; all amendments must be in writing and signed by authorized representatives.",
        "If any provision is deemed invalid or unenforceable, the remainder of the agreement remains in effect.",
        "Our failure to enforce any term does not constitute a waiver of that term or any other term.",
        "These terms are binding upon successors, assigns, and legal representatives of the parties."
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
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              These terms govern your use of Abhiraaj&apos;s professional services and establish our mutual rights and responsibilities.
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Professional Service Agreement</h2>
              <p className="text-gray-600 leading-relaxed">
                Welcome to Abhiraaj&apos;s professional services. These Terms of Service outline the legal framework governing our business relationship and the provision of our comprehensive services including project management consulting, project billing, manpower supply, electromechanical items supply, and property services. By engaging our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
              </p>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 mb-8">
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Important Notice</h3>
              <p className="text-blue-700 text-sm leading-relaxed">
                These terms constitute a legally binding agreement. Please read them carefully before engaging our services. 
                If you have any questions about these terms, please contact us before proceeding with any service engagement.
              </p>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
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

        {/* Agreement Acknowledgment */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 mt-12">
          <div className="text-center">
            <div className="p-4 bg-green-100 rounded-2xl inline-block mb-6">
              <svg className="w-8 h-8 text-green-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-green-800 mb-4">Agreement Acknowledgment</h3>
            <p className="text-green-700 mb-6 max-w-2xl mx-auto leading-relaxed">
              By proceeding to engage our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
            
            <div className="text-sm text-green-600 bg-white/60 rounded-lg p-4 max-w-xl mx-auto">
              <p className="font-medium mb-2">For service inquiries and agreements:</p>
              <div className="space-y-1">
                <p>📧 abhiraaj@live.com</p>
                <p>📞 +91 92057 75477</p>
                <p>📍 Sector-105, Faridabad, Haryana</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl shadow-lg p-8 mt-8">
          <div className="text-center">
            <div className="p-4 bg-white/10 rounded-2xl inline-block mb-6">
              <svg className="w-8 h-8 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Questions About These Terms?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              If you need clarification on any of these terms or wish to discuss specific service requirements, our team is here to help.
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

export default TermsOfService;