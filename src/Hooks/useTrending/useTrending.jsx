import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../AxiosPublic/UseAxiosPublic";
import { useState } from "react";

const useTrending = () => {

    const [page, setPage] = useState(0)



    const axiosPublic = UseAxiosPublic()
    const { data: trending = [], refetch } = useQuery({
        queryKey: ['trending'],
        queryFn: async () => {
            const res = await axiosPublic(`/trending?page=${page}`)
            return res.data
        }

    })

    const handlePage = (i) => {
        setPage(i)
        refetch()
    }

    return [trending, refetch, handlePage]

};

export default useTrending;