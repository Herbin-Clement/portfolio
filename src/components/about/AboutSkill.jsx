import SkillBar from "./SkillBar";

const AboutSkill = () => {
    return(
        <div className="aboutSkill">
            <div className="aboutTitle">Skills</div>
            <SkillBar language="HTML - CSS - JS" pourcentage={70}/>
            <SkillBar language="JAVA" pourcentage={60}/>
            <SkillBar language="C - C++ - Python" pourcentage={70}/>
            <SkillBar language="React JS - Fasify - Tailwind" pourcentage={75}/>
            <SkillBar language="Git - Makefile" pourcentage={80}/>
        </div>
    );
};

export default AboutSkill;