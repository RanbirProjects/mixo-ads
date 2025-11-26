import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import MainPage from './Pages/MainPage'
import CampaignsPage from './Pages/CampaignsPage'
import InsightsPage from './Pages/InsightsPage'
import EachCampains from './components/camagins/EachCampains'
import CampaignInsights from './components/camagins/CampaignInsights'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/campaigns" element={<CampaignsPage />} />
        <Route path="/campaigns/:id" element={<EachCampains />} />
        <Route path="/campaigns/:id/insights" element={<CampaignInsights />} />
        <Route path="/insights" element={<InsightsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
