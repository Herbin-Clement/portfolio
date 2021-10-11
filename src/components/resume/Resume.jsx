import Title from "../util/Title";
import ResumeItem from "./ResumeItem";
import BoldText from "../util/BoldText";

const Resume = () => {
    return (
        <div className="flex flex-col items-center w-100p h-60v pt-4 bg-black21">
            <Title text="Resume." color="text-orange"/>
            <div className="flex justify-center w-100p">
                <div className="flex flex-col justify-center">
                    <ResumeItem place="University of Lille" date="2019 - 2022">
                        <div className="mb-2 text-3xl">Bachelor's Degree in <BoldText text="Computer Science"/></div>
                        <div> - Made a board game in groups of 3</div>
                    </ResumeItem>
                    <ResumeItem place="Jesset de Forest High School" date="2016 - 2019" resume="Made a board game in groups of 3">
                        <div className="mb-2 text-3xl"><BoldText text="Scientific"/> Baccalaureat</div>
                        <div> - With honours</div>
                        <div> - <BoldText text="Computer Science"/> and <BoldText text="Information Technology"/> speciality</div>
                    </ResumeItem>
                </div>
            </div>
        </div>
    );
};

export default Resume;