import { useEffect, useState } from 'react';
import SectionBanner from '../../Shared/sectionBanner/SectionBanner';
import DisplayTrending from '../Home/Trending/DisplayTrending';
import UseAxiosPublic from '../../Hooks/AxiosPublic/UseAxiosPublic';
import { useForm } from 'react-hook-form';

const Products = () => {
    const axiosPublic = UseAxiosPublic()
    const [totalTrending, setTotalTrending] = useState(0)
    const { register, handleSubmit } = useForm()
    const [trending, setTrending] = useState([])
    const [search, setSearch] = useState()
    const [pageShow, setPageShow] = useState()


    const maxItem = 20

    useEffect(() => {
        axiosPublic('/trendingData')
            .then(res => setTotalTrending(res.data.total))
    }, [axiosPublic])


    useEffect(() => {
        axiosPublic.get(`/trending?page=${pageShow}&search=${search}`)
            .then(res => setTrending(res.data))
    }, [axiosPublic, pageShow, search])


    const totalPage = Math.ceil(totalTrending / maxItem)

    let page = []

    for (let index = 0; index < totalPage; index++) {
        page.push(index)
    }


    const onSubmit = (data) => {
        setSearch(data.search)
    }


    return (
        <div>
            <SectionBanner subTittle={"NexTech: Your portal to the future of tech. Explore, shop, and elevate your digital lifestyle with the latest innovations in gadgets and gear"} title={"Products"}></SectionBanner>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex justify-center mt-10 gap-3'>
                    <input type="text" {...register("search")} placeholder="Type here" className="input border-2 input-bordered  w-[60%]" />
                    <button className='btn btn-outline bg-blue-400 text-white ' type='submit'>Search</button>
                </form>
            </div>
            <div className='grid my-10 grid-cols-1 px-5 md:grid-cols-2 lg:grid-cols-3 items-center gap-10'>
                {
                    trending.map(item => <DisplayTrending key={item._id} trendingData={item}></DisplayTrending>)
                }
            </div>
            <div className="join flex justify-center mb-5 gap-5">
                {
                    page?.map(item => <button onClick={() => setPageShow(item)} className='btn btn-active hover:btn' key={item} >{item}</button>)
                }
            </div>
        </div>
    );
};

export default Products;