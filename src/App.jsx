// Router imports.
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

// Global component imports.
import Sidebar from "./components/sidebar/Sidebar.jsx";

// page imports.
import Overview from "./pages/overview/Overview.jsx";
import Inbox from "./pages/inbox/Inbox.jsx";
import Project from "./pages/project/Project.jsx";

const Layout = () => {
    return (
        <div className="h-screen flex">
            <Sidebar />
            <Outlet />
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
                path: "/inbox",
                element: <Inbox />,
            },
            {
                path: "/project/:name",
                element: <Project />,
            },
        ],
    },
]);
const App = () => {
    return (
        <RouterProvider router={router}>
            <Layout />
        </RouterProvider>
    );
};
export default App;
