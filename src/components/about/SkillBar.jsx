import BoldText from "../util/BoldText";

const SkillBar = ({language, pourcentage}) => {
    return(
        <>
            <div className="mb-1 text-black80">{language}</div>
            <div className="w-100p h-2 mb-2 rounded bg-black30">
                <div className={`w-${pourcentage}p h-100p rounded bg-white`}></div>
            </div>
        </>
    );
};

export default SkillBar;