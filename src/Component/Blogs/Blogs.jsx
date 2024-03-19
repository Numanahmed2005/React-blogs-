import { useEffect } from "react";
import { useState } from "react";

import profile from '../../assets/Image/profile.png'


const Blogs = () => {
    let [ blogs , setblog]= useState([]);
    useEffect(()=>{
        fetch('blog.json')
        .then( res=> res.json())
        .then( data=> setblog(data))
    } , [])
    return (
        <div className="w-2/3"> 
        <h1> hi hello </h1>
            
        </div>
    );
};

export default Blogs;