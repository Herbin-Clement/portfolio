import HeaderContent from "./HeaderContent";

const Header = () => {
    return (
        <div className="absolute flex justify-center top-0 w-100p text-white">
            <div className="flex justify-around w-35p text-xl">
            <HeaderContent text="Home" current={true} id="home"/>
            <HeaderContent text="About" id="about"/>
            <HeaderContent text="Projects" id="project"/>
            <HeaderContent text="Resume" id="resume"/>
            <HeaderContent text="Contact" id="contact"/>
            </div>
        </div>
    );
};

export default Header;