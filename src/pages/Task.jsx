// React imports.
import { useState } from "react";
// hooks import
import useTaskInfo from "../hooks/useTaskInfo";
import localStoragefunc from "../utils/localStorage";

const Task = ({ task }) => {
    const { tasks, setTasks } = useTaskInfo();
    const [isEditable, setIsEditable] = useState(false);
    const [userInput, setUserInput] = useState({
        name: task.name,
        description: task.description,
        priority: task.priority,
        status: task.status,
    });

    const editTask = taskId => {
        setIsEditable(!isEditable);
        if (isEditable) {
            const updatedTasks = tasks.map(task => {
                if (task.id === taskId) {
                    task.name = userInput.name;
                    task.description = userInput.description;
                    task.priority = userInput.priority;
                    task.status = userInput.status;
                    return task;
                }
                return task;
            });
            setTasks(updatedTasks);
            localStoragefunc.setItem("tasks", updatedTasks);
        }
    };

    const deleteTask = taskId => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
        localStoragefunc.setItem("tasks", updatedTasks);
    };
    return (
        <li className="p-4 bg-blue-100 flex flex-col gap-2">
            <input
                type="text"
                className={`p-2 font-bold text-xl bg-blue-100 outline-blue-900 ${
                    userInput.status === "Completed" && "line-through"
                }`}
                value={userInput.name}
                disabled={!isEditable}
                onChange={e => {
                    setUserInput({
                        ...userInput,
                        name: e.target.value,
                    });
                }}
            />
            <textarea
                className={`p-2 bg-blue-100 outline-blue-900 max-h-20 min-h-[80px] resize-none ${
                    userInput.status === "Completed" && "line-through"
                }`}
                value={userInput.description}
                disabled={!isEditable}
                onChange={e => {
                    setUserInput({
                        ...userInput,
                        description: e.target.value,
                    });
                }}
            ></textarea>
            <div className="flex items-center justify-between">
                <div className="space-x-2">
                    <select
                        className="bg-blue-100"
                        disabled={!isEditable}
                        defaultValue={userInput.priority}
                        onChange={e => {
                            setUserInput({
                                ...userInput,
                                priority: e.target.value,
                            });
                        }}
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>

                    <select
                        className="bg-blue-100"
                        disabled={!isEditable}
                        defaultValue={userInput.status}
                        onChange={e => {
                            setUserInput({
                                ...userInput,
                                status: e.target.value,
                            });
                        }}
                    >
                        <option value="Yet To Start">Yet To Start</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                <div className="space-x-2">
                    <button
                        className="px-4 py-2 bg-silver-100 rounded-md hover:bg-silver-500"
                        onClick={() => editTask(task.id)}
                    >
                        {isEditable ? "Save" : "Edit"}
                    </button>
                    <button
                        className="px-4 py-2 bg-red rounded-md text-white"
                        onClick={() => deleteTask(task.id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </li>
    );
};
export default Task;
