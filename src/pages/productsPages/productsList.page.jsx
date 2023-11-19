import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { SearchContext } from '../../layout/products.layout';



export const ProductsListPage = () => {
    const [data, setData] = useState([]);
    const searchValue = useContext(SearchContext) || "";

    useEffect(() => {
        console.log(searchValue)
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/cart');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [searchValue]);
    return (
        <div className="bg-gray-200">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {data.map((product) => (
                        <Link key={product?._id} className="group" to={`detail/${product?._id}`}>
                            <div className="aspect-h-1 aspect-w-1  overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    src={product?.thumbnail}
                                    className="h-80 w-full object-cover object-center group-hover:opacity-75 sm:max-w-xs	"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product?.title}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">${product?.price}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
