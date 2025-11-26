import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What data sources can I connect to Porter?",
    answer: "Porter supports connections to over 50+ marketing platforms including Facebook Ads, Google Ads, TikTok, Instagram, Shopify, WooCommerce, Klaviyo, Mailchimp, HubSpot, Google Analytics, and many more. All your marketing data can be unified in one place."
  },
  {
    question: "Do I need a credit card to get started?",
    answer: "No, you don't need a credit card to start using Porter. Our free plan is available forever with no credit card required. You can upgrade to a paid plan anytime when you're ready for more advanced features."
  },
  {
    question: "How long does it take to set up Porter?",
    answer: "Setting up Porter typically takes just a few minutes. Simply connect your marketing platforms, and Porter will automatically sync your data to Google Sheets and Looker Studio. Our team also offers free setup calls to help you get started quickly."
  },
  {
    question: "Can I use Porter with Google Sheets and Looker Studio?",
    answer: "Yes! Porter is designed to work seamlessly with both Google Sheets and Google Looker Studio. Your marketing data is automatically synced and ready to use in your dashboards and reports."
  },
  {
    question: "What's the difference between the free and paid plans?",
    answer: "The free plan includes basic connectors and data syncing. Paid plans offer advanced features like real-time data updates, custom dashboards, priority support, and access to premium connectors. All plans include unlimited data exports to Google Sheets and Looker Studio."
  },
  {
    question: "Is my data secure with Porter?",
    answer: "Absolutely. Porter uses enterprise-grade security with encrypted connections, secure API authentication, and complies with GDPR and SOC 2 standards. Your data is never stored longer than necessary and is only used to sync to your chosen destinations."
  },
  {
    question: "Can I track ROI across multiple marketing channels?",
    answer: "Yes! Porter's cross-channel dashboards allow you to track performance and ROI across all your marketing channels in one unified view. You can see which channels are driving the most revenue and profit."
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, we offer comprehensive customer support including email support, live chat, and free setup calls. Paid plan users also get priority support with faster response times."
  }
]

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full bg-gray-50 py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about Porter and how it can help you track your marketing ROI
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between text-left group"
              >
                <h3 className="text-base md:text-lg font-semibold text-gray-900 pr-8 group-hover:text-purple-600 transition-colors">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 md:w-6 md:h-6 text-gray-500 group-hover:text-purple-600 transition-all duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 md:px-8 pb-5 md:pb-6">
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-gray-600 mb-6 text-base md:text-lg">
            Still have questions? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="text-purple-600 font-semibold hover:text-purple-700 transition-colors text-base md:text-lg"
            >
              Contact Support
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="#"
              className="text-purple-600 font-semibold hover:text-purple-700 transition-colors text-base md:text-lg"
            >
              Book a Free Setup Call
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq

