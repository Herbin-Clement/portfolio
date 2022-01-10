import "./project.css";

const ProjectCard = ({title, language, description}) => {
    return(
        <div className="projectCard">
            <div className="projectCardTitle">{title}</div>
            <div className="projectCardLanguage">{language}</div>
            <div className="projectCardDescription">{description}</div>
        </div>
    );
};

export default ProjectCard;