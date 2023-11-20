
import { useState } from 'react';

export const RegisterForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, email, password, confirmPassword });
    };

    return (
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
    );
};

