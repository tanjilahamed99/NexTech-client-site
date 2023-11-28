import { useQuery } from "@tanstack/react-query";
import UseAuth from "../useAuth/UseAuth";
import UseAxiosSecure from "../AxiosSecure/UseAxiosSecure";

const UseMyProducts = () => {
    const { user } = UseAuth()
    const axiosSecure = UseAxiosSecure()

    const { data: myProducts = [],refetch } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/featuredEmail/${user.email}`)
            return res.data
        }
    })

    return [myProducts,refetch]
};

export default UseMyProducts;