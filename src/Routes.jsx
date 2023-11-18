import { createBrowserRouter } from "react-router-dom";
import { LoginLayout } from "./layout/login.layout";
import { LoginPage } from "./pages/login.page";
import { RegisterPage } from "./pages/register.page";
import { NotFoundPage } from "./pages/not-found.page";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "",
                element: < LoginPage />,
            },
            {
                path: "/register",
                element: < RegisterPage />,
            }

        ]
    },
]);

export default routes;
