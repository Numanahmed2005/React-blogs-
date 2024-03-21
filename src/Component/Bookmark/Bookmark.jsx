import Bookmarks from "./Bookmarks";


const Bookmark = ({bookmark,redingtime}) => {
     
    return (
        <>
        <div  className="w-1/3">
        <div> 

            <h1> Reading time:{redingtime}</h1>
        </div>
        <div>
            {
               bookmark.map( bookmarks=>  <Bookmarks key={bookmark.id} bookmark={bookmarks}> </Bookmarks>) 
            }
        </div>
        </div>
        </>
    );
};

export default Bookmark;