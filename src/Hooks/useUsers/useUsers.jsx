import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../AxiosSecure/UseAxiosSecure";
import UseAuth from "../useAuth/UseAuth";

const useUsers = () => {
    const { user } = UseAuth()
    const axiosSecure = UseAxiosSecure()

    const { data: profile = [], refetch } = useQuery({
        queryKey: ['profile'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user.email}`)
            return res.data
        }
    })
    return [profile,refetch]
};

export default useUsers;