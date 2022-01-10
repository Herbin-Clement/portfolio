import "./project.css";

const ProjectCard = ({title, language, description, github}) => {

    const handleClick = () => {
        if (github) {
            window.location.href = github;
        }
    }

    return(
        <div className="projectCard">
            <div className="projectCardTItleLanguage">
                <div className="projectCardTitle">{title}</div>
                <div className="projectCardLanguage">{language}</div>
            </div>
            <div className="projectCardDescription">{description}</div>
            <button className="githubButton" onClick={() => handleClick()}>GitHub</button>
        </div>
    );
};

export default ProjectCard;