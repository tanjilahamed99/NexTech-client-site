import SectionTittle from "../../../Shared/SectionTittle/SectionTittle";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Testimonial = () => {

    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free",
        slides: {
            perView: 3,
            spacing: 15,
        },
    })

    return (
        <div className="my-20">
            <SectionTittle subTittle={'Testimonials'} tittle={"Users Testimonials"}></SectionTittle>
            <h2 className="text-3xl font-semibold mt-5 ">Users Say</h2>
                
            {/* <div  ref={sliderRef} className="keen-slider my-5">
                <img className="keen-slider__slide number-slide1 w-[200px] h-[200px] md:w-[300px] md:h-[300px]" src="https://i.ibb.co/FgJjZqx/paolo-nicolello-2g-Ox-Kj594n-M-unsplash.jpg" alt="" />
                <img className="keen-slider__slide number-slide2 w-[200px] h-[200px] md:w-[300px] md:h-[300px]" src="https://i.ibb.co/Qfg12zw/edvin-johansson-rlw-E8f8an-Oc-unsplash.jpg" alt="" />
                <img className="keen-slider__slide number-slide3 w-[200px] h-[200px] md:w-[300px] md:h-[300px]" src="https://i.ibb.co/svLmhK5/leisure-beautiful-health-garden-landscape.jpg" alt="" />
                <img className="keen-slider__slide number-slide4 w-[200px] h-[200px] md:w-[300px] md:h-[300px]" src="https://i.ibb.co/XF74Hc8/jason-briscoe-e-Lf-QTm-Df-Lk-unsplash.jpg" alt="" />
                <img className="keen-slider__slide number-slide5 w-[200px] h-[200px] md:w-[300px] md:h-[300px]" src="https://i.ibb.co/JnYqKLK/tholaal-mohamed-8s-KTHe-Ggr-UM-unsplash.jpg" alt="" />
                <img className="keen-slider__slide number-slide6 w-[200px] h-[200px] md:w-[300px] md:h-[300px]" src="https://i.ibb.co/nRV2Jzm/will-truettner-7-ZZ-Fm-Vel-QY-unsplash.jpg" alt="" />
                <img className="keen-slider__slide number-slide7 w-[200px] h-[200px] md:w-[300px] md:h-[300px]" src="https://i.ibb.co/b5TJfCQ/david-hieb-n9-Qv-Thin-U0-unsplash.jpg" alt="" />
                <img className="keen-slider__slide number-slide8 w-[200px] h-[200px] md:w-[300px] md:h-[300px]" src="https://i.ibb.co/tCGXdSd/kelsey-curtis-27u-Gzl-AFw-unsplash.jpg" alt="" />
            </div> */}

        </div>
    );
};

export default Testimonial;