// LoginPage.js
import { useNavigate } from 'react-router-dom';
import AuthApi from '../../api/AuthAPI';
import { ToastContainer, toast } from 'react-toastify';
import { LoginForm } from '../../components/LoginForm';
import 'react-toastify/dist/ReactToastify.css';

export const LoginPage = () => {
    const navigate = useNavigate();

    const handleSubmit = async ({ email, password }) => {
        const userData = { email, password };

        try {
            const { data: { token } } = await AuthApi.login(userData)
            localStorage.setItem('TOKEN', token)
            navigate('/products')
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.msg, {
                    theme: "colored"
                });
            }
        }
    };

    return (
        <div className="w-screen h-screen flex justify-center flex-col items-center">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm rounded-xl p-5 w-[300px] bg-gray-700 space-y-3 shadow-[0_5px_10px_-5px_rgba(0,0,0,125)]">
                <LoginForm onSubmit={handleSubmit} />
            </div>
            <ToastContainer />
        </div>
    );
}


