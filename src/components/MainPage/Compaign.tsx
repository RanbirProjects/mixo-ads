import { Link } from 'react-router-dom'

const Compaign = () => {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Manage Your <span className="text-purple-600">Campaigns</span> with Ease
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Track, analyze, and optimize all your marketing campaigns from one centralized dashboard
          </p>
        </div>

        {/* Campaign Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Feature 1 - Campaign Tracking */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Real-Time Tracking</h3>
            <p className="text-gray-600 leading-relaxed">
              Monitor campaign performance in real-time across all platforms and channels
            </p>
          </div>

          {/* Feature 2 - Multi-Platform */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Platform Support</h3>
            <p className="text-gray-600 leading-relaxed">
              Manage campaigns from Meta, Google, LinkedIn, and more all in one place
            </p>
          </div>

          {/* Feature 3 - Analytics */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Analytics</h3>
            <p className="text-gray-600 leading-relaxed">
              Get detailed insights into ROI, conversions, and campaign effectiveness
            </p>
          </div>

          {/* Feature 4 - Budget Management */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Budget Control</h3>
            <p className="text-gray-600 leading-relaxed">
              Set and monitor budgets across campaigns with daily and total budget limits
            </p>
          </div>

          {/* Feature 5 - Performance Insights */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Performance Insights</h3>
            <p className="text-gray-600 leading-relaxed">
              Understand what's working with comprehensive performance metrics and reports
            </p>
          </div>

          {/* Feature 6 - Stream Data */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Live Data Streaming</h3>
            <p className="text-gray-600 leading-relaxed">
              Access real-time campaign data streams for instant updates and monitoring
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
            Ready to Manage Your Campaigns?
          </h3>
          <p className="text-lg md:text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Start tracking and optimizing your marketing campaigns today. Get insights that drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/campaigns"
              className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              View Campaigns
            </Link>
            <Link
              to="/insights"
              className="inline-flex items-center justify-center gap-2 bg-purple-700/50 text-white border-2 border-white/30 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-700/70 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              View Insights
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Compaign

