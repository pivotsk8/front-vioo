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
        return <NotForbiddenPage />;
    }

    return (
        token?.data ? <ProductsLayout /> : <Navigate to={"/"} />
    );
};
