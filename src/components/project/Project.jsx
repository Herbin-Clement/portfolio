import Carousel from 'react-elastic-carousel';
import Title from "../util/Title";
import ProjectCard from "./ProjectCard";

import "./project.css";

const Project = () => {
    return (
        <div className="project" id="project">
            <Title text="Projects." color="text-orange"/>
            <div className="projectContent">
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