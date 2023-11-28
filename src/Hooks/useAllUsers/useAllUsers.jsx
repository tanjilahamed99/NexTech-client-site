import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../AxiosSecure/UseAxiosSecure";

const useAllUsers = () => {
    const axiosSecure = UseAxiosSecure()

    const { data: allUsers,refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    return [allUsers,refetch]
};

export default useAllUsers;