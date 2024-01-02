import { FaLocationArrow, FaMobile } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HomeAbout = () => {
    return (
        <div className="my-10 flex justify-evenly items-center flex-col lg:flex-row gap-5 bg-slate-100 md:p-10" >
            <div className="lg:w-1/2 w-full p-5 lg:p-0">
                <h2 className="text-4xl font-extrabold lg:mb-20 mb-10">Contact</h2>
                <div className="space-y-4">
                    <div className="flex gap-5  items-center md:text-xl font-bold">
                        <FaLocationArrow className="text-[#11d4b2] text-2xl"></FaLocationArrow>
                        <p> 25/6 Narsingdi,Bangladesh</p>
                    </div>
                    <div className="flex gap-5  items-center md:text-xl font-bold">
                        <FaMobile className="text-[#11d4b2] text-2xl"></FaMobile>
                        +880199999999
                    </div>
                    <div className="flex gap-5  items-center md:text-xl font-bold">
                        <MdEmail className="text-[#11d4b2] text-2xl"></MdEmail>
                        tanjil.ahamed0199@gmail.com 
                    </div>
                </div>
            </div>
            <div className="bg-black lg:w-1/2 w-full md:p-20 p-4 rounded-2xl space-y-8">
                <div>
                    <input type="text" placeholder="Name" className="input bg-black border-none w-full text-bold text-white" />
                    <hr className="w-full border border-white"/>
                </div>
                <div>
                    <input type="text" placeholder="Email" className="input bg-black border-none w-full text-bold text-white" />
                    <hr className="w-full border border-white"/>
                </div>
                <div>
                <textarea className="textarea bg-black w-full text-white font-bold" placeholder="Add A Message"></textarea>
                    <hr className="w-full border border-white"/>
                </div>
                <button className="btn btn-outline text-white w-full">Send Message</button>
            </div>
        </div>
    );
};

export default HomeAbout;