import { useQuery } from "@tanstack/react-query";
import { useState } from "react"
import UseAxiosPublic from "../AxiosPublic/UseAxiosPublic";

const useTrending = () => {

    const [page, setPage] = useState(0)
    const [search, setSearch] = useState()

    const axiosSecure = UseAxiosPublic()
    const { data: trending = [], refetch } = useQuery({
        queryKey: ['trending'],
        queryFn: async () => {
            const res = await axiosSecure(`/trending?page=${page}&search=${search}`)
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