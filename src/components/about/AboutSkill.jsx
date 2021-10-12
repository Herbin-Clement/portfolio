import SkillBar from "./SkillBar";

const AboutSkill = () => {
    return(
        <div className="w-35p">
            <div className="flex justify-center mb-2 text-3xl text-orange font-medium">Skills</div>
            <SkillBar language="SQL" pourcentage={50}/>
        </div>
    );
};

export default AboutSkill;