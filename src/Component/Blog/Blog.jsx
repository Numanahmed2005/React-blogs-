import { BsBookmark } from "react-icons/bs";
import Bookmark from "../Bookmark/Bookmark";

const Blog = ({blog,clickhandlemark,handlereadingtime}) => {
    let { cover,author_img,title,hashtag,author,img_posted_date,reading_time }= blog
    return (
        <div className="my-4">
         <div> 
            <img src={cover} alt=""></img>
            <div className="flex justify-between ">
                <div className="flex items-center"> 
                    <div> <img className="h-[60px]" src={author_img} alt="" /></div>
                    <div> <p> {author}</p>
                    <p> {img_posted_date}</p></div>
                 
                
                </div>
               
                <div> <span> {reading_time}</span>
                <button onClick={()=>clickhandlemark(blog)}> <BsBookmark /></button></div>

                
            </div>
            <div><h1 className=" text-4xl"> {title}</h1></div>
            <div> #{hashtag}</div>
         </div>
         <button  onClick={()=>handlereadingtime(reading_time)}   className="text-purple-500">mark as read</button>
            
        </div>
    );
};

export default Blog;