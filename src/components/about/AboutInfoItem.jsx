import './about.css';

const AboutInfoItem = ({title, content}) => {
    return(
        <div className="aboutInfoItem">
            <div className="aboutInfoItemTitle">{title}</div>
            <div className="">
            {content.map((reptile, key) => (
                <div className="aboutInfoItemContent" key={key}>{reptile}</div>
            ))}
            </div>
        </div>
    );
};

export default AboutInfoItem;