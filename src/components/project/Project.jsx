import Carousel from 'react-elastic-carousel';

import ProjectCard from "./ProjectCard";
import Title from "../util/Title";

import "./project.css";

const Project = () => {
    return (
        <div className="project" id="project">
            <Title text="Projects." color="#171717"/>
            <div className="projectContent">
                <Carousel itemsToShow={3}>
                    <ProjectCard title="Fluid Simulation" language="C++" 
                        description="Made a Fluid simulation using C++ and SFML"
                        github="https://github.com/Herbin-Clement/Fluid-Simulation"/>
                    <ProjectCard title="Port Folio" language="React JS" 
                        description="Made my PortFolio using ReactJS"
                        github="https://github.com/Herbin-Clement/portfolio"/>
                    <ProjectCard title="Board Game" language="Java" 
                        description="Made a Board game in groups of 3 using Java"
                        github="https://github.com/Herbin-Clement/board-game"/>
                    <ProjectCard title="Graph Visualisation" language="ReactJS" 
                        description="Made a graph visualisation in ReactJS"
                        github="https://github.com/Herbin-Clement/graph-visu"/>
                    <ProjectCard title="Game of Life" language="HTML - CSS - JS" 
                        description="Made a game of life using html, css and js"
                        github="https://github.com/Herbin-Clement/GameOfLife"/>
                </Carousel>
            </div>
        </div>
    );
};

export default Project;

