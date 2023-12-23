import axios from "axios";

const instance = axios.create({
    // baseURL: 'http://localhost:5000',
    // baseURL: 'https://nextech-server.vercel.app',
    baseURL: 'https://nextech-server.vercel.app'
})

const UseAxiosPublic = () => {
    return instance
};

export default UseAxiosPublic;