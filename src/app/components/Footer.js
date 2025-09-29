'use client'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">NextGen Voice & Web Solutions</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Custom AI voice agents and automation solutions designed to transform how your business communicates.
            </p>
            <div className="text-sm text-gray-400">
              <p>✉️ lemarcanete4@gmail.com</p>
              <p>📞 09762694038</p>
            </div>
          </div>

          {/* Services List */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Custom AI Voice Agent Development</li>
              <li>Voice Cloning & Branding</li>
              <li>Smart Automation Workflows</li>
              <li>Website Creation with AI Features</li>
              <li>Ongoing Support & Optimization</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2025 NextGen Voice & Web Solutions. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Services</button>
            <button onClick={() => document.getElementById('case-studies').scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Case Studies</button>
            <button onClick={() => document.getElementById(' cursor-pointer').scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Contact</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
