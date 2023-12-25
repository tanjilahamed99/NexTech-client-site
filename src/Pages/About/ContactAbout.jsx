const ContactAbout = () => {
    return (
        <div className="flex gap-16 items-center my-20">
            <div className="w-1/2">
                <img className="h-[650px] w-full rounded-2xl" src="https://i.ibb.co/17HfsVx/els-fattah-9-Od-ZP5-Sy-Zpo-unsplash.jpg" alt="" />
            </div>
            <div className="w-1/2">
                <h2 className="text-5xl leading-[50px] font-bold mb-5">
                    Do you have any questions? Our team will be happy to assist.
                </h2>
                <p className="mb-32 font-medium">
                    Ask about UiCore products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help.
                </p>
                <hr className="text-black bg-black mb-5 border border-black font-bold"/>
                <div className="flex items-center gap-5">
                    <button className="btn btn-outline text-green-500 font-bold">Contact</button>
                    <span className="font-bold">Or Call +88019999999</span>
                </div>
            </div>
        </div>
    );
};

export default ContactAbout;