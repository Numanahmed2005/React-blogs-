import Bookmarks from "./Bookmarks";
import PropTypes from 'prop-types'

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

Bookmark.propTypes={ bookmark:PropTypes.array,redingtime: PropTypes.number}

export default Bookmark;