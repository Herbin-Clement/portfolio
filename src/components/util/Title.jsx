const Title = ({text, color}) => {
    return(
        <div className={`flex justify-center w-100p mb-10 text-5xl ${color ? color : "text-white"} font-semibold`}>
            {text}
        </div>
    );
};

export default Title;