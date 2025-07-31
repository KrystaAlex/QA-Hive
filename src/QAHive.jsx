import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import SubmitBug from './components/SubmitBug'
import Home from './pages/Home'
import './QAHive.css'

function QAHive() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/submit" element={<SubmitBug />} />
    </Routes>
    </>
  )
}

export default QAHive
