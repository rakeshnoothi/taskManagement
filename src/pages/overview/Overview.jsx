import useTaskInfo from "../../hooks/useTaskInfo";

const Overview = () => {
    const { tasks } = useTaskInfo();
    let yetToStart = 0;
    let inProgress = 0;
    let completed = 0;
    tasks.map(task => {
        switch (task.status) {
            case "Yet To Start": {
                yetToStart += 1;
                break;
            }
            case "In Progress": {
                inProgress += 1;
                break;
            }
            case "Completed": {
                completed += 1;
                break;
            }
            default: {
                yetToStart = inProgress = completed = 0;
            }
        }
    });

    return (
        <div className="grow p-6 flex justify-between items-center">
            <div className="overview-styles">
                <h2 className="uppercase font-bold text-xl">yet to start</h2>
                <span className="font-bold text-xl text-blue-900">
                    {yetToStart}
                </span>
            </div>
            <div className="overview-styles">
                <h2 className="uppercase font-bold text-xl">in progress</h2>
                <span className="font-bold text-xl text-blue-900">
                    {inProgress}
                </span>
            </div>
            <div className="overview-styles">
                <h2 className="uppercase font-bold text-xl">completed</h2>
                <span className="font-bold text-xl text-blue-900">
                    {completed}
                </span>
            </div>
        </div>
    );
};
export default Overview;
