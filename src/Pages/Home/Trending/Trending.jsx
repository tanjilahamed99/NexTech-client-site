import { Link } from "react-router-dom";
import useTrending from "../../../Hooks/useTrending/useTrending";
import SectionTittle from "../../../Shared/SectionTittle/SectionTittle";
import DisplayTrending from "./DisplayTrending";

const Trending = () => {
    const [trending] = useTrending()
    console.log(trending)
    return (
        <div className="my-20">
            <SectionTittle subTittle={'Trending'} tittle={'Trending Products'}></SectionTittle>
            <div className="grid grid-cols-1 my-10 md:grid-cols-2 lg:grid-cols-3 items-center gap-10">
                {
                    trending.slice(0,6).map(item => <DisplayTrending key={item._id} trendingData={item}></DisplayTrending>)
                }
            </div>
           <Link> <button className="btn btn-outline mx-auto flex mt-5">Show All Products</button></Link>
        </div>
    );
};

export default Trending;