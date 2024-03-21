

const Bookmarks = ({bookmark}) => {
    let {title}=bookmark
    return (
        <div className="text-2xl ">
            <p> {title}</p>
        </div>
    );
};

export default Bookmarks;