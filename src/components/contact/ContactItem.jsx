import BoldText from "../util/BoldText";

const ContactItem = ({title, text, link}) => {
    
    const handleClick = () => {
        if (link) {
            window.location.href = link;
        }
    }

    return(
        <div className="flex flex-col items-center w-20p h-80p">
            <div className="flex justify-center mb-5 text-orange text-3xl"><BoldText text={title}/></div>
            <div className={`text-black80 font-medium ${link ? "cursor-pointer" : ""}`} onClick={() => handleClick()}>{text}</div>
        </div>
    );
};

export default ContactItem;