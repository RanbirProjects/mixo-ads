import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

interface Insights {
  total_spend?: number
  total_revenue?: number
  total_impressions?: number
  total_clicks?: number
  total_conversions?: number
  average_cpc?: number
  average_cpm?: number
  ctr?: number
  conversion_rate?: number
  roi?: number
  [key: string]: any
}

const InsightsPage = () => {
  const [insights, setInsights] = useState<Insights | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const response = await fetch('https://mixo-fe-backend-task.vercel.app/campaigns/insights', {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        
        if (!response.ok) {
          let errorMessage = `Failed to fetch insights (Status: ${response.status})`
          try {
            const errorData = await response.json()
            errorMessage = errorData.message || errorData.error || errorMessage
          } catch {
            errorMessage = response.statusText || errorMessage
          }
          throw new Error(errorMessage)
        }
        
        const data = await response.json()
        console.log('Insights API Response:', data)
        
        // Handle both wrapped and unwrapped responses
        setInsights(data.insights || data)
      } catch (err) {
        let errorMessage = 'An error occurred while fetching insights'
        
        if (err instanceof Error) {
          errorMessage = err.message
        } else if (typeof err === 'string') {
          errorMessage = err
        }
        
        if (err instanceof TypeError && err.message.includes('fetch')) {
          errorMessage = 'Network error: Unable to connect to the server. Please check your internet connection.'
        }
        
        setError(errorMessage)
        console.error('Error fetching insights:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchInsights()
  }, [])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num)
  }

  const formatPercentage = (num: number) => {
    return `${num.toFixed(2)}%`
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 py-8 md:py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Insights
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Analyze your marketing performance and ROI across all channels
            </p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center py-20">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-600 font-medium">Loading insights...</p>
              </div>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-red-900 mb-1">Error Loading Insights</h3>
                  <p className="text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}

          {/* Insights Dashboard */}
          {!loading && !error && insights && (
            <div className="space-y-6">
              {/* Key Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Total Spend */}
                {insights.total_spend !== undefined && (
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-100 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 font-medium mb-1">Total Spend</p>
                    <p className="text-2xl font-bold text-purple-900">
                      {formatCurrency(insights.total_spend)}
                    </p>
                  </div>
                )}

                {/* Total Revenue */}
                {insights.total_revenue !== undefined && (
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-100 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 font-medium mb-1">Total Revenue</p>
                    <p className="text-2xl font-bold text-green-900">
                      {formatCurrency(insights.total_revenue)}
                    </p>
                  </div>
                )}

                {/* ROI */}
                {insights.roi !== undefined && (
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-100 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 font-medium mb-1">ROI</p>
                    <p className="text-2xl font-bold text-blue-900">
                      {formatPercentage(insights.roi)}
                    </p>
                  </div>
                )}

                {/* Total Conversions */}
                {insights.total_conversions !== undefined && (
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-2 border-orange-100 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 font-medium mb-1">Total Conversions</p>
                    <p className="text-2xl font-bold text-orange-900">
                      {formatNumber(insights.total_conversions)}
                    </p>
                  </div>
                )}
              </div>

              {/* Secondary Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Total Impressions */}
                {insights.total_impressions !== undefined && (
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <p className="text-sm text-gray-600 font-medium mb-2">Total Impressions</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {formatNumber(insights.total_impressions)}
                    </p>
                  </div>
                )}

                {/* Total Clicks */}
                {insights.total_clicks !== undefined && (
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <p className="text-sm text-gray-600 font-medium mb-2">Total Clicks</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {formatNumber(insights.total_clicks)}
                    </p>
                  </div>
                )}

                {/* CTR */}
                {insights.ctr !== undefined && (
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <p className="text-sm text-gray-600 font-medium mb-2">CTR (Click-Through Rate)</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {formatPercentage(insights.ctr)}
                    </p>
                  </div>
                )}

                {/* Conversion Rate */}
                {insights.conversion_rate !== undefined && (
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <p className="text-sm text-gray-600 font-medium mb-2">Conversion Rate</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {formatPercentage(insights.conversion_rate)}
                    </p>
                  </div>
                )}
              </div>

              {/* Cost Metrics */}
              {(insights.average_cpc !== undefined || insights.average_cpm !== undefined) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Average CPC */}
                  {insights.average_cpc !== undefined && (
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                      <p className="text-sm text-gray-600 font-medium mb-2">Average CPC</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {formatCurrency(insights.average_cpc)}
                      </p>
                    </div>
                  )}

                  {/* Average CPM */}
                  {insights.average_cpm !== undefined && (
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                      <p className="text-sm text-gray-600 font-medium mb-2">Average CPM</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {formatCurrency(insights.average_cpm)}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Additional Data Display */}
              {Object.keys(insights).length > 0 && (
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">All Insights Data</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(insights).map(([key, value]) => {
                      // Skip already displayed metrics
                      const displayedKeys = [
                        'total_spend', 'total_revenue', 'roi', 'total_conversions',
                        'total_impressions', 'total_clicks', 'ctr', 'conversion_rate',
                        'average_cpc', 'average_cpm'
                      ]
                      if (displayedKeys.includes(key)) return null

                      return (
                        <div key={key} className="bg-gray-50 rounded-lg p-4">
                          <p className="text-xs text-gray-500 font-medium mb-1 uppercase tracking-wide">
                            {key.replace(/_/g, ' ')}
                          </p>
                          <p className="text-lg font-semibold text-gray-900">
                            {typeof value === 'number'
                              ? value % 1 === 0
                                ? formatNumber(value)
                                : value.toFixed(2)
                              : String(value)}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && !insights && (
            <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Insights Available</h3>
              <p className="text-gray-600">No insights data found. Please check back later.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default InsightsPage

