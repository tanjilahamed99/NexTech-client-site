import { useQuery } from "@tanstack/react-query";
import UseAuth from "../useAuth/UseAuth";
import UseAxiosSecure from "../AxiosSecure/UseAxiosSecure";

const useAdmin = () => {
    const { user } = UseAuth()
    const axiosSecure = UseAxiosSecure()

    const { data: userRole } = useQuery({
        queryKey: ['admin', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/isAdmin/${user?.email}`)
            return res.data
        }
    })

    return [userRole]
};

export default useAdmin;