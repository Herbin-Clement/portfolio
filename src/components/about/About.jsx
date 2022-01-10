import { Element } from "react-scroll/modules";

import Title from "../util/Title";
import AboutInfo from "./AboutInfo";
import AboutSkill from "./AboutSkill";

import './about.css';

const About = () => {
    return (
        <div className="about" id="about">
            <Element name="about"/>
            <Title text="About myself." color="text-orange"/>
            <div className="smallDescription">
                I'm getting my Bachelor's degree in Computer Science at University of Lille in France. <br/>
                I love Mathematics and Physics since childhood and then get interested into Computer Science. <br/>
                I'm currently interested in Artificial Intelligence.     
            </div>
            <div className="aboutInfoSkill">
                <AboutInfo/>
                <AboutSkill/>
            </div>
        </div>
    );
};

export default About;