import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CampaignCard, { type Campaign } from '../components/camagins/compaginsCard'

const CampaignsPage = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const response = await fetch('https://mixo-fe-backend-task.vercel.app/campaigns', {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        
        if (!response.ok) {
          throw new Error(`Failed to fetch campaigns: ${response.statusText}`)
        }
        
        const data = await response.json()
        // API returns { campaigns: [...], total: 14 }
        setCampaigns(Array.isArray(data.campaigns) ? data.campaigns : [])
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An error occurred while fetching campaigns'
        setError(errorMessage)
        console.error('Error fetching campaigns:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchCampaigns()
  }, [])


  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 py-8 md:py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">
                  Campaigns
                </h1>
                <p className="text-lg md:text-xl text-gray-600">
                  Manage and monitor all your marketing campaigns in one place
                </p>
              </div>
              
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center py-20">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-600 font-medium">Loading campaigns...</p>
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
                  <h3 className="text-lg font-semibold text-red-900 mb-1">Error Loading Campaigns</h3>
                  <p className="text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}

          {/* Campaigns Grid */}
          {!loading && !error && (
            <>
              {campaigns.length === 0 ? (
                <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No campaigns found</h3>
                  <p className="text-gray-600 mb-6">Get started by creating your first campaign.</p>
                  <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                    Create Campaign
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {campaigns.map((campaign) => (
                    <CampaignCard key={campaign.id} campaign={campaign} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default CampaignsPage

