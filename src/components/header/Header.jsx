import HeaderContent from "./HeaderContent";
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="headerDiv">
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