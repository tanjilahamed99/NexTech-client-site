import { useForm } from "react-hook-form";
import SectionTittle from "../../../Shared/SectionTittle/SectionTittle";
import UseAxiosSecure from "../../../Hooks/AxiosSecure/UseAxiosSecure";
import Swal from "sweetalert2";
import useAllCoupon from "../../../Hooks/useAllCoupons/useAllCoupon";
import { FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ManageCoupon = () => {
    const { register, handleSubmit, reset } = useForm()
    const axiosSecure = UseAxiosSecure()
    const [coupon, refetch] = useAllCoupon()
    const onSubmit = (data) => {
        const newCouponData = {
            couponCode: data.couponCode,
            expiryDate: data.expiryDate,
            desc: data.desc,
            discountAmount: data.discountAmount
        }
        axiosSecure.post('/createCoupon', newCouponData)
            .then(res => {
                if (res.data) {
                    Swal.fire({
                        icon: "success",
                        title: "coupon created",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch()
                    reset()
                }
            })
    }


    const handleDeleteCoupon = (id) => {
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

                axiosSecure.delete(`/deleteCoupon/${id}`)
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
        })
    }


    return (
        <div className="w-full mt-10">
            <SectionTittle subTittle={'Coupon'} tittle={'Manage Coupon'}></SectionTittle>
            <div className="overflow-x-auto my-20">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Coupon Code</th>
                            <th>Expire Date</th>
                            <th>Discount Amount</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            coupon.map((item, idx) => <tr key={item._id}>
                                <th>{idx + 1}</th>
                                <td>{item.couponCode}</td>
                                <td>{item.expiryDate}</td>
                                <td>{item.discountAmount}</td>
                                <td><Link to={`/dashboard/updateCoupon/${item._id}`}><FaPen className="text-xl"></FaPen></Link></td>
                                <td onClick={() => handleDeleteCoupon(item._id)}><FaTrash className="text-red-600 text-xl"> </FaTrash></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            <div>
                <h2 className="font-semibold text-2xl text-center mt-20"> Create Coupon</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-10 w-full mt-10">
                    <div className="mx-auto w-full">
                        <h2 className="font-bold text-sm mb-2">Coupon Code</h2>
                        <input {...register("couponCode")} type="text" placeholder="Type here" className="input  input-bordered w-full" required />
                    </div>
                    <div className="mx-auto w-full">
                        <h2 className="font-bold text-sm mb-2">Expiry Date</h2>
                        <input {...register("expiryDate")} type="date" placeholder="Type here" className="input  input-bordered w-full" required />
                    </div>
                    <div className="mx-auto w-full">
                        <h2 className="font-bold text-sm mb-2">Coupon code description</h2>
                        <input {...register("desc")} type="text" placeholder="Type here" className="input  input-bordered w-full" required />
                    </div>
                    <div className="mx-auto w-full">
                        <h2 className="font-bold text-sm mb-2">Discount Amount</h2>
                        <input {...register("discountAmount")} type="number" placeholder="Type here" className="input  input-bordered w-full" required />
                    </div>
                    <button className="btn btn-outline col-span-2" type="submit">Create</button>
                </form>
            </div>
        </div>
    );
};

export default ManageCoupon;