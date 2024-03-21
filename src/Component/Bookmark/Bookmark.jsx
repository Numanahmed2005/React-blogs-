import Bookmarks from "./Bookmarks";


const Bookmark = ({bookmark}) => {
     
    return (
        <div className="w-1/3">
            {
               bookmark.map( bookmarks=>  <Bookmarks key={bookmark.id} bookmark={bookmarks}> </Bookmarks>) 
            }
        </div>
    );
};

export default Bookmark;