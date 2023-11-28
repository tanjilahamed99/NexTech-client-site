import SectionTittle from "../../../Shared/SectionTittle/SectionTittle";
import { FaReadme, FaRegUser } from "react-icons/fa";
import useAllUsers from "../../../Hooks/useAllUsers/useAllUsers";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Hooks/AxiosSecure/UseAxiosSecure";

const AllUsers = () => {

    const [allUsers, refetch] = useAllUsers()
    const axiosSecure = UseAxiosSecure()

    const handleMakeAdmin = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Make him admin",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make him Admin"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/makeAdmin/${id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "success",
                                text: "Making Admin",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        })

    }


    const handleMakeModerator = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Make him Moderator",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make him Moderator!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/makeModerator/${id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "successful",
                                text: "Making Moderator",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });

    }



    return (
        <div className="w-[70%] mx-auto">
            <SectionTittle subTittle={'Users'} tittle={"All Users"}></SectionTittle>
            <div className="my-10">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>User Name</th>
                                <th>User Email</th>
                                <th>Make Moderator</th>
                                <th>Make Admin</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1  featuredDetail*/}
                            {
                                allUsers?.map((item, idx) => <tr key={item._id}>
                                    <th>{idx + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    {
                                        item.isModerator ? <td>Moderator</td> : <td onClick={() => handleMakeModerator(item._id)}><button className="ml-9"><FaReadme className="text-2xl"></FaReadme></button></td>
                                    }
                                    {
                                        item.isAdmin ? <td>Admin</td> : <td onClick={() => handleMakeAdmin(item._id)}><button className="ml-5"><FaRegUser className="text-2xl"></FaRegUser></button></td>
                                    }
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;