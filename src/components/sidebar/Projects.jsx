// solid icon imports.
import { PlusIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
// react imports.
import { useState } from "react";
// router imports.
import { NavLink } from "react-router-dom";
// hooks import
import useProjectInfo from "../../hooks/useProjectInfo";
import useAddComponent from "../../hooks/useAddComponent";
import useTaskInfo from "../../hooks/useTaskInfo";
import localStoragefunc from "../../utils/localStorage";

const Project = ({ project }) => {
    const { tasks, setTasks } = useTaskInfo();
    const { projects, setProjects } = useProjectInfo();

    const deleteProject = () => {
        const updatedTasks = tasks.filter(
            task => task.projectId !== project.id
        );
        setTasks(updatedTasks);
        localStoragefunc.setItem("tasks", updatedTasks);
        const updatedProjects = projects.filter(
            project1 => project1.id !== project.id
        );
        setProjects(updatedProjects);
        localStoragefunc.setItem("projects", updatedProjects);
    };
    return (
        <li>
            <NavLink
                className="p-2 rounded-md text-blue-900 flex justify-between items-center hover-styles"
                to={`/project/${project.id}`}
            >
                <span>{project.name}</span>
                <button
                    className="px-2 bg-red text-white rounded-md"
                    onClick={deleteProject}
                >
                    Delete
                </button>
            </NavLink>
        </li>
    );
};

const Projects = () => {
    const [isOpen, setIsOpen] = useState(true);
    const { projects } = useProjectInfo();
    const { setRender } = useAddComponent();

    return (
        <section className="grow overflow-y-hidden">
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
                <ul className="h-full flex flex-col gap-2 overflow-y-scroll">
                    {projects !== null ? (
                        projects.map(project => {
                            if (project.id === "Inbox") return;
                            return (
                                <Project key={project.id} project={project} />
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
