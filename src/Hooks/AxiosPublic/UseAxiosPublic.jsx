import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000'
})

const UseAxiosPublic = () => {
    return instance
};

export default UseAxiosPublic;