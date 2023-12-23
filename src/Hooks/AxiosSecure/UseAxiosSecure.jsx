import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from "../useAuth/UseAuth";

const instance = axios.create({
    // baseURL: 'http://localhost:5000',
    // baseURL: 'https://nextech-server.vercel.app',
    baseURL: 'https://nextech-server.vercel.app'

})

const UseAxiosSecure = () => {

    const navigate = useNavigate()
    const { logout } = UseAuth()

    instance.interceptors.request.use(function (config) {
        const token = localStorage.getItem('token')
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        return Promise.reject(error);
    })

    instance.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status
        if (status === 401 || status === 403) {
            navigate('/login')
            await logout()
        }
        return Promise.reject(error);
    });


    return instance
};

export default UseAxiosSecure;