import { useRef } from "react";

// component imports.
import IndicationButtonsSection from "./IndicationButtonsSection";
import SaveToButton from "./SaveToButton";

//hook imports.
import useAddComponent from "../../hooks/useAddComponent";
import useTaskInfo from "../../hooks/useTaskInfo";

const AddTask = () => {
    const ref = useRef();
    const { render, setRender } = useAddComponent();
    const { tasks, setTasks } = useTaskInfo();
    const taskInfo = useRef({
        status: null,
        priority: null,
        projectName: null,
    });

    console.log("Indication ref", taskInfo);
    console.log("tasks", tasks);

    const handleAddTask = () => {
        setTasks([
            ...tasks,
            {
                name: ref.current.value,
                description: "",
                status: taskInfo.current.status,
                priority: taskInfo.current.priority,
                projectName: taskInfo.current.projectName,
            },
        ]);
        setRender(null);
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
                    <div className="flex flex-col">
                        <input
                            type="text"
                            placeholder="Task Name"
                            className=" p-2 outline-none text-2xl"
                            ref={ref}
                        />
                    </div>
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
                            onClick={() => handleAddTask()}
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
