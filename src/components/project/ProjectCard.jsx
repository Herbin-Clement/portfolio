const ProjectCard = ({title, language, description}) => {
    return(
        <div className="flex flex-col items-center w-30p h-100p p-5 bg-black21 rounded-sm">
            <div className="mb-6 text-orange text-3xl font-bold">{title}</div>
            <div className="mb-4 text-white text-xl font-bold">{language}</div>
            <div className="text-black80 text-l font-bold text-center">{description}</div>
        </div>
    );
};

export default ProjectCard;