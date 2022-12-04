import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import CataloguePage from './pages/CataloguePage/CataloguePage'
import VerticalPage from './pages/VerticalPage/VerticalPage'
import RetroreflectorsPage from './pages/RetroreflectorsPage/RetroreflectorsPage'
import UnevennessPage from './pages/UnevennessPage/UnevennessPage'
import SvetDorZnakiPage from './pages/SvetDorZnakiPage/SvetDorZnakiPage'
import SvetodiodPage from './pages/SvetodiodPage/SvetodiodPage'
import TrafficLightsPage from './pages/TrafficLightsPage/TrafficLightsPage'
import MirrorsPage from './pages/MirrorsPage/MirrorsPage'

import './App.scss'

function App() {
  return (
    <Routes>
      <Route index path="/" element={<MainPage />} />
      <Route path="/catalogue" element={<CataloguePage />} />
      <Route path="/retroreflectors" element={<RetroreflectorsPage />} />
      <Route path="/vertical" element={<VerticalPage />} />
      <Route path="/unevenness" element={<UnevennessPage />} />
      <Route path="/zagrad" element={<SvetDorZnakiPage />} />
      <Route path="/svetodiod" element={<SvetodiodPage />} />
      <Route path="/trafficLight" element={<TrafficLightsPage />} />
      <Route path="/mirrors" element={<MirrorsPage />} />
    </Routes>
  )
}

export default App
