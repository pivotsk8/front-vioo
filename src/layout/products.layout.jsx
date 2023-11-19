import { Outlet, useNavigate, Link } from "react-router-dom";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const SearchContext = React.createContext();
function ProductsLayout() {
    const navigate = useNavigate();
    const [product, setProduct] = useState("");


    const signOut = () => {
        localStorage.clear();
        navigate('/');
    };

    return (
        <div className="bg-white">

            <header className="relative bg-white">
                <p className="flex h-10 items-center justify-center  dark:bg-gray-900 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
                    E-commer VIIO
                </p>

                <nav aria-label="Top" className="flex flex-col justify-between mx-auto max-w-8xl px-4 sm:px-6 lg:px-2 ">
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center ">
                            {/* Logo */}
                            <div className="ml-1 flex lg:ml-3 md:pr-2 ">
                                <a href="#">
                                    <img
                                        className="h-8 w-auto hidden sm:block "
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                        alt=""
                                    />
                                </a>
                            </div>

                            {/* Search */}
                            <div className="flex lg:ml-20 w-full" >
                                <div className="flex items-center justify-between space-x-1 xl:w-5/6 sm:w-full ">
                                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                                    <input
                                        id="search"
                                        name="search"
                                        type="string"
                                        value={product || ""}
                                        onChange={(e) => setProduct(e.target.value)}
                                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  p-2.5 outline-none"
                                        placeholder="Busca tu producto"
                                    />
                                </div>
                            </div>

                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    <button className="text-sm font-medium text-gray-700 hover:text-gray-800" onClick={signOut}>
                                        Sign out
                                    </button>
                                    <span className=" flex items-center justify-between h-6 w-px bg-gray-200 " aria-hidden="true" />
                                    <Link to="/products" className="hover:underline">
                                        <FontAwesomeIcon icon={faHome} className="mr-2" />
                                        Go Home
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <SearchContext.Provider value={product}>
                <Outlet />
            </SearchContext.Provider>

        </div>
    )
}

export {
    SearchContext,
    ProductsLayout
} 