
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarked, setBookmarked] = useState([]);

  const handleAddToBookmark = blog =>{
    const newBookmarked = [...bookmarked, blog];
    setBookmarked(newBookmarked)
  }

  return (
    <>
    <Header></Header>
    <main className='md:flex'>
    <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
    <Bookmarks bookmarked={bookmarked}></Bookmarks>
    </main>
    </>
  )
}

export default App
