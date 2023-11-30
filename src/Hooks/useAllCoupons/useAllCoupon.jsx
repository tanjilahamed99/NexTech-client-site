import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../AxiosSecure/UseAxiosSecure";

const useAllCoupon = () => {

    const axiosSecure = UseAxiosSecure()

    const { data: coupon = [],refetch } = useQuery({
        queryKey: ['coupon'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allCoupon')
            return res.data
        }
    })

    return [coupon,refetch]
};

export default useAllCoupon;