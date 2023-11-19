import AuthApi from "../api/AuthApi"

export async function VerifyToken() {
    const { data } = await AuthApi.auth()
    if (!data) {
        return false;
    }
    return data
}



