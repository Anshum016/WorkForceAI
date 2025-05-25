import React from 'react';

const Solutions = () => {
  const solutions = [
    {
      title: "AI-Powered Chatbots",
      description: "Transform your customer service with intelligent chatbots that understand context, handle multiple languages, and provide 24/7 support.",
      features: [
        "Natural Language Understanding",
        "Multi-language Support",
        "Contextual Conversations",
        "Seamless Integration"
      ]
    },
    {
      title: "Document Processing",
      description: "Automate document handling with AI that extracts, processes, and analyzes information from various document formats.",
      features: [
        "OCR Technology",
        "Data Extraction",
        "Form Processing",
        "Document Classification"
      ]
    },
    {
      title: "Data Analytics",
      description: "Unlock insights from your data with advanced AI analytics that identify patterns and predict trends.",
      features: [
        "Predictive Analytics",
        "Real-time Insights",
        "Custom Dashboards",
        "Automated Reporting"
      ]
    },
    {
      title: "Process Automation",
      description: "Streamline your business operations with AI-driven automation that learns and adapts to your workflows.",
      features: [
        "Workflow Automation",
        "Task Scheduling",
        "Process Optimization",
        "Integration Capabilities"
      ]
    }
  ];

  return (
    <div className="min-h-screen text-amber-50 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12">Our AI Solutions</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-red-600 mb-3 sm:mb-4">{solution.title}</h2>
              <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">{solution.description}</p>
              <div className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm sm:text-base">
                    <span className="text-red-600 mr-2">•</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Our team of AI experts is ready to help you implement these solutions and customize them to your specific business needs.
          </p>
          <a
            href="/Contact"
            className="inline-block bg-red-600 hover:bg-red-800 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg shadow-md transition-all duration-300 hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Solutions; 