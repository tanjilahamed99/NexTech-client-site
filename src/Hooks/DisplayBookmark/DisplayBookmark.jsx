import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../AxiosPublic/UseAxiosPublic";

const DisplayBookmark = () => {

    const axiosPublic = UseAxiosPublic()


    const { data: bookmark } = useQuery({
        queryKey: ['bookmark'],
        queryFn: async () => {
            const res = await axiosPublic.get('/bookmark')
            return res.data
        }
    })

    return [bookmark]
};

export default DisplayBookmark;