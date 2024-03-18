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
        <div className="flex justify-between">
            <h1 className="text-2xl"> Knowledge cafe </h1>
             <img src={profile} alt="" />
            
        </div>
    );
};

export default Blogs;