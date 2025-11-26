import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <header className="w-full bg-white border-b border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-4 md:py-5 flex items-center justify-between">
        {/* Left Section - Logo and Language Selector */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            {/* Cat with unicorn horn and sunglasses */}
            <span className="text-purple-600 text-2xl md:text-3xl font-bold tracking-tight">MixoVanguard</span>
          </Link>
         
        </div>

        {/* Center Section - Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          <Link 
            to="/campaigns" 
            className={`text-base lg:text-lg font-medium transition-colors ${
              isActive('/campaigns') 
                ? 'text-purple-600 font-semibold' 
                : 'text-gray-700 hover:text-purple-600'
            }`}
          >
            Campaigns
          </Link>
          <Link 
            to="/insights" 
            className={`text-base lg:text-lg font-medium transition-colors ${
              isActive('/insights') 
                ? 'text-purple-600 font-semibold' 
                : 'text-gray-700 hover:text-purple-600'
            }`}
          >
            Insights
          </Link>
         
          <div className="flex items-center gap-1 cursor-pointer group">
            <a href="#" className="text-base lg:text-lg font-medium text-gray-700 group-hover:text-purple-600 transition-colors">Learn</a>
            <svg className="w-4 h-4 text-gray-700 group-hover:text-purple-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </nav>

        {/* Right Section - Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Book a free setup button */}
          <button className="flex items-center gap-2 bg-purple-600 text-white px-5 py-2.5 md:px-6 md:py-3 rounded-lg hover:bg-purple-700 transition-colors text-sm md:text-base font-semibold" >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href="#contact" className="whitespace-nowrap">Book a free setup</a>
          </button>

          
        </div>
      </div>
    </header>
  )
}

export default Header
