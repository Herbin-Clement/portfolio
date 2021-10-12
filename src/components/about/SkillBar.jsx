const SkillBar = ({language, pourcentage}) => {
    return(
        <div>
            <div>{language}</div>
            <div className="w-100p h-10p bg-white">
                <span className="w-100p h-10p bg-black80">a</span>
            </div>
        </div>
    );
};

export default SkillBar;