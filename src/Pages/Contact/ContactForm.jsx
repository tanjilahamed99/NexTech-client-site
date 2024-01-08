
const ContactForm = () => {
    return (
        <div className="my-10 flex justify-evenly flex-col lg:flex-row items-center" >
            <div className="lg:w-1/2 ">
                <div className="w-full relative">
                    <img className="w-full h-[650px]" src="https://i.ibb.co/hMNdp0T/prithiviraj-a-np-N-Q3-Nump-M-unsplash.jpg" alt="" />
                    <div className="absolute bottom-0  text-white bg-black p-10 bg-opacity-40">
                        <h2 className="md:px-10">
                            Leading NexTech with unwavering vision is Tanjil AHamed. His leadership propels us into the future, blending innovation and passion for a technology-driven journey.
                        </h2>
                        <div className="md:px-10 mt-4">
                            <h2 className="font-extrabold">Tanjil Ahamed</h2>
                            <h2 className="text-sm font-bold">Founder & CEO</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div
                data-aos="fade-right"
                data-aos-duration="2000"
                className="bg-slate-50 lg:w-1/2 w-full md:px-20 md:py-40 p-4  space-y-8">
                <div>
                    <input type="text" placeholder="Name" className="input  border-none w-full text-bold " />
                    <hr className="w-full border border-black" />
                </div>
                <div>
                    <input type="text" placeholder="Email" className="input border-none w-full text-bold " />
                    <hr className="w-full border border-black" />
                </div>
                <div>
                    <textarea className="textarea  w-full  font-bold" placeholder="Add A Message"></textarea>
                    <hr className="w-full border border-black" />
                </div>
                <button className="btn btn-outline  w-full">Send Message</button>
            </div>
        </div>
    );
};

export default ContactForm;