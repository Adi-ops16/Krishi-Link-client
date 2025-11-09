import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://krishilinkserver.vercel.app"
})

const useAxios = () => {
    return axiosInstance
};

export default useAxios;