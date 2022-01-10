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
            <div className="contactItemContent" onClick={() => handleClick()}
                style={{
                    cursor: link ? "pointer" : "auto"
                }}
            >{text}</div>
        </div>
    );
};

export default ContactItem;