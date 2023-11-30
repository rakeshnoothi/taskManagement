import { createContext, useEffect, useState } from "react";
import localStoragefunc from "../utils/localStorage";

export const ProjectContext = createContext();

const ProjectInfoProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const initialProjects = localStoragefunc.getItem("projects");
        if (!initialProjects) return;
        setProjects(initialProjects);
    }, []);
    const context = {
        projects,
        setProjects,
    };
    return (
        <ProjectContext.Provider value={context}>
            {children}
        </ProjectContext.Provider>
    );
};
export default ProjectInfoProvider;
