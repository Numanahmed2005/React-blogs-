

const Blog = ({blog}) => {
    let { id,cover }= blog
    return (
        <div className="my-4">
         <div> 
            <img src={cover} alt=""></img>
         </div>
         
            
        </div>
    );
};

export default Blog;