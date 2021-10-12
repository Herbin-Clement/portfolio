const AboutInfoItem = ({title, content}) => {
    return(
        <div className="w-100p mb-2">
            <div className="text-black80 mb-1">{title}</div>
            <div className="">
            {content.map((reptile, key) => (
                <div className="ml-2 font-medium" key={key}>{reptile}</div>
            ))}
            </div>
        </div>
    );
};

export default AboutInfoItem;