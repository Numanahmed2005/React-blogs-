
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
  let [ redingtime,setreadingtime]=useState(0)
  let handlereadingtime=time=>{
    
    let newreadingtime = redingtime+ time;
    setreadingtime(newreadingtime);
    
  }
  
  
 
 

  return (
    <>
    <header> 
    <Header> </Header>
    </header>
    
    <main className='flex mx-12'> 
    <Blogs clickhandlemark={clickhandlemark} handlereadingtime={handlereadingtime}> </Blogs>
    <Bookmark bookmark={bookmark} redingtime={redingtime}> </Bookmark>
     </main>
    
     
    </>
  )
}

export default App
