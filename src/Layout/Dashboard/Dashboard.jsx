import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/userAdmin/useAdmin";
// import UseAuth from "../../Hooks/useAuth/UseAuth";

const Dashboard = () => {
    const [userRole] = useAdmin()

    console.log(userRole)

    const ulLInk = 
    <>
        {
            userRole?.admin ?
                <>
                    <li> <NavLink
                        to="/dashboard/allUsers"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-500" : ""
                        }
                    >
                        All users
                    </NavLink></li>
                    <li> <NavLink
                        to="/dashboard/Statistic"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-500" : ""
                        }
                    >
                        Statistic
                    </NavLink></li>
                    <li> <NavLink
                        to="/dashboard/manageCoupon"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-500" : ""
                        }
                    >
                        Manage Coupon
                    </NavLink></li>
                </>
                :
                userRole?.moderator ?
                    <>
                        < li > <NavLink
                            to="/dashboard/productReviewQueue"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500" : ""
                            }
                        >
                            Product Review Queue
                        </NavLink></li>
                        <li> <NavLink
                            to="/dashboard/reportedContents"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500" : ""
                            }
                        >
                            Reported Contents
                        </NavLink></li>
                    </>
                    :
                    < >
                        <li> <NavLink
                            to="/dashboard/myProfile"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500" : ""
                            }
                        >
                            My Profile
                        </NavLink></li>
                        <li> <NavLink
                            to="/dashboard/addProducts"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500" : ""
                            }
                        >
                            Add Products
                        </NavLink></li>
                        <li> <NavLink
                            to="/dashboard/myProducts"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500" : ""
                            }
                        >
                            My Products
                        </NavLink></li>
                    </>
        }


        <li> <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500" : ""
            }
        >
            Home
        </NavLink></li>
    </>

    return (
        <div className="container mx-auto gap-20 py-5 flex flex-col md:flex-row">
            <div className="bg-gray-500 h-screen p-10">
                <h2 className="text-2xl font-bold mb-10 text-white">DashBoard</h2>
                <ul className="text-bold  space-y-2 text-white">
                    {
                        ulLInk
                    }
                </ul>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;