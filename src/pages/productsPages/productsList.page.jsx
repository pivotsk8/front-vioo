import { useState, useEffect, useContext } from 'react';
import ProductsAPI from '../../api/ProductsAPI'
import { SearchContext } from '../../layout/products.layout';
import { ProductModal } from '../../components/ModalProduct';


export const ProductsListPage = () => {
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    let searchValue = useContext(SearchContext) || "";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ProductsAPI.allProducts();
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const filteredData = data.filter(product =>
        product.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setOpen(true);
    };

    return (
        <div className="bg-gray-200">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {filteredData.map((product) => (
                        <div key={product._id} className="group" onClick={() => handleProductClick(product)}>
                            <div className="aspect-h-1 aspect-w-1  overflow-hidden rounded-t-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    src={product?.thumbnail}
                                    className=" w-full object-cover object-center group-hover:opacity-75 sm:max-w-xs"
                                />
                            </div>
                            <div className='bg-gray-700 rounded-b-lg p-4' >
                                <h3 className=" text-sm text-white font-semibold">{product?.title}</h3>
                                <p className="mt-1 text-lg font-medium text-white">${product?.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {selectedProduct && (
                <ProductModal selectedProduct={selectedProduct} open={open} setOpen={setOpen} />
            )}
        </div>)
}