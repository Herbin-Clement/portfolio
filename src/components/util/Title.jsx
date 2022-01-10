import './title.css';

const Title = ({text, color}) => {
    return(
        <div className={`title ${color ? color : "text-white"} font-semibold`}>
            {text}
        </div>
    );
};

export default Title;