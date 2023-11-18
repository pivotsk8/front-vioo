import { createBrowserRouter } from "react-router-dom";
import { LoginLayout } from "./layout/login.layout";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout />,
    },
]);

export default routes;
