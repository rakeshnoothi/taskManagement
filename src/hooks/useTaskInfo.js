import { useContext } from "react";
import { TaskContext } from "../context/TaskInfoProvider";

const useTaskInfo = () => useContext(TaskContext);

export default useTaskInfo;
