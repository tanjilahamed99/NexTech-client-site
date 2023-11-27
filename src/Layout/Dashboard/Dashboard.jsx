import { NavLink, Outlet } from "react-router-dom";
// import UseAuth from "../../Hooks/useAuth/UseAuth";

const Dashboard = () => {
    // const { user } = UseAuth()

    const ulLInk = <>
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
        <div className="container mx-auto gap-20 py-5 flex">
            <div className="bg-gray-500 h-[100vh] p-10">
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