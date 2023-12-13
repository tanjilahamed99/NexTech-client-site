import useAllCoupon from '../../../Hooks/useAllCoupons/useAllCoupon';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const CouponBanner = () => {

    const [coupon] = useAllCoupon()

    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )


    return (
        <div data-aos="zoom-in" ref={sliderRef} className="keen-slider my-20">
            {
                coupon?.map(item => <div key={item._id} className="keen-slider__slide bg-cover bg-opacity-50 bg-fixed bg-center number-slide2 w-full h-[50vh] image-full hero"
                    style={{ backgroundImage: 'url(https://i.ibb.co/brfPFyZ/images-4.jpg)' }}
                >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className=" hero-content flex-col text-white text-center space-y-2">
                        <h2 className=' font-bold text-2xl '>Coupon Code : <span className='text-orange-700'>{item?.couponCode}</span></h2>
                        <p className='text-lg text'><span className='text-sm font-bold'>Expired:</span> {item?.expiryDate}</p>
                        <h4 className='text-xl flex gap-2 justify-center'><span className='text-orange-400'>{item?.discountAmount}%</span> Discount</h4>
                        <p className='text-sm'>{item?.desc}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default CouponBanner;