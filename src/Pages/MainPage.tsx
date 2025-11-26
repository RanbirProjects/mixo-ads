import Header from "../components/Header"
import Footer from "../components/Footer"
import Main from "../components/MainPage/Main"
import Compaign from "../components/MainPage/Compaign"
import Faq from "../components/MainPage/Faq"
import Contact from "../components/MainPage/Contact"

const MainPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-purple-50/30 to-white">
      <Header />
      <Main />

      {/* Campaign Section */}
      <Compaign />

      {/* Connectors Section */}
      <section className="w-full bg-white py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Section - Text Content */}
            <div className="text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                <span className="text-gray-900">Marketing data connectors</span>{' '}
                <span className="text-purple-600">for reporting and analysis</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8 font-medium">
                Connect your marketing data to Google Sheets and Google Looker Studio.
              </p>
              <div className="flex flex-col gap-4">
                <button className="bg-gray-500 text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-[1.02] duration-200 w-full sm:w-auto">
                  Start for free
                </button>
                <a href="#contact" className="text-purple-600 font-semibold text-base hover:text-purple-700 transition-colors text-center sm:text-left">
                  Or book a free setup call
                </a>
              </div>
            </div>

            {/* Right Section - Connectors Diagram */}
            <div className="w-full h-auto flex items-center justify-center">
              <div className="w-full max-w-2xl">
                <img 
                  src="https://portermetrics.com/wp-content/uploads/2023/06/Connectors-porter.svg" 
                  alt="Marketing data connectors diagram showing various platforms connected to Porter, which outputs to Google Looker Studio and Google Sheets"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section - Company Logos */}
      <section className="w-full bg-white py-12 md:py-16 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
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
      </section>

      {/* FAQ Section */}
      <Faq />

      {/* Contact Section */}
      <Contact />

      <Footer />
    </div>
  )
}

export default MainPage
