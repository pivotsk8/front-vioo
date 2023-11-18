import { Outlet, NavLink } from "react-router-dom";

export const ProductsLayout = () => {
    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
                <div className="min-w-full flex flex-wrap items-center justify-between mx-auto p-4 space-x-10">
                    <input
                        id="search-product"
                        name="products"
                        type="text"
                        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 p-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 "
                        placeholder="Buscar"
                    />
                    <div
                        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                        id="navbar-cta"
                    >
                        <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink
                                    to="/register"
                                    className={({ isActive }) => {
                                        return `${isActive ? "text-blue-800" : "text-white"
                                            } block py-2 pl-3 pr-4 rounded`;
                                    }}
                                    aria-current="page"
                                >
                                    Home
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
}