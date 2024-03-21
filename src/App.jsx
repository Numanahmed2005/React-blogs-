
import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmark from './Component/Bookmark/Bookmark'
import Header from './Component/Header/Header'

function App() {
  let [ bookmark,setbookmark]=useState([])
  let clickhandlemark= blog=>{
     let newhandle=[ ...bookmark,blog]
    setbookmark(newhandle)
    
  }
  
  
 
 

  return (
    <>
    <header> 
    <Header> </Header>
    </header>
    
    <main className='flex mx-12'> 
    <Blogs clickhandlemark={clickhandlemark}> </Blogs>
    <Bookmark bookmark={bookmark}> </Bookmark>
     </main>
    
     
    </>
  )
}

export default App
