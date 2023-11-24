const Footer = () => {
    return (
        <footer className="bg-black">
            <div className=" text-white items-center p-4 ">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img className="rounded-lg" src="https://i.ibb.co/g3DmKt8/logo.png" alt="" />
                        <div className="border-r-2 pr-2">
                            <h2 className="text-2xl font-semibold">NexTech</h2>
                            <p className="font-semibold text-sm">Best Website</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <h2 className="font-semibold text-lg btn border-none border-r-4 btn-outline text-white">Features</h2>
                        <h2 className="font-semibold text-lg btn border-none border-r-4 btn-outline text-white">Term & Condition</h2>
                        <h2 className="font-semibold text-lg btn border-none border-r-4 btn-outline text-white">Security</h2>
                        <h2 className="font-semibold text-lg btn border-none border-r-4 btn-outline text-white">Plan</h2>
                        <h2 className="font-semibold text-lg btn border-none border-r-4 btn-outline text-white">Design</h2>
                    </div>
                </div>
            </div>
            <hr className="text-white text-bold" />
            <div className=" items-center p-4 ">
                <aside className="items-center grid-flow-col">
                    <p>Copyright © 2023 - All right reserved</p>
                </aside>
            </div>

            <hr className="text-white" />
            <div className=" items-center p-4 ">
                <aside className="items-center grid-flow-col">
                    <p>Copyright © 2023 - All right reserved</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;