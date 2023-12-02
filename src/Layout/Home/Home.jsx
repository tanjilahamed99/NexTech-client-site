import Banner from "../../Pages/Home/Banner/Banner"
import CouponBanner from "../../Pages/Home/CouponBanner/CouponBanner";
import Featured from "../../Pages/Home/Featured/Featured";
import Trending from "../../Pages/Home/Trending/Trending";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <Trending></Trending>
            <CouponBanner></CouponBanner>
        </div>
    );
};

export default Home;