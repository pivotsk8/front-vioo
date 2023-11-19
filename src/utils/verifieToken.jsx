import axios from "axios"
export async function VerifyToken() {
    const token = localStorage.getItem("TOKEN")
    const { data } = await axios.interceptors.request.use((config) => {
        if (token) {
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }
            return config
        }
    })
    return data
}