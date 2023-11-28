import Operations from "./Operations";
import Profile from "./Profile";
import Projects from "./Projects";

const Sidebar = () => {
    return (
        <aside className="bg-blue-100 h-full w-80 p-2 flex flex-col gap-4">
            <Profile />
            <Operations />
            <Projects />
        </aside>
    );
};
export default Sidebar;
