const SkillBar = ({language, pourcentage}) => {
    return(
        <>
            <div className="aboutSkillLanguage">{language}</div>
            <div className="bar">
                <div className={`w-${pourcentage}p progress`}></div>
            </div>
        </>
    );
};

export default SkillBar;