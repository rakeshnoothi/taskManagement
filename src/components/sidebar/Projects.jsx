import { PlusIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Project = ({ name, totalTasks }) => {
    return (
        <NavLink
            className="p-2 rounded-md flex justify-between hover-styles"
            to={`/project/${name}`}
        >
            <span>{name}</span>
            <span>{totalTasks}</span>
        </NavLink>
    );
};

const Projects = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <section>
            <div
                id="heading-block"
                className="p-2 rounded-md flex justify-between hover:cursor-pointer group"
            >
                <h3 className="font-bold text-blue-900">My Projects</h3>
                <div id="heading-icons" className="flex gap-2">
                    <PlusIcon className="icon-dimenstions hover:animate-spin-once" />
                    <ChevronDownIcon
                        className={`icon-dimenstions hover:cursor-pointer ${
                            !isOpen && "-rotate-90"
                        }`}
                        onClick={() => setIsOpen(!isOpen)}
                    />
                </div>
            </div>
            {isOpen ? (
                <section className="flex flex-col gap-2 ">
                    <Project name="Home" totalTasks="2" />
                    <Project name="Jogging" totalTasks="1" />
                </section>
            ) : (
                <></>
            )}
        </section>
    );
};
export default Projects;
