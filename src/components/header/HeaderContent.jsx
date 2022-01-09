import { scroller } from "react-scroll/modules";

const HeaderContent = ({text, current, id}) => {

    const handleClick = () => {
        scroller.scrollTo(id, {
            duration: 1000,
            delay: 100,
            smooth: true
        })
    }
    return(
        <div class={`cursor-pointer ${current ? "text-orange" : ""}`} onClick={() => handleClick()}>
            {text}
        </div>
    );
};

export default HeaderContent;