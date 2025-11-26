const Main = () => {
  return (
    <>
      {/* Main Content Section */}
      <main className="flex-1 flex items-center justify-center py-16 md:py-24 lg:py-32 px-6 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-100/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-gray-900 mb-8 md:mb-10 leading-[1.1] tracking-tight">
            <span className="block mb-2">Cross-channel</span>
            <span className="block mb-2">dashboards that show</span>
            <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 bg-clip-text text-transparent px-4 py-2 md:px-5 md:py-2.5 font-extrabold">
                marketing ROI
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400/40 via-pink-400/40 to-purple-400/40 blur-xl rounded-lg z-0"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-200/30 via-pink-200/30 to-purple-200/30 blur-2xl rounded-lg z-10"></span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-12 md:mb-16 leading-relaxed max-w-4xl mx-auto font-normal">
            Porter{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-teal-100 px-3 py-1.5 md:px-4 md:py-2 rounded-md font-semibold text-teal-900 shadow-sm">
                blends marketing and sales data
              </span>
            </span>
            {' '}across channels to track performance down to actual ROI and profit on{' '}
            <span className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1.5 md:px-4 md:py-2 rounded-md font-semibold text-gray-800 shadow-sm hover:shadow-md transition-shadow duration-200">
              <svg className="w-5 h-5 md:w-6 md:h-6 shrink-0" viewBox="0 0 24 24" fill="none">
                {/* Looker Studio infinity symbol */}
                <path d="M18 6c-1.1 0-2 .9-2 2 0 .74.4 1.38 1 1.72v4.56c-.6.34-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V9.72c.6-.34 1-.98 1-1.72 0-1.1-.9-2-2-2zm-12 0c-1.1 0-2 .9-2 2 0 .74.4 1.38 1 1.72v4.56c-.6.34-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V9.72c.6-.34 1-.98 1-1.72 0-1.1-.9-2-2-2z" fill="#4285F4"/>
              </svg>
              <span>Looker Studio</span>
            </span>
            {' '}&{' '}
            <span className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1.5 md:px-4 md:py-2 rounded-md font-semibold text-gray-800 shadow-sm hover:shadow-md transition-shadow duration-200">
              <svg className="w-5 h-5 md:w-6 md:h-6 shrink-0" viewBox="0 0 24 24" fill="none">
                {/* Google Sheets icon */}
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" fill="#34A853"/>
              </svg>
              <span>Sheets</span>
            </span>
            .
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
            {/* Start for free button */}
            <div className="flex flex-col items-center group">
              <button className="relative bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white px-10 py-4 md:px-12 md:py-5 rounded-xl font-bold text-base md:text-lg shadow-2xl hover:shadow-purple-500/50 transform hover:scale-[1.02] transition-all duration-300 ease-out hover:from-purple-700 hover:via-purple-600 hover:to-pink-600 overflow-hidden">
                <span className="relative z-10">Start for free</span>
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              </button>
              <p className="text-xs md:text-sm text-gray-500 mt-3 font-medium tracking-wide">Free forever. No credit card.</p>
            </div>

            {/* Book a free report setup button */}
            <button className="group flex items-center gap-3 bg-white text-purple-600 border-2 border-purple-600 px-10 py-4 md:px-12 md:py-5 rounded-xl font-bold text-base md:text-lg hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] hover:border-purple-700">
              <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Book a free report setup</span>
            </button>
          </div>

          {/* Trust Signals Section - G2 Badges and Ratings */}
          <section className="w-full bg-white py-16 md:py-20 px-6 mt-16 md:mt-20">
            <div className="max-w-7xl mx-auto">
              {/* G2 Badges Row */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12 md:mb-16">
                {/* Momentum Leader Badge */}
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden min-w-[180px] group">
                  <div className="absolute top-3 right-3 z-10">
                    <div className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">G2</div>
                  </div>
                  <div className="text-[10px] text-gray-500 mb-2.5 font-semibold tracking-wide uppercase">SPRING 2025</div>
                  <div className="text-sm font-bold text-gray-900 pr-8">Momentum Leader</div>
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"></div>
                </div>

                {/* Best Est. ROI Badge */}
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden min-w-[180px] group">
                  <div className="absolute top-3 right-3 z-10">
                    <div className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">G2</div>
                  </div>
                  <div className="text-[10px] text-gray-500 mb-2.5 font-semibold tracking-wide uppercase">SPRING 2025</div>
                  <div className="text-sm font-bold text-gray-900 pr-8">Best Est. ROI</div>
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                </div>

                {/* Best Relationship Badge */}
                <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden min-w-[180px] group">
                  <div className="absolute top-3 right-3 z-10">
                    <div className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">G2</div>
                  </div>
                  <div className="text-[10px] text-gray-500 mb-2.5 font-semibold tracking-wide uppercase">SPRING 2025</div>
                  <div className="text-sm font-bold text-gray-900 pr-8">Best Relationship</div>
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-400 to-green-400"></div>
                </div>
              </div>

              {/* Trust Rating Section */}
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8">
                  {/* Profile Pictures */}
                  <div className="flex items-center -space-x-2 md:-space-x-3">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face&auto=format" 
                      alt="Team member" 
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full border-[3px] border-white object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face&auto=format" 
                      alt="Team member" 
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full border-[3px] border-white object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face&auto=format" 
                      alt="Team member" 
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full border-[3px] border-white object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face&auto=format" 
                      alt="Team member" 
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full border-[3px] border-white object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=face&auto=format" 
                      alt="Team member" 
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full border-[3px] border-white object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
                    />
                  </div>

                  {/* Star Rating */}
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Trust Text */}
                  <p className="text-base md:text-lg text-gray-800 font-semibold text-center sm:text-left">
                    Trusted by +1,500 marketing teams and agencies
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Company Logos Scrolling Section */}
          <div className="max-w-7xl mx-auto mt-16 md:mt-20">
            <div className="relative overflow-hidden">
              <div className="flex items-center gap-8 md:gap-12 lg:gap-16 animate-scroll">
                {/* First set of logos */}
                <div className="flex items-center gap-8 md:gap-12 lg:gap-16 shrink-0">
                  <div className="text-purple-400 font-bold text-xl md:text-2xl hover:text-purple-500 transition-colors whitespace-nowrap">madgicx</div>
                  <div className="text-purple-400 font-bold text-xl md:text-2xl hover:text-purple-500 transition-colors whitespace-nowrap">LOOP</div>
                  <div className="text-purple-400 font-bold text-xl md:text-2xl hover:text-purple-500 transition-colors whitespace-nowrap">Dapper</div>
                  <div className="text-purple-400 font-bold text-xl md:text-2xl hover:text-purple-500 transition-colors whitespace-nowrap">McCANN</div>
                  <div className="text-purple-400 font-bold text-xl md:text-2xl hover:text-purple-500 transition-colors whitespace-nowrap">rue.</div>
                  <div className="text-purple-400 font-bold text-xl md:text-2xl hover:text-purple-500 transition-colors whitespace-nowrap">Vaulted</div>
                  <div className="text-purple-400 font-bold text-xl md:text-2xl hover:text-purple-500 transition-colors whitespace-nowrap">Ogilvy</div>
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex items-center gap-8 md:gap-12 lg:gap-16 shrink-0">
                  <div className="text-purple-400 font-bold text-xl md:text-2xl hover:text-purple-500 transition-colors whitespace-nowrap">madgicx</div>
                  <div className="text-purple-400 font-bold text-xl md:text-2xl hover:text-purple-500 transition-colors whitespace-nowrap">LOOP</div>
                  <div className="text-purple-400 font-bold text-xl md:text-2xl hover:text-purple-500 transition-colors whitespace-nowrap">Dapper</div>
                  <div className="text-purple-400 font-bold text-xl md:text-2xl hover:text-purple-500 transition-colors whitespace-nowrap">McCANN</div>
                  <div className="text-purple-400 font-bold text-xl md:text-2xl hover:text-purple-500 transition-colors whitespace-nowrap">rue.</div>
                  <div className="text-purple-400 font-bold text-xl md:text-2xl hover:text-purple-500 transition-colors whitespace-nowrap">Vaulted</div>
                  <div className="text-purple-400 font-bold text-xl md:text-2xl hover:text-purple-500 transition-colors whitespace-nowrap">Ogilvy</div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust indicators or additional info */}
          <div className="mt-16 md:mt-20 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">Free forever</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">Setup in minutes</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Main

