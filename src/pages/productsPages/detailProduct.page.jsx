import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'


export const DetailProductPage = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/cart/${id}`);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);


    return (
        <div className="w-screen h-screen flex  flex-col justify-center items-center bg-white text-white">
            <div className="p-8 border rounded-lg shadow-lg space-y-3 bg-slate-200">
                <img
                    src={data?.thumbnail}
                    className="h-80 w-80 object-cover object-center group-hover:opacity-75 sm:max-w-xs	"
                />
            </div>
            <div className='dark:bg-gray-900 p-3 border rounded-lg shadow-lg '>
                <h2 className='font-bold'>{data.title}</h2>
                <p className='font-semibold'>Precio: ${data.price}</p>
                <p>Cantidad disponible: {data.quantity}</p>
            </div>
        </div>
    )
}