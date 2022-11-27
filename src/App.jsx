import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import './App.scss'

function App() {
  return (
    <Routes>
      <Route index path="/" element={<MainPage />} />
    </Routes>
  )
}

export default App
