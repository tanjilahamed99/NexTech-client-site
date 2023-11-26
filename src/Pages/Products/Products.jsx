import { useEffect, useState } from 'react';
import useTrending from '../../Hooks/useTrending/useTrending';
import SectionBanner from '../../Shared/sectionBanner/SectionBanner';
import DisplayTrending from '../Home/Trending/DisplayTrending';
import UseAxiosPublic from '../../Hooks/AxiosPublic/UseAxiosPublic';

const Products = () => {
    const [trending, , handlePage] = useTrending()
    const axiosPublic = UseAxiosPublic()
    const [totalTrending, setTotalTrending] = useState(0)

    const maxItem = 20

    useEffect(() => {
        axiosPublic('/trendingData')
            .then(res => setTotalTrending(res.data.total))
    }, [axiosPublic])

    const totalPage = Math.ceil(totalTrending / maxItem)

    let page = []

    for (let index = 0; index < totalPage; index++) {
        page.push(index)
    }



    return (
        <div>
            <SectionBanner subTittle={"Explore the latest in tech innovation. From AI-powered devices to robotics, discover futuristic gadgets shaping the future of technology"} title={"Products"}></SectionBanner>

            <div className='grid my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10'>
                {
                    trending.map(item => <DisplayTrending key={item._id} trendingData={item}></DisplayTrending>)
                }
            </div>
            <div className="join flex justify-center mb-5 gap-5">
                {
                    page?.map(item => <button onClick={() => handlePage(item)} className='btn btn-active hover:btn' key={item} >{item}</button>)
                }
            </div>
        </div>
    );
};

export default Products;