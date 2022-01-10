import { Element } from "react-scroll/modules";

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
                I love Mathematics and Physics since childhood and then get interested into Computer Science. <br/>
                I'm currently interested in Artificial Intelligence.     
            </div>
            <div className="flex justify-around w-80p">
                <AboutInfo/>
                <AboutSkill/>
            </div>
        </div>
    );
};

export default About;