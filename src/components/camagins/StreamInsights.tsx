import { useState } from 'react'

interface StreamInsightsProps {
  campaignId: string
}

const StreamInsights = ({ campaignId }: StreamInsightsProps) => {
  const [streamData, setStreamData] = useState<any>(null)
  const [streamLoading, setStreamLoading] = useState<boolean>(false)
  const [streamError, setStreamError] = useState<string | null>(null)

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num)
  }

  const fetchStreamData = async () => {
    if (!campaignId) {
      setStreamError('Campaign ID is required')
      return
    }

    try {
      setStreamLoading(true)
      setStreamError(null)
      setStreamData(null)
      
      const response = await fetch(`https://mixo-fe-backend-task.vercel.app/campaigns/${campaignId}/insights/stream`, {
        headers: {
          'Accept': 'text/event-stream',
        },
      })
      
      if (!response.ok) {
        let errorMessage = `Failed to fetch stream data (Status: ${response.status})`
        try {
          const errorText = await response.text()
          // Try to parse as JSON if possible
          try {
            const errorData = JSON.parse(errorText)
            errorMessage = errorData.message || errorData.error || errorMessage
          } catch {
            errorMessage = errorText || response.statusText || errorMessage
          }
        } catch {
          errorMessage = response.statusText || errorMessage
        }
        throw new Error(errorMessage)
      }
      
      // Handle Server-Sent Events (SSE) format
      const reader = response.body?.getReader()
      const decoder = new TextDecoder()
      let buffer = ''
      let streamedData: any[] = []
      
      if (!reader) {
        throw new Error('Stream reader not available')
      }
      
      while (true) {
        const { done, value } = await reader.read()
        
        if (done) break
        
        buffer += decoder.decode(value, { stream: true })
        
        // Process complete lines (SSE format: "data: {...}\n\n")
        const lines = buffer.split('\n')
        buffer = lines.pop() || '' // Keep incomplete line in buffer
        
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const jsonStr = line.slice(6) // Remove "data: " prefix
              if (jsonStr.trim()) {
                const parsed = JSON.parse(jsonStr)
                streamedData.push(parsed)
              }
            } catch (parseErr) {
              console.warn('Failed to parse SSE data line:', line, parseErr)
            }
          }
        }
      }
      
      // Process any remaining data in buffer
      if (buffer.trim()) {
        const lines = buffer.split('\n')
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const jsonStr = line.slice(6)
              if (jsonStr.trim()) {
                const parsed = JSON.parse(jsonStr)
                streamedData.push(parsed)
              }
            } catch (parseErr) {
              console.warn('Failed to parse SSE data line:', line, parseErr)
            }
          }
        }
      }
      
      console.log('Stream API Response:', streamedData)
      
      // Set the streamed data - if single item, use it directly, otherwise use array
      if (streamedData.length === 1) {
        setStreamData(streamedData[0])
      } else if (streamedData.length > 1) {
        setStreamData(streamedData)
      } else {
        // If no SSE data was found, try to handle as regular JSON response
        setStreamError('No data received from stream')
      }
    } catch (err) {
      let errorMessage = 'An error occurred while fetching stream data'
      
      if (err instanceof Error) {
        errorMessage = err.message
      } else if (typeof err === 'string') {
        errorMessage = err
      }
      
      if (err instanceof TypeError && err.message.includes('fetch')) {
        errorMessage = 'Network error: Unable to connect to the server. Please check your internet connection.'
      }
      
      setStreamError(errorMessage)
      console.error('Error fetching stream data:', err)
    } finally {
      setStreamLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      {/* Stream Button */}
      <div className="flex justify-end">
        <button
          onClick={fetchStreamData}
          disabled={streamLoading}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {streamLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Streaming...</span>
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Stream Data</span>
            </>
          )}
        </button>
      </div>

      {/* Stream Error */}
      {streamError && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="text-lg font-semibold text-red-900 mb-1">Stream Error</h3>
              <p className="text-red-700">{streamError}</p>
            </div>
          </div>
        </div>
      )}

      {/* Stream Data Display */}
      {streamData && (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200 shadow-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Stream Data</h2>
          </div>
          
          {typeof streamData === 'object' && streamData !== null ? (
            <div className="space-y-4">
              {Array.isArray(streamData) ? (
                <div className="space-y-3">
                  {streamData.map((item: any, index: number) => (
                    <div key={index} className="bg-white rounded-lg p-4 border border-blue-100">
                      {typeof item === 'object' ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                          {Object.entries(item).map(([key, value]) => (
                            <div key={key}>
                              <p className="text-xs text-gray-500 font-medium mb-1 uppercase tracking-wide">
                                {key.replace(/_/g, ' ')}
                              </p>
                              <p className="text-base font-semibold text-gray-900">
                                {typeof value === 'number'
                                  ? value % 1 === 0
                                    ? formatNumber(value)
                                    : value.toFixed(2)
                                  : String(value)}
                              </p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-base font-semibold text-gray-900">{String(item)}</p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg p-6 border border-blue-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(streamData).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 rounded-lg p-4">
                        <p className="text-xs text-gray-500 font-medium mb-1 uppercase tracking-wide">
                          {key.replace(/_/g, ' ')}
                        </p>
                        <p className="text-lg font-semibold text-gray-900">
                          {typeof value === 'number'
                            ? value % 1 === 0
                              ? formatNumber(value)
                              : value.toFixed(2)
                            : typeof value === 'object' && value !== null
                            ? JSON.stringify(value, null, 2)
                            : String(value)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-lg p-6 border border-blue-100">
              <p className="text-base font-semibold text-gray-900">{String(streamData)}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default StreamInsights

