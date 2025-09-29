'use client'

export function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "AI Voice Receptionist for Retail Chain",
      result: "70%",
      metric: "Reduced call wait time",
      description: "Implemented intelligent call routing and customer query handling with 24/7 availability.",
      industry: "Retail",
      demoUrl: "https://your-ai-voice-receptionist-demo.com",
      demoType: "iframe",
    },
    {
      id: 2,
      title: "Custom Voice Lead Qualifier for Software Startup",
      result: "40%",
      metric: "Increased qualified leads",
      description: "Automated lead scoring and follow-up processes with personalized voice interactions.",
      industry: "Software",
      demoUrl: "https://your-voice-lead-qualifier-audio.com/sample.mp3",
      demoType: "audio",
    },
    {
      id: 3,
      title: "Combined AI Voice & Website Launch for Health Coach",
      result: "30%",
      metric: "Boosted online bookings",
      description: "Integrated voice scheduling with modern website design for seamless customer experience.",
      industry: "Healthcare",
      demoUrl: "https://your-case-study-video.com/demo.mp4",
      demoType: "video",
    },
  ]

  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Case Studies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from businesses that transformed their operations with our AI voice solutions
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Industry Tag */}
              <div className="px-6 pt-6">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                  {study.industry}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">{study.title}</h3>

                {/* Metric Highlight */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                      {study.result}
                    </div>
                    <div className="text-sm text-gray-600 font-semibold">{study.metric}</div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-4">{study.description}</p>

                {/* Demo Embeds */}
                {study.demoType === 'iframe' && (
                  <iframe
                    src={study.demoUrl}
                    className="w-full h-64 rounded-md border border-gray-300"
                    title={`${study.title} Demo`}
                  ></iframe>
                )}
                {study.demoType === 'audio' && (
                  <audio controls className="w-full rounded-md mt-4">
                    <source src={study.demoUrl} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                )}
                {study.demoType === 'video' && (
                  <video controls className="w-full rounded-md mt-4">
                    <source src={study.demoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                {study.demoType === 'link' && (
                  <a
                    href={study.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-4 text-blue-600 hover:underline"
                  >
                    View Demo
                  </a>
                )}
              </div>

              {/* Bottom gradient border */}
              <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to See Similar Results?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl">
              Join the growing number of businesses transforming their customer experience with AI voice solutions.
            </p>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
            >
              Start Your Success Story
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
