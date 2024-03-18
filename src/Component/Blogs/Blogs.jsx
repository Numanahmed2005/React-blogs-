import { useEffect } from "react";
import { useState } from "react";



const Blogs = () => {
    let [ blogs , setblog]= useState([]);
    useEffect(()=>{
        fetch('blog.json')
        .then( res=> res.json())
        .then( data=> setblog(data))
    } , [])
    return (
        <div>
            
        </div>
    );
};

export default Blogs;