import axios from "axios";
import useAuthContext from "./useAuthContext";

const instance = axios.create({
    baseURL: "https://krishilinkserver.vercel.app"
})

const useAxiosSecure = () => {
    const { user } = useAuthContext()

    // set token to every api call that uses axios secure
    instance.interceptors.request.use((config) => {
        if (user) {
            config.headers.Authorization = `Bearer ${user?.accessToken}`
        }
        return config
    })

    return instance
}

export default useAxiosSecure