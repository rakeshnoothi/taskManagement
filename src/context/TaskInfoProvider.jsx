import { createContext, useState } from "react";

export const TaskContext = createContext();

const TaskInfoProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const context = {
        tasks,
        setTasks,
    };
    return (
        <TaskContext.Provider value={context}>{children}</TaskContext.Provider>
    );
};
export default TaskInfoProvider;
