import { Link } from "react-router-dom";

const Navbar = () => {

    const ulLinks = <>
        <li><Link>Home</Link></li>
        <li><Link>Products</Link></li>
        <li><Link>Login</Link></li>
    </>

    const profile = <>
        <li><Link>Name</Link></li>
        <li><Link>Dashboard</Link></li>
        <li><Link>Dashboard</Link></li>
    </>

    return (
        <div className="navbar py-5 border-b-2 z-10 fixed bg-opacity-20 bg-black container px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm font-medium dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            ulLinks
                        }
                    </ul>
                </div>
                <div className="flex items-center text-white">
                    <div className="">
                        <img className=" rounded-full" src="https://i.ibb.co/g3DmKt8/logo.png" alt="" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 font-medium">
                            {
                                ulLinks
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="navbar-end">
                <div className="">
                    <div className="flex-none">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {
                                    profile
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;