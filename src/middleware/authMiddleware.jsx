// import { VerifyToken } from '../utils/verifieToken'
// import { ProductsLayout } from '../layout/products.layout'
// import { useState, useEffect } from 'react';
// import { Navigate } from 'react-router-dom'

// export const PrivateRoute = () => {
//     const [isTokenVerified, setIsTokenVerified] = useState({});

//     useEffect(() => {
//         VerifyToken().then(p => {
//             setIsTokenVerified(p);
//         });
//     }, []);

//     return (
//         isTokenVerified.data?.user ? <ProductsLayout /> : <Navigate to={"/"} />
//     )
// }


// import { VerifyToken } from '../utils/verifieToken'
// import { ProductsLayout } from '../layout/products.layout'
// import { useState } from 'react';
// import { Navigate } from 'react-router-dom'

// export const PrivateRoute = async () => {


//     const data = await VerifyToken()
//     console.log(data)
//     const token = { ver: true }
//     return (
//         token.ver ? <ProductsLayout /> : <Navigate to={"/"} />
//     )
// }

import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { VerifyToken } from '../utils/verifieToken';

import { ProductsLayout } from '../layout/products.layout';
import { NotForbiddenPage } from '../pages/forbidden.page';


export const PrivateRoute = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [token, setToken] = useState({ data: false });
    useEffect(() => {
        VerifyToken().then(data => {
            setToken({ data });
            setIsLoading(false);
        }).catch(error => {
            console.log(error.response.data)
        });
    }, []);


    if (isLoading) {
        return <NotForbiddenPage />; // O cualquier otro componente de carga que quieras renderizar
    }

    return (
        token?.data ? <ProductsLayout /> : <Navigate to={"/"} />
    );
};
