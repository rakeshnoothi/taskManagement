import { useParams } from "react-router-dom";
import useTaskInfo from "../../hooks/useTaskInfo";
import Task from "../Task";

const Project = () => {
    const { tasks } = useTaskInfo();
    let { id } = useParams();
    return (
        <div className="grow p-4 overflow-y-scroll">
            <ul className="space-y-4">
                {tasks.map(
                    task =>
                        task.projectId === id && (
                            <Task key={task.id} task={task} />
                        )
                )}
            </ul>
        </div>
    );
};
export default Project;
