import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../AxiosPublic/UseAxiosPublic";
import { useState } from "react";

const useTrending = () => {

    const [page, setPage] = useState(0)
    const [search, setSearch] = useState()

    const axiosPublic = UseAxiosPublic()
    const { data: trending = [], refetch } = useQuery({
        queryKey: ['trending'],
        queryFn: async () => {
            const res = await axiosPublic(`/trending?page=${page}&search=${search}`)
            return res.data
        }

    })

    const handlePage = (i) => {
        setPage(i)
        refetch()
    }
    const onSubmit = (data) => {
        setSearch(data.search)
        refetch()
    }

    return [trending, refetch, handlePage, onSubmit]

};

export default useTrending;