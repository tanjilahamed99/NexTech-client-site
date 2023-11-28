import { useEffect, useState } from "react";
import useAllFeatured from "../../../Hooks/useAllFeatured/useAllFeatured";
import SectionTittle from "../../../Shared/SectionTittle/SectionTittle";
import { Link } from "react-router-dom";
import { FaEye, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Hooks/AxiosSecure/UseAxiosSecure";

const ReportedProducts = () => {
    const [allFeatured, refetch] = useAllFeatured()
    const [reportedFeature, setReportedFeature] = useState([])
    const axiosSecure = UseAxiosSecure()
    useEffect(() => {
        const reportedContent = allFeatured?.filter(items => items.reported === true)
        setReportedFeature(reportedContent)
    }, [allFeatured])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/featured/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            })
                            refetch()
                        }
                    })
            }
        })
    }


    return (
        <div className="w-[70%] mx-auto">
            <SectionTittle subTittle={'Products'} tittle={"Reported Products"}></SectionTittle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product Name</th>
                                <th>View Details</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1  featuredDetail*/}
                            {
                                reportedFeature?.map((item, idx) => <tr key={item._id}>
                                    <th>{idx + 1}</th>
                                    <td>{item.name}</td>

                                    <td><Link to={`/featuredDetail/${item._id}`}><FaEye className=" text-xl font-bold"></FaEye></Link></td>


                                    <td onClick={() => handleDelete(item._id)}><FaTrash className=" text-xl font-bold text-red-600"></FaTrash></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ReportedProducts;