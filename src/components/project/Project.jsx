import Carousel from 'react-elastic-carousel';
import Title from "../util/Title";
import ProjectCard from "./ProjectCard";

const Project = () => {
    return (
        <div className="flex flex-col items-center w-100p h-60v p-10 bg-white" id="project">
            <Title text="Projects." color="text-orange"/>
            <div className="flex justify-evenly items-center w-80p h-70p">
                <Carousel>
                    <ProjectCard title="Fluid Simulation" language="C++" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                    <ProjectCard title="Port Folio" language="React JS - Tailwind" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                    <ProjectCard title="Board Game" language="Java" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                </Carousel>
            </div>
        </div>
    );
};

export default Project;