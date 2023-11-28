import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../AxiosSecure/UseAxiosSecure";

const useAllFeatured = () => {

    const axiosSecure = UseAxiosSecure()
    const { data: allFeatured,refetch } = useQuery({
        queryKey: ['allFeatured'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allFeatured')
            return res.data
        }
    })

    return [allFeatured,refetch]
};

export default useAllFeatured;