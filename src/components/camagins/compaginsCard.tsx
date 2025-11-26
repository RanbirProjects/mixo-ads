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

import { Link } from 'react-router-dom'

interface CampaignCardProps {
  campaign: Campaign
}

const CampaignCard = ({ campaign }: CampaignCardProps) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getStatusColor = (status: string) => {
    const statusLower = status.toLowerCase()
    if (statusLower === 'active' || statusLower === 'running') {
      return 'bg-green-100 text-green-800 border-green-200'
    }
    if (statusLower === 'paused' || statusLower === 'stopped') {
      return 'bg-yellow-100 text-yellow-800 border-yellow-200'
    }
    if (statusLower === 'ended' || statusLower === 'completed') {
      return 'bg-gray-100 text-gray-800 border-gray-200'
    }
    return 'bg-blue-100 text-blue-800 border-blue-200'
  }

  const getPlatformIcon = (platform: string) => {
    const platformLower = platform.toLowerCase()
    switch (platformLower) {
      case 'meta':
      case 'facebook':
      case 'instagram':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        )
      case 'google':
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
        )
      case 'linkedin':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        )
      default:
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

  const daysRunning = Math.floor(
    (new Date().getTime() - new Date(campaign.created_at).getTime()) / (1000 * 60 * 60 * 24)
  )

  return (
    <div className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:border-purple-300">
      {/* Campaign Header with Gradient */}
      <div className="relative p-6 border-b border-gray-100 bg-gradient-to-br from-white to-gray-50">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 pr-3">
            <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors line-clamp-2">
              {campaign.name}
            </h3>
            <p className="text-xs text-gray-500 font-medium">ID: {campaign.id}</p>
          </div>
          <span
            className={`px-3 py-1.5 rounded-full text-xs font-bold border capitalize shrink-0 ${getStatusColor(
              campaign.status
            )}`}
          >
            {campaign.status}
          </span>
        </div>

        {/* Platforms */}
        {campaign.platforms && campaign.platforms.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {campaign.platforms.map((platform, idx) => (
              <span
                key={idx}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border ${getPlatformColor(
                  platform
                )}`}
              >
                {getPlatformIcon(platform)}
                <span className="capitalize">{platform}</span>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Campaign Metrics */}
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Total Budget */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-3 border border-purple-100">
            <p className="text-xs text-gray-600 mb-1 font-medium">Total Budget</p>
            <p className="text-base font-bold text-purple-700">
              {formatCurrency(campaign.budget)}
            </p>
          </div>

          {/* Daily Budget */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-3 border border-blue-100">
            <p className="text-xs text-gray-600 mb-1 font-medium">Daily Budget</p>
            <p className="text-base font-bold text-blue-700">
              {formatCurrency(campaign.daily_budget)}
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="space-y-3 pt-4 border-t border-gray-100">
          {/* Brand ID */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 font-medium">Brand ID</span>
            <span className="text-xs font-semibold text-gray-900 bg-gray-100 px-2 py-1 rounded">
              {campaign.brand_id}
            </span>
          </div>

          {/* Days Running */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 font-medium">Days Running</span>
            <span className="text-xs font-semibold text-gray-900">
              {daysRunning} {daysRunning === 1 ? 'day' : 'days'}
            </span>
          </div>

          {/* Created Date */}
          {campaign.created_at && (
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500 font-medium">Created</span>
              <span className="text-xs font-semibold text-gray-900">
                {new Date(campaign.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Campaign Actions */}
      <div className="px-6 pb-6 pt-2">
        <Link
          to={`/campaigns/${campaign.id}`}
          className="block w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg font-semibold text-sm hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}

export default CampaignCard
export type { Campaign }

