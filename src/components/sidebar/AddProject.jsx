import { useRef } from "react";
import useProjectInfo from "../../hooks/useProjectInfo";
import useAddComponent from "../../hooks/useAddComponent";
import localStoragefunc from "../../utils/localStorage";

const AddProject = () => {
    const { render, setRender } = useAddComponent();
    const { projects, setProjects } = useProjectInfo();
    const ref = useRef();

    const handleAddProject = () => {
        const newProjects = [
            ...projects,
            {
                id: crypto.randomUUID(),
                name: ref.current.value,
            },
        ];
        setProjects(newProjects);
        localStoragefunc.setItem("projects", newProjects);
        ref.current.value = "";
        setRender(false);
    };

    return (
        <>
            <div
                className={`absolute z-40 w-full h-full bg-black opacity-25 ${
                    render === "project" ? "block" : "hidden"
                }`}
            ></div>
            <div
                className={`absolute z-50 w-full max-w-xl p-4 bg-white border flex flex-col gap-4 rounded-md self-center left-96 ${
                    render === "project" ? "block" : "hidden"
                }`}
            >
                <h2 className="font-bold text-xl">Add Project</h2>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-semibold">
                        Name
                    </label>
                    <input
                        type="text"
                        placeholder="Name of The project"
                        id="name"
                        className="p-2 outline-none border-2 border-silver-500"
                        ref={ref}
                    />
                </div>
                <div className="flex justify-end gap-2">
                    <button
                        className="px-4 py-2 bg-silver-100 rounded-md hover:bg-silver-500"
                        onClick={() => setRender(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 bg-green-100 text-white rounded-md hover:bg-green-500"
                        onClick={() => handleAddProject()}
                    >
                        Add Project
                    </button>
                </div>
            </div>
        </>
    );
};
export default AddProject;
