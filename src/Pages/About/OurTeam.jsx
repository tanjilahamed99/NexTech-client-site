import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import teamData from '../../../public/team.json'

const OurTeam = () => {
    return (
        <div className=" ">
            <div className="bg-center bg-cover hero bg-fixed ">
                <div>
                    <div className=" text-center pt-10 space-y-4">
                        <h2 className="text-sm font-bold text-purple-500">Team members</h2>
                        <h2 className="text-3xl font-bold"> The talented team <br />
                            behind <span className="border-b-4 border-purple-500"> our services</span></h2>
                        <h2 className="text-[#757575]"> With a passion for innovation and a dedication to excellence, <br /> we bring diverse expertise to every project we undertake.</h2>

                    </div>
                    <div className="my-4  grid grid-cols-1 md:grid-cols-2 gap-5  lg:grid-cols-4 items-center bg-center bg-cover  bg-fixed justify-center mx-auto">
                        {

                            teamData?.map((data, idx) => <div key={idx}
                                data-aos="fade-right"
                                data-aos-duration="3000"
                                className=" mt-10 w-full hover:mt-5  bg-white group  shadow-sm shadow-white rounded-2xl ">
                                <div className=" shadow-lg bg-gray-200 pt-5">
                                    <img className="w-full h-[250px] mx-auto  " src={data.img} alt="" />
                                </div>
                                <div className="bg-slate-100 px-5 py-10">
                                    <div className="text-center space-y-3">
                                        <h2 className="text-2xl font-medium">{data.name}</h2>
                                        <h2 className="text-lg font-medium text-[#757575]">{data.role}</h2>
                                        <h2 className="font-medium text-[#757575]">{data.desc}</h2>
                                        <div className="">
                                            <nav className="mt-5">
                                                <div className="flex gap-3 justify-center">
                                                    <FaFacebook
                                                        className="bg-white p-2 text-black hover:text-white hover:bg-blue-600 rounded-full text-4xl  cursor-pointer">
                                                    </FaFacebook>
                                                    <FaInstagram
                                                        className="bg-white p-2 text-black hover:text-white hover:bg-blue-600 rounded-full text-4xl  cursor-pointer">
                                                    </FaInstagram>
                                                    <FaLinkedin
                                                        className="bg-white p-2 text-black hover:text-white hover:bg-blue-600 rounded-full text-4xl  cursor-pointer">
                                                    </FaLinkedin>
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