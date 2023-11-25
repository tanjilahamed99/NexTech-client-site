import useTrending from '../../Hooks/useTrending/useTrending';
import SectionBanner from '../../Shared/sectionBanner/SectionBanner';
import DisplayTrending from '../Home/Trending/DisplayTrending';

const Products = () => {
    const [trending] = useTrending()
    return (
        <div>
            <SectionBanner subTittle={"Explore the latest in tech innovation. From AI-powered devices to robotics, discover futuristic gadgets shaping the future of technology"} title={"Products"}></SectionBanner>

            <div className='grid my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10'>
                {
                    trending.map(item => <DisplayTrending key={item._id} trendingData={item}></DisplayTrending>)
                }
            </div>

        </div>
    );
};

export default Products;