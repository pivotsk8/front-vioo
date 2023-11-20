import { createBrowserRouter } from "react-router-dom";

//middleware
import { PrivateRoute } from "./middleware/authMiddleware"

//Layouts
import { LoginLayout } from "./layout/login.layout";

//Pages
import { ProductsListPage } from "./pages/productsPages/productsList.page";
import { LoginPage } from "./pages/loginPage/login.page";
import { ConfirmAccountPage } from "./pages/loginPage/confirmAccount.page";
import { RegisterPage } from "./pages/loginPage/register.page";
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
            },
            {
                path: "/verify/:token",
                element: < ConfirmAccountPage />,
            }

        ]
    },
    {
        path: "/products",
        element: < PrivateRoute />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "",
                element: < ProductsListPage />,
            }
        ]
    }
]);

export default routes;
