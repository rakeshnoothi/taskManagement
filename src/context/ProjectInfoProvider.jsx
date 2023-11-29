import { createContext, useState } from "react";

export const ProjectContext = createContext();

const ProjectInfoProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);
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
