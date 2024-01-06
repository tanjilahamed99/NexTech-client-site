import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import SectionTittle from "../../Shared/SectionTittle/SectionTittle";
import teamData from '../../../public/team.json'

const OurTeam = () => {
    return (
        <div className=" ">
            <div className="bg-center bg-cover hero bg-fixed " style={{ backgroundImage: 'url(https://i.ibb.co/ymCQwfg/mujan-news.jpg)' }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div>
                    <div className="text-white pt-10">
                        <SectionTittle subTittle={'Team'} tittle={'Our Team Members'}></SectionTittle>
                    </div>
                    <div className="my-4  grid grid-cols-1 pb-20 pt-16 md:grid-cols-2  lg:grid-cols-3 items-center gap-10 bg-center bg-cover  bg-fixed">
                       {
                        
                        teamData?.map((data,idx)=><div key={idx} className=" bg-opacity-60 bg-white px-5 py-10 group   scroll-smooth  relative mx-auto shadow-sm shadow-white rounded-2xl">
                        <div className="relative  shadow-lg">
                            <img className="w-[250px] h-[250px] mx-auto  " src={data.img} alt="" />
                            <p className="text-sm font-bold absolute top-1 -right-5 bg-purple-600 p-2 rounded-xl text-white">{data.role}</p>
                        </div>
                        <div>
                            <div className="text-center">
                                <h2 className="text-2xl font-medium">{data.name}</h2>
                                <div className=" group-hover:-mt-3 group-hover:left-[30%] absolute -mt-[20000px] mx-auto flex justify-center">
                                    <nav className="">
                                        <div className="grid grid-flow-col gap-4 text-2xl mx-auto mt-5 ">
                                            <FaFacebook className="mx-auto hover:text-white hover:bg-blue-600 rounded-full text-2xl cursor-pointer"></FaFacebook>
                                            <FaInstagram className="mx-auto hover:text-white hover:bg-blue-600 rounded-full text-2xl cursor-pointer"></FaInstagram>
                                            <FaLinkedin className="mx-auto hover:text-white hover:bg-blue-600 rounded-full text-2xl cursor-pointer"></FaLinkedin>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        
                        </div>)
                        
                       }
                    </div>
                </div>
            </div>
        </div>
    );
};

// https://i.ibb.co/4JWn5WV/pngwing-com-7.png

export default OurTeam;