import Banner from "../../Pages/Home/Banner/Banner"
import CouponBanner from "../../Pages/Home/CouponBanner/CouponBanner";
import Featured from "../../Pages/Home/Featured/Featured";
import HomeAbout from "../../Pages/Home/HomeAbout/HomeAbout";
import MarqueeDiscount from "../../Pages/Home/MarqueDiscount/MarqueeDiscount";
import Testimonial from "../../Pages/Home/Testimonial/Testimonial";
import Trending from "../../Pages/Home/Trending/Trending";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MarqueeDiscount></MarqueeDiscount>
            <Featured></Featured>
            <Testimonial></Testimonial>
            <Trending></Trending>
            <CouponBanner></CouponBanner>
            <HomeAbout></HomeAbout>
        </div>
    );
};

export default Home;