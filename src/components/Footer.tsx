const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-12 lg:mb-16">
          {/* Left Section - Logo */}
          <div className="shrink-0">
            <div className="flex items-center gap-2.5 mb-8 md:mb-10">
            
              <span className="text-purple-600 text-2xl md:text-3xl font-bold lowercase tracking-tight">MixoVanguard</span>
            </div>
          </div>

          {/* Middle Section - Navigation Links (Three Columns) */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {/* Column 1 */}
            <div>
              <h3 className="text-purple-600 font-semibold text-sm md:text-base mb-4 md:mb-5 tracking-wide uppercase">Connectors</h3>
              <ul className="space-y-2.5 md:space-y-3 mb-6 md:mb-8">
                <li>
                  <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors text-sm md:text-base leading-relaxed font-medium">
                    Google Looker Studio
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors text-sm md:text-base leading-relaxed font-medium">
                    Google Sheets
                  </a>
                </li>
              </ul>
              <h3 className="text-purple-600 font-semibold text-sm md:text-base mb-4 md:mb-5 tracking-wide uppercase">Tutorials</h3>
              <ul className="space-y-2.5 md:space-y-3">
                <li>
                  <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors text-sm md:text-base leading-relaxed font-medium">
                    Looker Studio tutorial
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors text-sm md:text-base leading-relaxed font-medium">
                    Facebook Ads to Looker Studio
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors text-sm md:text-base leading-relaxed font-medium">
                    Shopify to Looker Studio
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors text-sm md:text-base leading-relaxed font-medium">
                    Supermetrics alternatives
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors text-sm md:text-base leading-relaxed font-medium">
                    Marketing calculators
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-purple-600 font-semibold text-sm md:text-base mb-4 md:mb-5 tracking-wide uppercase">Looker Studio templates</h3>
              <ul className="space-y-2.5 md:space-y-3">
                <li>
                  <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors text-sm md:text-base leading-relaxed font-medium">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors text-sm md:text-base leading-relaxed font-medium">
                    E-commerce
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors text-sm md:text-base leading-relaxed font-medium">
                    PPC
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors text-sm md:text-base leading-relaxed font-medium">
                    Social Media
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors text-sm md:text-base leading-relaxed font-medium">
                    SEO
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors text-sm md:text-base leading-relaxed font-medium">
                    Lead generation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors text-sm md:text-base leading-relaxed font-medium">
                    Facebook Ads
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-purple-600 font-semibold text-sm md:text-base mb-4 md:mb-5 tracking-wide uppercase">Google Sheets templates</h3>
              <ul className="space-y-2.5 md:space-y-3 mb-6 md:mb-8">
                <li>
                  <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors text-sm md:text-base leading-relaxed font-medium">
                    Facebook Ads
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors text-sm md:text-base leading-relaxed font-medium">
                    PPC
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors text-sm md:text-base leading-relaxed font-medium">
                    Social Media
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors text-sm md:text-base leading-relaxed font-medium">
                    E-commerce
                  </a>
                </li>
              </ul>
              <h3 className="text-purple-600 font-semibold text-sm md:text-base mb-4 md:mb-5 tracking-wide uppercase">Report templates</h3>
              <ul className="space-y-2.5 md:space-y-3">
                <li>
                  <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors text-sm md:text-base leading-relaxed font-medium">
                    Report templates
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors text-sm md:text-base leading-relaxed font-medium">
                    Dashboard templates
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors text-sm md:text-base leading-relaxed font-medium">
                    Dashboard examples
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section - G2 Badges */}
          <div className="shrink-0 flex flex-col gap-4 lg:min-w-[200px]">
            {/* Momentum Leader Badge */}
            <div className="bg-white rounded-lg border border-gray-200 p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden min-w-[180px]">
              <div className="absolute top-3 right-3">
                <div className="bg-red-600 text-white text-[10px] md:text-xs font-bold px-2 py-0.5 rounded">G2</div>
              </div>
              <div className="text-[10px] md:text-xs text-gray-500 mb-2.5 font-medium tracking-wide uppercase">SPRING 2025</div>
              <div className="text-sm md:text-base font-semibold text-gray-900 pr-8">Momentum Leader</div>
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"></div>
            </div>

            {/* Best Relationship Badge */}
            <div className="bg-white rounded-lg border border-gray-200 p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden min-w-[180px]">
              <div className="absolute top-3 right-3">
                <div className="bg-red-600 text-white text-[10px] md:text-xs font-bold px-2 py-0.5 rounded">G2</div>
              </div>
              <div className="text-[10px] md:text-xs text-gray-500 mb-2.5 font-medium tracking-wide uppercase">SPRING 2025</div>
              <div className="text-sm md:text-base font-semibold text-gray-900 pr-8">Best Relationship</div>
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-400 to-green-400"></div>
            </div>

            {/* Best Est. ROI Badge */}
            <div className="bg-white rounded-lg border border-gray-200 p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden min-w-[180px]">
              <div className="absolute top-3 right-3">
                <div className="bg-red-600 text-white text-[10px] md:text-xs font-bold px-2 py-0.5 rounded">G2</div>
              </div>
              <div className="text-[10px] md:text-xs text-gray-500 mb-2.5 font-medium tracking-wide uppercase">SPRING 2025</div>
              <div className="text-sm md:text-base font-semibold text-gray-900 pr-8">Best Est. ROI</div>
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500"></div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright, Legal, and Social Media */}
        <div className="border-t border-gray-200 pt-6 md:pt-8 pb-4 md:pb-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          {/* Left - Copyright */}
          <div className="text-gray-600 text-sm md:text-base font-medium">
            © 2024 MixoVanguard - All rights reserved.
          </div>

          {/* Middle - Legal Links */}
          <div className="flex items-center gap-4 md:gap-6 text-gray-600 text-sm md:text-base">
            <a href="#" className="hover:text-purple-600 transition-colors font-medium">
              Terms of Service
            </a>
            <a href="#" className="hover:text-purple-600 transition-colors font-medium">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-purple-600 transition-colors font-medium">
              Content policy
            </a>
          </div>

          {/* Right - Social Media Icons */}
          <div className="flex items-center gap-4 md:gap-5">
            {/* LinkedIn */}
            <a href="#" className="text-purple-600 hover:text-purple-700 transition-colors hover:scale-110 transform duration-200" aria-label="LinkedIn">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className="text-purple-600 hover:text-purple-700 transition-colors hover:scale-110 transform duration-200" aria-label="Facebook">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="text-purple-600 hover:text-purple-700 transition-colors hover:scale-110 transform duration-200" aria-label="Instagram">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            {/* TikTok */}
            <a href="#" className="text-purple-600 hover:text-purple-700 transition-colors hover:scale-110 transform duration-200" aria-label="TikTok">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            {/* Chat bubble */}
            <a href="#" className="text-purple-600 hover:text-purple-700 transition-colors hover:scale-110 transform duration-200" aria-label="Chat">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

