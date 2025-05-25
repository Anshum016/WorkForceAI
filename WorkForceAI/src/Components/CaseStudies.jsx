import React from 'react';

const CaseStudies = () => {
  const caseStudies = [
    {
      company: "Global E-commerce Platform",
      challenge: "Struggling with high customer service volume and response times",
      solution: "Implemented AI-powered chatbot system with natural language processing",
      results: [
        "60% reduction in response time",
        "85% customer satisfaction rate",
        "40% cost reduction in customer service operations",
        "24/7 automated support coverage"
      ]
    },
    {
      company: "Financial Services Provider",
      challenge: "Manual data processing causing delays in decision-making",
      solution: "Deployed AI-driven data analysis and automation system",
      results: [
        "75% faster data processing",
        "90% accuracy in risk assessment",
        "50% reduction in operational costs",
        "Real-time analytics dashboard"
      ]
    },
    {
      company: "Healthcare Organization",
      challenge: "Inefficient patient data management and appointment scheduling",
      solution: "Integrated AI-powered workflow automation system",
      results: [
        "70% reduction in administrative workload",
        "95% appointment scheduling accuracy",
        "45% improvement in patient satisfaction",
        "Automated patient follow-ups"
      ]
    }
  ];

  return (
    <div className="min-h-screen text-amber-50 py-20 sm:py-24 md:py-28 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12">Success Stories</h1>
        
        <div className="space-y-6 sm:space-y-8 md:space-y-12">
          {caseStudies.map((study, index) => (
            <div 
              key={index} 
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-red-600 mb-3 sm:mb-4">{study.company}</h2>
              
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Challenge</h3>
                <p className="text-gray-300 text-sm sm:text-base">{study.challenge}</p>
              </div>

              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Solution</h3>
                <p className="text-gray-300 text-sm sm:text-base">{study.solution}</p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Results</h3>
                <ul className="space-y-2">
                  {study.results.map((result, idx) => (
                    <li key={idx} className="flex items-center text-sm sm:text-base">
                      <span className="text-red-600 mr-2">✓</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Join the growing list of companies that have transformed their operations with our AI solutions.
          </p>
          <a
            href="/Contact"
            className="inline-block bg-red-600 hover:bg-red-800 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg shadow-md transition-all duration-300 hover:scale-105"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies; 