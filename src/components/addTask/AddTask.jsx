import { useRef } from "react";

// component imports.
import IndicationButtonsSection from "./IndicationButtonsSection";
import SaveToButton from "./SaveToButton";

//hook imports.
import useAddComponent from "../../hooks/useAddComponent";
import useTaskInfo from "../../hooks/useTaskInfo";
import localStoragefunc from "../../utils/localStorage";

const taskInfoInitialValue = {
    status: null,
    priority: null,
    projectName: null,
};
const AddTask = () => {
    const { render, setRender } = useAddComponent();
    const { tasks, setTasks } = useTaskInfo();
    const taskInfo = useRef(taskInfoInitialValue);
    const form = useRef();

    const addTask = () => {
        // check inputs are not empty before adding task.
        if (
            !form.current.children[0].value &&
            !form.current.children[1].value
        ) {
            alert("You planned do nothing!. Please add a task!");
            return;
        }
        if (taskInfo.current.projectName === null) {
            alert("Please create a Project or Please select a Project");
            return;
        }

        const newTasks = [
            ...tasks,
            {
                id: crypto.randomUUID(),
                name: form.current.children[0].value,
                description: form.current.children[1].value,
                status: taskInfo.current.status,
                priority: taskInfo.current.priority,
                projectId: taskInfo.current.projectId,
            },
        ];

        setTasks(newTasks);
        localStoragefunc.setItem("tasks", newTasks);
        setRender(null);
        form.current.reset();
    };

    return (
        <>
            <div
                className={`absolute z-40 w-full h-full bg-black opacity-25 ${
                    render === "task" ? "block" : "hidden"
                }`}
            ></div>
            <div
                className={`absolute z-50 h-max w-full max-w-xl p-2 self-center left-96 border bg-white resize-y rounded-xl ${
                    render === "task" ? "block" : "hidden"
                }`}
            >
                <section className="pb-4 space-y-2">
                    <form className="flex flex-col" ref={form}>
                        <input
                            type="text"
                            placeholder="Task Name"
                            className=" p-2 outline-none text-2xl"
                        />
                        <textarea className="p-2 outline-none border border-silver-500"></textarea>
                    </form>
                    <IndicationButtonsSection taskInfo={taskInfo} />
                </section>
                <section className="pt-4 border-t-2  border-silver-500 flex justify-between">
                    <SaveToButton taskInfo={taskInfo} />
                    <div className="space-x-2">
                        <button
                            className="px-4 py-2 bg-silver-100 rounded-md hover:bg-silver-500"
                            onClick={() => setRender(false)}
                        >
                            Cancel
                        </button>
                        <button
                            className="px-4 py-2 bg-green-100 text-white rounded-md hover:bg-green-500"
                            onClick={() => addTask()}
                        >
                            Add Task
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
};
export default AddTask;
