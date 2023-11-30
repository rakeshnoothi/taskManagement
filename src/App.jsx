// Router imports.
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

// Global component imports.
import Sidebar from "./components/sidebar/Sidebar.jsx";
import AddTask from "./components/addTask/AddTask.jsx";
import AddProject from "./components/sidebar/AddProject.jsx";

// page imports.
import Overview from "./pages/overview/Overview.jsx";
import Project from "./pages/project/Project.jsx";

// context imports.
import ProjectInfoProvider from "./context/ProjectInfoProvider.jsx";
import AddComponentProvider from "./context/AddComponentProvider.jsx";
import TaskInfoProvider from "./context/TaskInfoProvider.jsx";

const Layout = () => {
    return (
        <div className="relative h-screen flex">
            <Sidebar />
            <Outlet />
            <AddTask />
            <AddProject />
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Overview />,
            },
            {
                path: "/project/:id",
                element: <Project />,
            },
        ],
    },
]);
const App = () => {
    return (
        <AddComponentProvider>
            <TaskInfoProvider>
                <ProjectInfoProvider>
                    <RouterProvider router={router}>
                        <Layout />
                    </RouterProvider>
                </ProjectInfoProvider>
            </TaskInfoProvider>
        </AddComponentProvider>
    );
};
export default App;
