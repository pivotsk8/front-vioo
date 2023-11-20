import api from "../lib/axios";

export default {
    allProducts() {
        return api.get('/cart')
    }
}