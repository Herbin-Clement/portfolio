import BoldText from "../util/BoldText";

const ContactItem = ({title, text}) => {
    return(
        <div className="flex flex-col items-center w-20p h-80p">
            <div className="flex justify-center mb-5 text-orange text-3xl"><BoldText text={title}/></div>
            <div className="text-black80 font-medium">{text}</div>
        </div>
    );
};

export default ContactItem;