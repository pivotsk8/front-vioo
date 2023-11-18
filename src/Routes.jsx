import { createBrowserRouter } from "react-router-dom";

//Layouts
import { LoginLayout } from "./layout/login.layout";
import { ProductsLayout } from './layout/products.layout'

//Pages
import { ProductsListPage } from "./pages/productsPages/productsList.page";
import { DetailProductPage } from "./pages/productsPages/detailProduct.page";
import { LoginPage } from "./pages/loginPage/login.page";
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
            }

        ]
    },
    {
        path: "/products",
        element: <ProductsLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "",
                element: < ProductsListPage />,
            },
            {
                path: "detail/:id",
                element: <DetailProductPage />
            }
        ]
    }
]);

export default routes;
