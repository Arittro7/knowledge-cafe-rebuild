
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarked, setBookmarked] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog =>{
    const newBookmarked = [...bookmarked, blog];
    setBookmarked(newBookmarked)
  }

  const handleMarkToRead = (time , id)=>{
    setReadingTime (readingTime + time);
    // removing bookmarked blog
    // console.log('Bookmarked will remove', id);
    const remainingBookmarked = bookmarked.filter(bookmark => bookmark.id !== id);
    setBookmarked(remainingBookmarked)
  }

  return (
    <div className='main-container'>
    <Header></Header>
    <main className='md:flex'>
    <Blogs 
    handleAddToBookmark={handleAddToBookmark} 
    handleMarkToRead={handleMarkToRead}
    ></Blogs>
    <Bookmarks 
    bookmarked={bookmarked}
    readingTime={readingTime}
    ></Bookmarks>
    </main>
    </div>
  )
}

export default App
