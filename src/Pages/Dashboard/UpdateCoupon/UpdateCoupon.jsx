import { useEffect, useState } from 'react';
import UseAxiosSecure from '../../../Hooks/AxiosSecure/UseAxiosSecure';
import { useParams } from 'react-router-dom';
import SectionTittle from '../../../Shared/SectionTittle/SectionTittle';
import Swal from 'sweetalert2';

const UpdateCoupon = () => {
    const { id } = useParams()
    const [coupon, setCoupon] = useState()

    const axiosSecure = UseAxiosSecure()

    useEffect(() => {
        axiosSecure.get(`/coupon/${id}`)
            .then(res => {
                setCoupon(res.data)
            })
    }, [axiosSecure, id])

    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target
        const couponCode = form.couponCode.value
        const expiryDate = form.expiryDate.value
        const discountAmount = form.discountAmount.value
        const desc = form.desc.value

        const updateData = { couponCode, expiryDate, desc, discountAmount }
        console.log(updateData)
        axiosSecure.patch(`/coupon/${id}`, updateData)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "coupon updated",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }

    return (
        <div className='my-20 w-full'>
            <SectionTittle subTittle={'update'} tittle={'Update Coupon'}></SectionTittle>
            <div>
                <form onSubmit={handleUpdate} className="grid grid-cols-2 gap-10 w-full mt-10">
                    <div className="mx-auto w-full">
                        <h2 className="font-bold text-sm mb-2">Coupon Code</h2>
                        <input name='couponCode' defaultValue={coupon?.couponCode} type="text" placeholder="Type here" className="input  input-bordered w-full" required />
                    </div>
                    <div className="mx-auto w-full">
                        <h2 className="font-bold text-sm mb-2">Expiry Date</h2>
                        <input name='expiryDate' defaultValue={coupon?.expiryDate} type="date" placeholder="Type here" className="input  input-bordered w-full" required />
                    </div>
                    <div className="mx-auto w-full">
                        <h2 className="font-bold text-sm mb-2">Coupon code description</h2>
                        <input defaultValue={coupon?.desc} name='desc' type="text" placeholder="Type here" className="input  input-bordered w-full" required />
                    </div>
                    <div className="mx-auto w-full">
                        <h2 className="font-bold text-sm mb-2">Discount Amount</h2>
                        <input defaultValue={coupon?.discountAmount} name='discountAmount' type="number" placeholder="Type here" className="input  input-bordered w-full" required />
                    </div>
                    <button className="btn btn-outline col-span-2" type="submit">Update</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoupon;