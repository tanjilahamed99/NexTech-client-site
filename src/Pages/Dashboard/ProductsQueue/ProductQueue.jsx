import { FaAlignRight, FaCheck, FaCross, FaEye, FaHome } from "react-icons/fa";
import useAllFeatured from "../../../Hooks/useAllFeatured/useAllFeatured";
import SectionTittle from "../../../Shared/SectionTittle/SectionTittle";
import { Link } from "react-router-dom";
import UseAxiosSecure from "../../../Hooks/AxiosSecure/UseAxiosSecure";
import Swal from "sweetalert2";

const ProductQueue = () => {
    const [allFeatured, refetch] = useAllFeatured()
    const axiosSecure = UseAxiosSecure()

    const handleApproved = (id) => {
        const updateData = {
            status: 'approved'
        }
        axiosSecure.patch(`/allFeaturedStatus/${id}`, updateData)
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch()
                }
            })
    }


    const handleMakeFeature = (id) => {
        const updateData = {
            status: true
        }
        axiosSecure.patch(`/allFeatured/${id}`, updateData)
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch()
                }
            })
    }


    const handleReject = (id) => {
        const updateData = {
            status: 'rejected'
        }
        axiosSecure.patch(`/allFeaturedStatus/${id}`, updateData)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount) {
                    Swal.fire({
                        icon: "success",
                        title: "rejected this products",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch()
                }
            })
    }


    return (
        <div className="w-[70%] mx-auto">
            <SectionTittle subTittle={'Products'} tittle={"All Products"}></SectionTittle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product Name</th>
                                <th>View Details</th>
                                <th>Make Featured</th>
                                <th>Accept</th>
                                <th>Reject</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1  featuredDetail*/}
                            {
                                allFeatured?.map((item, idx) => <tr key={item._id}>
                                    <th>{idx + 1}</th>
                                    <td>{item.name}</td>

                                    <td><Link to={`/featuredDetail/${item._id}`}><FaEye className=" text-xl font-bold"></FaEye></Link></td>
                                    {
                                        item.featured === true ? <td><FaCheck className=" text-xl font-bold text-green-500"></FaCheck></td>
                                            : <td onClick={() => handleMakeFeature(item._id)}><FaHome className=" text-xl font-bold"></FaHome></td>
                                    }
                                    {
                                        item.status === 'approved' ? <td>Approved</td> : <td onClick={() => handleApproved(item._id)}><FaAlignRight className=" text-xl font-bold"></FaAlignRight></td>
                                    }

                                    {
                                        item.status === 'rejected' ? <td className="text-red-500 text-bold">Rejected</td> : <td onClick={() => handleReject(item._id)}><FaCross className=" text-xl font-bold text-red-600"></FaCross></td>
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

export default ProductQueue;