'use client'

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Business Communication with{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Custom AI Voice Agents
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Custom AI voice agents designed to transform how your business communicates—with seamless automation and stunning websites to match.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToContact}
              className="cursor-pointer bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Discuss Your Project
            </button>
            <button
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
              className="cursor-pointer border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors duration-200"
            >
              View Services
            </button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
            <FeatureCard
              icon={
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              }
              title="AI Voice Agents"
              description="Custom voice agents for sales, support, and lead qualification"
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="Smart Automation"
              description="Workflow integration with automation tools"
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              }
              title="Modern Websites"
              description="AI-powered websites with seamless voice integration"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200">
      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-blue-100">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  )
}
