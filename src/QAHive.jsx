import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import CreateBugPage from './pages/CreateBugPage'
import HomeFeed from './pages/HomeFeed'
import './QAHive.css'

export default function QAHive() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomeFeed />} />
      <Route path="/create" element={<CreateBugPage />} />
    </Routes>
    </>
  )
}


