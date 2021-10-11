const HeaderContent = ({text, current}) => {
    return(
        <div class={`cursor-pointer ${current ? "text-orange" : ""}`}>
            {text}
        </div>
    );
};

export default HeaderContent;