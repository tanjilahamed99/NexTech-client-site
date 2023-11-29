import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from '../AxiosSecure/UseAxiosSecure';

const useStatistic = () => {
    const axiosSecure = UseAxiosSecure()
    const { data: statistic = [] } = useQuery({
        queryKey: ['statistic'],
        queryFn: async () => {
            const res = await axiosSecure.get('/statistic')
            return res.data
        }
    })
    return [statistic]
};

export default useStatistic;