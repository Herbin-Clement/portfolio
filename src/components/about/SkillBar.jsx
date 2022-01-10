const SkillBar = ({language, pourcentage}) => {
    return(
        <>
            <div className="aboutSkillLanguage">{language}</div>
            <div className="bar">
                <div className="progress" style={{width: `${pourcentage}%`}}></div>
            </div>
        </>
    );
};

export default SkillBar;