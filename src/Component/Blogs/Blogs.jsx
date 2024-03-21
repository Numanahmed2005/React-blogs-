import { useEffect } from "react";
import { useState } from "react";

import profile from '../../assets/Image/profile.png'
import Blog from "../Blog/Blog";


const Blogs = ({clickhandlemark,handlereadingtime}) => {
    let [ blogs , setblog]= useState([]);
    useEffect(()=>{
        fetch('blog.json')
        .then( res=> res.json())
        .then( data=> setblog(data))
    } , [])
    return (
        <div className="w-2/3"> 
        <p> length: {blogs.length}</p>
        {
           blogs.map( blog=> <Blog key={blog.id} clickhandlemark={clickhandlemark} handlereadingtime={handlereadingtime} blog={blog}> </Blog>)
        }
        
            
        </div>
    );
};

export default Blogs;