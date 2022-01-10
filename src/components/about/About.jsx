import { Element } from "react-scroll/modules";

import Title from "../util/Title";
import AboutInfo from "./AboutInfo";
import AboutSkill from "./AboutSkill";

import './about.css';

const About = () => {
    return (
        <div className="about" id="about">
            <Element name="about"/>
            <Title text="About myself." color="#FFB614"/>
            <div className="smallDescription">
                I'm getting my <span>Bachelor's degree</span> in <span>Computer Science</span> at <span>University of Lille</span> in France. <br/>
                I love <span>Mathematics</span> and <span>Physics</span> since childhood and then get interested into Computer Science. <br/>
                I'm currently interested in <span>Artificial Intelligence</span>.     
            </div>
            <div className="aboutInfoSkill">
                <AboutInfo/>
                <AboutSkill/>
            </div>
        </div>
    );
};

export default About;