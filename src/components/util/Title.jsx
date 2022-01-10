import './title.css';

const Title = ({text, color}) => {
    return(
        <div className="title" style={{color: color}}>
            {text}
        </div>
    );
};

export default Title;