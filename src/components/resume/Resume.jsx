import Title from "../util/Title";
import ResumeItem from "./ResumeItem";

const Resume = () => {
    return (
        <div className="flex flex-col items-center p-10 w-100p bg-black21" id="resume">
            <Title text="Resume." color="text-orange"/>
            <div className="flex justify-center w-100p">
                <div className="flex flex-col justify-center">
                    <ResumeItem place="University of Lille" date="2019 - 2022">
                        <div className="mb-2 text-3xl">Bachelor's Degree in Computer Science</div>
                        <div> - Made a board game in groups of 3</div>
                    </ResumeItem>
                    <ResumeItem place="Jesset de Forest High School" date="2016 - 2019" resume="Made a board game in groups of 3">
                        <div className="mb-2 text-3xl">Scientific Baccalaureat</div>
                        <div> - With honours</div>
                        <div> - Computer Science and Information Technology speciality</div>
                    </ResumeItem>
                </div>
            </div>
        </div>
    );
};

export default Resume;