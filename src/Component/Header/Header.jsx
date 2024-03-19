import profile from '../../assets/Image/profile.png'

const Header = () => {
    return (
       
            <div className="flex justify-between mx-12 border">
            <h1 className="text-2xl"> Knowledge cafe </h1>
             <img src={profile} alt="" />
            
        </div>
    );
};

export default Header;