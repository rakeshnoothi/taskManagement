import { createContext, useEffect, useState } from "react";
import localStoragefunc from "../utils/localStorage";

export const TaskContext = createContext();

const TaskInfoProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const initialTasks = localStoragefunc.getItem("tasks");
        if (!initialTasks) return;
        setTasks(initialTasks);
    }, []);
    const context = {
        tasks,
        setTasks,
    };
    return (
        <TaskContext.Provider value={context}>{children}</TaskContext.Provider>
    );
};
export default TaskInfoProvider;
