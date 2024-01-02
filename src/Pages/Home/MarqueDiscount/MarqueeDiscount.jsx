import Marquee from "react-fast-marquee";
import useAllCoupon from "../../../Hooks/useAllCoupons/useAllCoupon";


const MarqueeDiscount = () => {

    const [coupon] = useAllCoupon()

    return (
        <div className="my-10 container">
            <Marquee className="bg-blue-50 p-5">
                {
                    coupon?.map(i => <h2 className="mx-5 text-xl flex gap-2 text-black" key={i._id}>
                        <span className="text-red-500 font-bold"> { i.discountAmount}</span>
                        % Discount For user Verification || <p>Expire Date {i.expiryDate.slice(0,10)}</p>
                    </h2>)
                }
            </Marquee>
        </div>
    );
};

export default MarqueeDiscount;