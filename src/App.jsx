import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import CataloguePage from './pages/CataloguePage/CataloguePage'
import VerticalPage from './pages/VerticalPage/VerticalPage'
import RetroreflectorsPage from './pages/RetroreflectorsPage/RetroreflectorsPage'

import './App.scss'

function App() {
  return (
    <Routes>
      <Route index path="/" element={<MainPage />} />
      <Route path="/catalogue" element={<CataloguePage />} />
      <Route path="/retroreflectors" element={<RetroreflectorsPage />} />
      <Route path="/vertical" element={<VerticalPage />} />
    </Routes>
  )
}

export default App
