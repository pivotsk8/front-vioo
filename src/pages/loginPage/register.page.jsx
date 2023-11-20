import { useNavigate } from 'react-router-dom';
import AuthApi from '../../api/AuthAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RegisterForm } from '../../components/RegisterForm'; // Importar el nuevo componente

export const RegisterPage = () => {
    const navigate = useNavigate();

    const handleSubmit = async ({ name, email, password, confirmPassword }) => {
        const userData = { name, email, password };

        try {
            if (password !== confirmPassword) {
                toast.error('Las contraseñas no coinciden', { theme: 'colored' });
                return;
            }

            const { data } = await AuthApi.register(userData);
            toast.success(data.msg, { theme: 'colored' });

            setTimeout(function () {
                navigate('/');
            }, 5000);
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.msg, { theme: 'colored' });
            }
        }
    };

    return (
        <div className="w-screen h-screen flex justify-center flex-col items-center ">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm rounded-xl p-5 w-[300px] bg-gray-700 space-y-3 shadow-[0_5px_10px_-5px_rgba(0,0,0,125)]">
                <RegisterForm onSubmit={handleSubmit} />
            </div>
            <ToastContainer />
        </div>
    );
};