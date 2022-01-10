import "./contact.css";

const ContactItem = ({title, text, link}) => {
    
    const handleClick = () => {
        if (link) {
            window.location.href = link;
        }
    }

    return(
        <div className="contactItem">
            <div className="contactItemTitle">{title}</div>
            <div className={`contactItemContent ${link ? "cursor-pointer" : ""}`} onClick={() => handleClick()}>{text}</div>
        </div>
    );
};

export default ContactItem;