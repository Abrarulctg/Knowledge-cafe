
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    // console.log('bookmark adding soon', blog);
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  }


  const handleMarkAsRead = (time) => {
    // console.log('marking as read', time);
    setReadingTime(readingTime + time);
    // const newReadingTime = [...readingTime, time];
    // setReadingTime(newReadingTime);
  }

  return (
    <>
      <Header></Header>
      <div className='max-w-7xl mx-auto md:flex'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
