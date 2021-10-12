import Title from "../util/Title";
import ProjectCard from "./ProjectCard";

const Project = () => {
    return (
        <div className="flex flex-col items-center w-100p h-80 p-10 bg-white">
            <Title text="Projects." color="text-black80"/>
            <div className="flex justify-evenly items-center w-80p h-70p border">
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
        </div>
    );
};

export default Project;