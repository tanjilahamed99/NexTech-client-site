import SectionBanner from "../../Shared/sectionBanner/SectionBanner";
import ContactForm from "./ContactForm";
import { LuBook } from "react-icons/lu";
import { FaRocketchat } from "react-icons/fa";
import { MdOutlineAddIcCall } from "react-icons/md";
import Location from "./Location";

const Contact = () => {
    return (
        <div>
            <SectionBanner title={"Contact"} subTittle={"Connect with NexTech: Have questions or feedback? Email contact@nextech.com, call +8801996643700, or visit 25/6 Gugulia. For business inquiries: business@nextech.com. Stay updated—subscribe now!"}></SectionBanner>
            <div className="py-10 text-center">
                <h2 className="text-3xl font-bold mb-2">Connect with us</h2>
                <p className="font-medium">
                    Feel free to reach out to us using the options below, and <br /> our dedicated team will respond to your inquiries promptly.
                </p>
            </div>
            <ContactForm></ContactForm>
            <div
                data-aos="fade-right"
                data-aos-duration="1500"
                className="my-20 grid grid-cols-1 md:grid-cols-2 px-5 lg:px-0  lg:grid-cols-3 gap-10">
                <div className="flex gap-4 group cursor-pointer">
                    <LuBook className="text-6xl rounded-lg p-3 group-hover:bg-purple-600 group-hover:text-white w-[25%] bg-slate-200 text-black"></LuBook>
                    <div className="space-y-2">
                        <h2 className="text-xl font-bold group-hover:text-purple-500">Knowledge hub</h2>
                        <p>A comprehensive repository of knowledge designed to address your queries.</p>
                    </div>
                </div>
                <div className="flex gap-4 group cursor-pointer">
                    <FaRocketchat className="text-6xl rounded-lg p-3 group-hover:bg-purple-600 group-hover:text-white w-[25%] bg-slate-200 text-black"></FaRocketchat>
                    <div className="space-y-2">
                        <h2 className="text-xl font-bold group-hover:text-purple-500">Chat to Sales</h2>
                        <p>A comprehensive repository of knowledge designed to address your queries.</p>
                    </div>
                </div>
                <div className="flex gap-4 group cursor-pointer">
                    <MdOutlineAddIcCall className="text-6xl rounded-lg p-3 group-hover:bg-purple-600 group-hover:text-white w-[25%] bg-slate-200 text-black"></MdOutlineAddIcCall>
                    <div className="space-y-2">
                        <h2 className="text-xl font-bold group-hover:text-purple-500">Call Foe Assistant</h2>
                        <p>A comprehensive repository of knowledge designed to address your queries.</p>
                    </div>
                </div>
            </div>
            <Location></Location>
        </div>
    );
};

export default Contact;