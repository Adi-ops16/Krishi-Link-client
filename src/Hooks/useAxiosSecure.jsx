import axios from "axios";
import useAuthContext from "./useAuthContext";
import { useEffect } from "react";

const instance = axios.create({
    baseURL: "https://krishilinkserver.vercel.app"
})

const useAxiosSecure = () => {
    const { user } = useAuthContext()

    // set token to every api call that uses axios secure
    useEffect(() => {
        // console.log(token);
        const requestInterceptor = instance.interceptors.request.use(async (config) => {
            if (user) {
                const token = await user.getIdToken()
                config.headers.Authorization = `Bearer ${token}`
            }
            return config
        })
        return () => instance.interceptors.request.eject(requestInterceptor)
    }, [user])

    return instance
}

export default useAxiosSecure