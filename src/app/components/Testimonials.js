'use client'

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "NextGen&apos;s AI voice assistant revolutionized our customer experience by handling complex queries naturally while maintaining our brand voice.",
      client: "Sarah Johnson",
      role: "CEO",
      company: "TechFlow Solutions",
    },
    {
      id: 2,
      text: "The seamless voice-automation integrations and new website boosted our lead conversions by 35%. The ROI was &ldquo;immediate&rdquo; and impressive.",
      client: "Michael Chen",
      role: "Marketing Director",
      company: "GrowthLab",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">
            Hear from businesses that have transformed their operations with our AI solutions
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-2xl p-8 relative shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6">
                <svg className="w-8 h-8 text-blue-200" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8C7.239 8 5 10.239 5 13s2.239 5 5 5c2.761 0 5-2.239 5-5s-2.239-5-5-5zm0 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zM22 8c-2.761 0-5 2.239-5 5s2.239 5 5 5c2.761 0 5-2.239 5-5s-2.239-5-5-5zm0 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                </svg>
              </div>

              {/* Testimonial Content */}
              <div className="pt-4">
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  &quot;{testimonial.text}&quot;
                </p>


                {/* Client Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4 text-white font-bold text-lg">
                    {testimonial.client.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.client}</div>
                    <div className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-blue-100 mb-6">
              Transform your business communication with custom AI voice solutions tailored to your needs.
            </p>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="cursor-pointer bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
