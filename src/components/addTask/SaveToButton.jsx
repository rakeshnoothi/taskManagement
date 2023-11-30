import { useState } from "react";
import useProjectInfo from "../../hooks/useProjectInfo";

const SaveToButton = ({ taskInfo }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [displayName, setDisplayName] = useState("Save To");
    const { projects } = useProjectInfo();
    return (
        <button
            className="relative px-4 py-2 border border-silver-500 rounded-md hover:bg-silver-100"
            onClick={() => setIsOpen(!isOpen)}
        >
            <span>{displayName}</span>
            {isOpen && projects !== null ? (
                <ul className="absolute w-max py-2 flex flex-col gap-2 bg-white border border-silver-500 top-full left-0 rounded-md">
                    {projects.map(project => {
                        return (
                            <li
                                key={project.id}
                                className="hover:bg-silver-100 px-4"
                                onClick={() => {
                                    setDisplayName(project.name);
                                    taskInfo.current.projectName = displayName;
                                    taskInfo.current.projectId = project.id;
                                }}
                            >
                                {project.name}
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <></>
            )}
        </button>
    );
};
export default SaveToButton;
