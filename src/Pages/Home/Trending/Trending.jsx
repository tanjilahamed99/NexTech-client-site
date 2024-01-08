import { Link } from "react-router-dom";
import useTrending from "../../../Hooks/useTrending/useTrending";
import DisplayTrending from "./DisplayTrending";
import SectionBanner from "../../../Shared/sectionBanner/SectionBanner";

const Trending = () => {
    const [trending] = useTrending()
    return (
        <div className="my-20">
            < SectionBanner subTittle={"Discover top tech trends: 4K TV, gaming keyboard, fast SSD, wireless charging, smart coffee maker, fitness tracker, and more!"} title={"Trending Products"} ></SectionBanner >
            <div data-aos="fade-right"
                data-aos-duration="1500"
            >
                <div className="grid grid-cols-1 mx-5 my-10 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 xl:gap-10">
                    {
                        trending.slice(0, 6).map(item => <DisplayTrending key={item._id} trendingData={item}></DisplayTrending>)
                    }
                </div>
            </div>
            <Link to={'/products'}> <button className="btn btn-outline mx-auto flex mt-5">Show All Products</button></Link>
        </div >
    );
};

export default Trending;