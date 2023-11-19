import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const RegisterPage = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const userData = {
            name: name,
            email: email,
            password: password

        };

        try {
            if (password !== confirmPassword) {
                toast.error("Las contraseñas no coinciden", {
                    theme: "colored"
                });
                return
            }

            const { data } = await axios.post('http://localhost:4000/api/auth/register', userData);
            toast.success(data.msg, {
                theme: "colored"
            })
            setTimeout(function () {
                navigate('/')
            }, 5000);


        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.msg, {
                    theme: "colored"
                });
            }
        }
    }

    return (
        <div className="w-screen h-screen flex justify-center flex-col items-center ">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Connectate
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm rounded-xl p-5 w-[300px]  bg-gray-700 space-y-3 shadow-[0_5px_10px_-5px_rgba(0,0,0,125)]">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Nombre
                        </label>
                        <div className="mt-2">
                            <input
                                id="name"
                                name="name"
                                type="string"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className=" text-gray-900 text-sm rounded-lg  w-full p-2.5 outline-none"
                                placeholder="Nombre"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Email
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className=" text-gray-900 text-sm rounded-lg  w-full p-2.5 outline-none"
                                placeholder="admin@example.com"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Contraseña
                            </label>
                        </div>
                        <div className="mt-1">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block mt-4 mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                Confirma Contraseña
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password-confirm"
                                name="password-confirm"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Crear Cuenta
                        </button>
                    </div>
                </form>

            </div>
            <ToastContainer />
        </div>
    )
}