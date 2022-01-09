import { Element } from "react-scroll/modules";

import BoldText from "../util/BoldText";
import Title from "../util/Title";
import AboutInfo from "./AboutInfo";
import AboutSkill from "./AboutSkill";

const About = () => {
    return (
        <div className="flex flex-col items-center w-100p p-10 bg-black21 text-white" id="about">
            <Element name="about"/>
            <Title text="About myself." color="text-orange"/>
            <div className="text-2xl w-60p mb-10">
                I'm getting my Bachelor's degree in Computer Science at University of Lille in France. <br/>
                I love <BoldText text="Mathematics"/> and <BoldText text="Physics"/> since childhood and then get interested into <BoldText text="Computer Science"/>. <br/>
                I'm currently interested in <BoldText text="Machine Learning"/>.       
            </div>
            <div className="flex justify-around w-80p">
                <AboutInfo/>
                <AboutSkill/>
            </div>
        </div>
    );
};

export default About;