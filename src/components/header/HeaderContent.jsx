import { scroller } from "react-scroll/modules";
import './header.css'

const HeaderContent = ({text, current, id}) => {

    const handleClick = () => {
        scroller.scrollTo(id, {
            duration: 1000,
            delay: 100,
            smooth: true
        })
    }
    return(
        <div class={`heanderContent ${current ? "text-orange" : ""}`} onClick={() => handleClick()}>
            {text}
        </div>
    );
};

export default HeaderContent;