import Title from "../util/Title";
import ResumeItem from "./ResumeItem";

import "./resume.css";

const Resume = () => {
    return (
        <div className="resume" id="resume">
            <Title text="Resume." color="text-orange"/>
            <div className="resume2">
                <div className="resumeContent">
                    <ResumeItem place="University of Lille" date="2019 - 2022">
                        <div className="resumeTitle">Bachelor's Degree in Computer Science</div>
                        <div> - Made a board game in groups of 3</div>
                    </ResumeItem>
                    <ResumeItem place="Jesset de Forest High School" date="2016 - 2019" resume="Made a board game in groups of 3">
                        <div className="resumeTitle">Scientific Baccalaureat</div>
                        <div> - With honours</div>
                        <div> - Computer Science and Information Technology speciality</div>
                    </ResumeItem>
                </div>
            </div>
        </div>
    );
};

export default Resume;