import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {

    return (
        <footer className="bg-black ">
            <div className=" text-white items-center p-4 ">
                <div className="flex flex-col lg:flex-row md:items-center md:justify-between justify-start gap-3">
                    <div className="flex items-center gap-2">
                        <img className="rounded-lg" src="https://i.ibb.co/g3DmKt8/logo.png" alt="" />
                        <div className="border-r-2 pr-2">
                            <h2 className="text-2xl font-semibold">NexTech</h2>
                            <p className="font-semibold text-sm">Best Website</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center md:gap-10 gap-2 ">
                        <h2 className="link link-hover">Features</h2>
                        <h2 className="link link-hover">Term & Condition</h2>
                        <h2 className="link link-hover">Security</h2>
                        <h2 className="link link-hover">Plan</h2>
                        <h2 className="link link-hover">Design</h2>
                    </div>
                </div>
            </div>
            <hr className="text-white text-bold" />
            <footer className="footer p-10 text-white">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <div className="footer px-10 py-4 border-t text-white">
                <aside className="items-center grid-flow-col">
                    <p>NexTech<br />Providing reliable tech since 1992</p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4 text-2xl">
                        <FaFacebook></FaFacebook>
                        <FaInstagram></FaInstagram>
                        <FaLinkedin></FaLinkedin>
                        <FaTwitter></FaTwitter>
                        <FaYoutube></FaYoutube>
                    </div>
                </nav>
            </div>
            <aside className="text-center text-white py-5">
                <p>Copyright © 2023 - All right reserved by NexTech</p>
            </aside>
        </footer>
    );
};

export default Footer;