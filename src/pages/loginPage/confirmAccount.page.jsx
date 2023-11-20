import { useEffect } from "react"
import { useNavigate, Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthAPI from "../../api/AuthAPI"

export const ConfirmAccountPage = () => {
    const { token } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(token)
                const { data } = await AuthAPI.verifyAccount(token);
                toast.success(data.msg, { theme: 'colored' });
                setTimeout(function () {
                    navigate('/');
                }, 5000);

            } catch (error) {
                toast.error(error.response.data.msg, {
                    theme: "colored"
                });
            }
        };

        fetchData();
    }, [navigate, token])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
                <p className="text-xl text-gray-700 mb-4">Estamos confirmando tu cuenta, en caso de error intentalo de nuevo !</p>
                <Link to="/" className="text-blue-500 hover:underline">
                    <FontAwesomeIcon icon={faHome} className="mr-2" />
                    Go Home
                </Link>
            </div>
            <ToastContainer />
        </div>
    );
}
