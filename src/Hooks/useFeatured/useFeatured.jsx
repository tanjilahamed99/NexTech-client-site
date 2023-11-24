import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../AxiosPublic/UseAxiosPublic";

const useFeatured = () => {

    const axiosPublic = UseAxiosPublic()

    const { data: featuredData = [],refetch } = useQuery({
        queryKey: ['featured'],
        queryFn: async () => {
            const res = await axiosPublic('/featured')
            return res.data
        }
    })

    return [featuredData,refetch]
};

export default useFeatured;