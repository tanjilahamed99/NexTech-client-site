import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../AxiosPublic/UseAxiosPublic";

const useTrending = () => {
    const axiosPublic = UseAxiosPublic()
    const { data: trending = [], refetch } = useQuery({
        queryKey: ['trending'],
        queryFn: async () => {
            const res = await axiosPublic('/trending')
            return res.data
        }
    })
    return [trending, refetch]
};

export default useTrending;