import HeaderContent from "./HeaderContent";

const Header = () => {
    return (
        <div className="absolute flex justify-center top-0 w-100p text-white">
            <div className="flex justify-around w-35p text-xl">
            <HeaderContent text="Home" current={true}/>
            <HeaderContent text="About" />
            <HeaderContent text="Projects" />
            <HeaderContent text="Resume" />
            <HeaderContent text="Contact" />
            </div>
        </div>
    );
};

export default Header;