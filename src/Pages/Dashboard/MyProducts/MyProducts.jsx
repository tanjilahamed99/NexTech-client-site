import Swal from "sweetalert2";
import UseMyProducts from "../../../Hooks/useMyProducts/UseMyProducts";
import SectionTittle from "../../../Shared/SectionTittle/SectionTittle";
import { FaTrash, FaPen } from "react-icons/fa";
import UseAxiosSecure from "../../../Hooks/AxiosSecure/UseAxiosSecure";


const MyProducts = () => {
    const [myProducts,refetch] = UseMyProducts()
    const axiosSecure = UseAxiosSecure()


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
                                });
                                refetch()
                            }
                    })
            }
        });
    }



    return (
        <div className="w-full">
            <SectionTittle subTittle={'Product'} tittle={'My Products'}></SectionTittle>
            <div className="overflow-x-auto w-full mt-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Products Name</th>
                            <th>Vote</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myProducts.map((item, idx) => <tr key={item._id}>
                                <th>{idx + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.upvote}</td>
                                <td>{item.status}</td>
                                <td><button className="btn"><FaPen></FaPen></button></td>
                                <td><button onClick={() => handleDelete(item._id)} className="btn text-rose-600"><FaTrash></FaTrash></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;