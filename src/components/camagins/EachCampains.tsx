import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'

interface Campaign {
  id: string
  name: string
  brand_id: string
  status: string
  budget: number
  daily_budget: number
  platforms: string[]
  created_at: string
}

const EachCampains = () => {
  const { id } = useParams<{ id: string }>()
  const [campaign, setCampaign] = useState<Campaign | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCampaign = async () => {
      if (!id) {
        setError('Campaign ID is required')
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        setError(null)
        
        const response = await fetch(`https://mixo-fe-backend-task.vercel.app/campaigns/${id}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        
        if (!response.ok) {
          // Try to get error message from response body
          let errorMessage = `Failed to fetch campaign (Status: ${response.status})`
          try {
            const errorData = await response.json()
            errorMessage = errorData.message || errorData.error || errorMessage
          } catch {
            // If response is not JSON, use status text or default message
            errorMessage = response.statusText || errorMessage
          }
          throw new Error(errorMessage)
        }
        
        const data = await response.json()
        
        // Debug: Log the response to help troubleshoot
        console.log('Campaign API Response:', data)
        
        // Check if we got valid campaign data
        const campaignData = data.campaign || data
        
        if (!campaignData || !campaignData.id) {
          console.error('Invalid campaign data:', campaignData)
          throw new Error('Invalid campaign data received from server')
        }
        
        // Handle both wrapped and unwrapped responses
        setCampaign(campaignData)
      } catch (err) {
        let errorMessage = 'An error occurred while fetching campaign'
        
        if (err instanceof Error) {
          errorMessage = err.message
        } else if (typeof err === 'string') {
          errorMessage = err
        }
        
        // Handle network errors
        if (err instanceof TypeError && err.message.includes('fetch')) {
          errorMessage = 'Network error: Unable to connect to the server. Please check your internet connection.'
        }
        
        setError(errorMessage)
        console.error('Error fetching campaign:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchCampaign()
  }, [id])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getPlatformIcon = (platform: string) => {
    const platformLower = platform.toLowerCase()
    switch (platformLower) {
      case 'meta':
      case 'facebook':
      case 'instagram':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        )
      case 'google':
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
        )
      case 'linkedin':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        )
      default:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        )
    }
  }

  const getPlatformColor = (platform: string) => {
    const platformLower = platform.toLowerCase()
    switch (platformLower) {
      case 'meta':
      case 'facebook':
      case 'instagram':
        return 'bg-blue-50 text-blue-700 border-blue-200'
      case 'google':
        return 'bg-red-50 text-red-700 border-red-200'
      case 'linkedin':
        return 'bg-blue-100 text-blue-800 border-blue-300'
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const daysRunning = campaign
    ? Math.floor(
        (new Date().getTime() - new Date(campaign.created_at).getTime()) / (1000 * 60 * 60 * 24)
      )
    : 0

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 py-8 md:py-12 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <Link
            to="/campaigns"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors mb-6 font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Campaigns
          </Link>

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center py-20">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-600 font-medium">Loading campaign details...</p>
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
                  <h3 className="text-lg font-semibold text-red-900 mb-1">Error Loading Campaign</h3>
                  <p className="text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}

          {/* Campaign Details */}
          {!loading && !error && campaign && (
            <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
              {/* Header Section */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3">
                      {campaign.name}
                    </h1>
                    <p className="text-purple-100 text-lg font-medium">Campaign ID: {campaign.id}</p>
                  </div>
                  <span className="px-4 py-2 rounded-full text-sm font-bold border-2 border-white/30 capitalize bg-white/20 text-white backdrop-blur-sm">
                    {campaign.status}
                  </span>
                </div>
              </div>

              {/* Main Content */}
              <div className="p-8 md:p-10">
                {/* Platforms Section */}
                {campaign.platforms && campaign.platforms.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Platforms</h2>
                    <div className="flex flex-wrap gap-3">
                      {campaign.platforms.map((platform, idx) => (
                        <div
                          key={idx}
                          className={`inline-flex items-center gap-2 px-4 py-3 rounded-lg border-2 ${getPlatformColor(
                            platform
                          )}`}
                        >
                          {getPlatformIcon(platform)}
                          <span className="font-semibold capitalize">{platform}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Budget Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 font-medium">Total Budget</p>
                        <p className="text-2xl font-bold text-purple-700">
                          {formatCurrency(campaign.budget)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 font-medium">Daily Budget</p>
                        <p className="text-2xl font-bold text-blue-700">
                          {formatCurrency(campaign.daily_budget)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <p className="text-sm text-gray-600 font-medium mb-2">Brand ID</p>
                    <p className="text-lg font-bold text-gray-900">{campaign.brand_id}</p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <p className="text-sm text-gray-600 font-medium mb-2">Days Running</p>
                    <p className="text-lg font-bold text-gray-900">
                      {daysRunning} {daysRunning === 1 ? 'day' : 'days'}
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 md:col-span-2">
                    <p className="text-sm text-gray-600 font-medium mb-2">Created Date</p>
                    <p className="text-lg font-bold text-gray-900">
                      {new Date(campaign.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
                    Edit Campaign
                  </button>
                  <Link
                    to={`/campaigns/${campaign.id}/insights`}
                    className="flex-1 bg-white text-purple-600 border-2 border-purple-600 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 text-center"
                  >
                    View Insights
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default EachCampains

