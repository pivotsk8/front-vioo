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

// import { useState, useEffect, useContext, Fragment } from 'react';
// import ProductsAPI from '../../api/ProductsAPI'
// import { SearchContext } from '../../layout/products.layout';
// import { Dialog, Transition } from '@headlessui/react'
// export const ProductsListPage = () => {
//     const [data, setData] = useState([]);
//     const [open, setOpen] = useState(false);
//     const [selectedProduct, setSelectedProduct] = useState(null);
//     let searchValue = useContext(SearchContext) || "";

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await ProductsAPI.allProducts();
//                 setData(response.data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     const filteredData = data.filter(product =>
//         product.title.toLowerCase().includes(searchValue.toLowerCase())
//     );

//     const handleProductClick = (product) => {
//         setSelectedProduct(product);
//         setOpen(true);
//     };

//     return (
//         <div className="bg-gray-200">
//             <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//                 <h2 className="sr-only">Products</h2>

//                 <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
//                     {filteredData.map((product) => (
//                         <div key={product._id} className="group" onClick={() => handleProductClick(product)}>
//                             <div className="aspect-h-1 aspect-w-1  overflow-hidden rounded-t-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
//                                 <img
//                                     src={product?.thumbnail}
//                                     className=" w-full object-cover object-center group-hover:opacity-75 sm:max-w-xs"
//                                 />
//                             </div>
//                             <div className='bg-gray-700 rounded-b-lg p-4' >
//                                 <h3 className=" text-sm text-white font-semibold">{product?.title}</h3>
//                                 <p className="mt-1 text-lg font-medium text-white">${product?.price}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             {selectedProduct && (
//                 <Transition.Root show={open} as={Fragment}>
//                     <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={setOpen}>
//                         <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//                             <Transition.Child
//                                 as={Fragment}
//                                 enter="ease-out duration-300"
//                                 enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//                                 enterTo="opacity-100 translate-y-0 sm:scale-100"
//                                 leave="ease-in duration-200"
//                                 leaveFrom="opacity-100 translate-y-0 sm:scale-100"
//                                 leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//                             >
//                                 <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
//                                     <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900 p-3">
//                                         {selectedProduct.title}
//                                     </Dialog.Title>
//                                     <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//                                         <div className="sm:flex sm:items-start">
//                                             <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
//                                                 <Dialog.Description as="div" className="text-sm text-gray-500">
//                                                     <img src={selectedProduct.thumbnail} alt={selectedProduct.title} />
//                                                     <p>{selectedProduct.title}</p>
//                                                     <p>${selectedProduct.price}</p>
//                                                     <p>${selectedProduct.quantity}</p>
//                                                 </Dialog.Description>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
//                                         <button
//                                             type="button"
//                                             className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
//                                             onClick={() => setOpen(false)}
//                                         >
//                                             Close
//                                         </button>
//                                     </div>
//                                 </div>
//                             </Transition.Child>
//                         </div>
//                     </Dialog>
//                 </Transition.Root>
//             )}
//         </div>)
// }