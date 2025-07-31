import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import NavBar from './components/NavBar'
import CreatePostPage from './pages/CreatePostPage'
import HomeFeed from './pages/HomeFeed'
import PostDetail from './pages/PostDetail'
import './QAHive.css'

export default function QAHive() {
  const [ bugFeed, setBugFeed ] = useState([]);

  const addBugFeed = (newFeed) => {
    setBugFeed(prev => [newFeed, ...prev]);
  }

  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomeFeed bugFeed={bugFeed} />} />
      <Route path="/create" element={<CreatePostPage onSubmit={addBugFeed}/>} />
      <Route path="/posts/:id" element={<PostDetail />}/>
    </Routes>
    </>
  )
}


