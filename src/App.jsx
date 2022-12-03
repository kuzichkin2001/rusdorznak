import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import CataloguePage from './pages/CataloguePage/CataloguePage'
import VerticalPage from './pages/VerticalPage/VerticalPage'
import RetroreflectorsPage from './pages/RetroreflectorsPage/RetroreflectorsPage'
import UnevennessPage from './pages/UnevennessPage/UnevennessPage'

import './App.scss'

function App() {
  return (
    <Routes>
      <Route index path="/" element={<MainPage />} />
      <Route path="/catalogue" element={<CataloguePage />} />
      <Route path="/retroreflectors" element={<RetroreflectorsPage />} />
      <Route path="/vertical" element={<VerticalPage />} />
      <Route path="/unevenness" element={<UnevennessPage />} />
    </Routes>
  )
}

export default App
