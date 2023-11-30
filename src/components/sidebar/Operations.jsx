//solid icon imports.
import { PlusCircleIcon } from "@heroicons/react/24/solid";

//outline icon imports.
import { ViewfinderCircleIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

// hook imports.
import useAddComponent from "../../hooks/useAddComponent";

const OperationButton = ({ redirectPage, displayName, icon }) => {
    return (
        <NavLink
            className="p-2 rounded-md flex gap-2 hover-styles"
            to={redirectPage}
        >
            {icon}
            <span>{displayName}</span>
        </NavLink>
    );
};

const Operations = () => {
    const { setRender } = useAddComponent();
    return (
        <section className="text-blue-900 flex flex-col gap-2">
            <div
                className="p-2 rounded-md flex gap-2 hover-styles"
                onClick={() => setRender("task")}
            >
                <PlusCircleIcon className="icon-dimenstions" />
                <span>Add Task</span>
            </div>
            <OperationButton
                redirectPage="/"
                displayName="Overview"
                icon={<ViewfinderCircleIcon className="icon-dimenstions" />}
            />
        </section>
    );
};
export default Operations;
