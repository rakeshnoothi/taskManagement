import { PlusIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import useProjectInfo from "../../hooks/useProjectInfo";
import useAddComponent from "../../hooks/useAddComponent";

const Project = ({ name, totalTasks }) => {
    return (
        <li>
            <NavLink
                className="p-2 rounded-md text-blue-900 flex justify-between hover-styles"
                to={`/project/${name}`}
            >
                <span>{name}</span>
                <span>{totalTasks}</span>
            </NavLink>
        </li>
    );
};

const Projects = () => {
    const [isOpen, setIsOpen] = useState(true);
    const { projects } = useProjectInfo();
    const { setRender } = useAddComponent();

    return (
        <section>
            <div
                id="heading-block"
                className="p-2 rounded-md flex justify-between hover:cursor-pointer group"
            >
                <h3 className="font-bold text-blue-900">My Projects</h3>
                <div id="heading-icons" className="flex gap-2">
                    <PlusIcon
                        className="icon-dimenstions hover:animate-spin-once"
                        onClick={() => setRender("project")}
                    />
                    <ChevronDownIcon
                        className={`icon-dimenstions hover:cursor-pointer ${
                            !isOpen && "-rotate-90"
                        }`}
                        onClick={() => setIsOpen(!isOpen)}
                    />
                </div>
            </div>
            {isOpen ? (
                <ul className="flex flex-col gap-2 ">
                    {projects !== null ? (
                        projects.map(project => {
                            return (
                                <Project
                                    key={project.name}
                                    name={project.name}
                                    totalTasks={project.totalTasks}
                                />
                            );
                        })
                    ) : (
                        <></>
                    )}
                </ul>
            ) : (
                <></>
            )}
        </section>
    );
};
export default Projects;
