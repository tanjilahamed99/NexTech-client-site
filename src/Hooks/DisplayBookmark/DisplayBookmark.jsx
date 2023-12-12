import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../AxiosPublic/UseAxiosPublic";
import UseAuth from "../useAuth/UseAuth";

const DisplayBookmark = () => {

    const axiosPublic = UseAxiosPublic()

    const { user } = UseAuth()


    const { data: bookmark, refetch } = useQuery({
        queryKey: ['bookmark'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/bookmark/${user?.email}`)
            return res.data
        }
    })

    return [bookmark, refetch]
};

export default DisplayBookmark;