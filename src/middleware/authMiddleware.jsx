import { VerifyToken } from '../utils/verifieToken'
import { ProductsLayout } from '../layout/products.layout'
import { Navigate } from 'react-router-dom'

const PrivateRoute = async () => {
    let auth = { 'token': false }
    const ver = await VerifyToken()
    console.log(ver)
    return (
        auth.token ? <ProductsLayout /> : <Navigate to={"/"} />
    )
}

export default PrivateRoute