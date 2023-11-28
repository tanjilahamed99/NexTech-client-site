import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import UseAxiosPublic from "../../../Hooks/AxiosPublic/UseAxiosPublic";
import Swal from "sweetalert2";

const UpdateMyProducts = () => {
    const { id } = useParams()
    const axiosPublic = UseAxiosPublic()

    const { data: featured } = useQuery({
        queryKey: ['featured', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/featured/${id}`)
            return res.data
        }
    })

    const newDate = new Date()

    const handleSubmitO = e => {
        e.preventDefault()
        const form = e.target
        const userName = featured.userName
        const userPhoto = featured.userPhoto
        const userEmail = featured.userEmail
        const name = form.productName.value
        const desc = form.desc.value
        const tags = [form.tags.value]
        const brand = form.brand.value
        const image = form.productPhoto.value
        const upload_date = newDate
        const updateProductsData = { userEmail, userPhoto, userName, name, desc, tags, brand, image, upload_date }

        axiosPublic.patch(`/updateFeatured/${featured._id}`, updateProductsData)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "successful update your products",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            })
    }

    return (
        <div className="w-full">
            <form onSubmit={handleSubmitO} className="grid my-10 w-full grid-cols-2 items-center justify-center mx-auto gap-10">
                <div className="w-full mx-auto">
                    <h2 className="font-bold text-sm mb-2">Name</h2>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" value={featured?.userName} disabled />
                </div>
                <div className="w-full mx-auto">
                    <h2 className="font-bold text-sm mb-2">Photo</h2>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" value={featured?.userPhoto} disabled />
                </div>
                <div className="w-full mx-auto">
                    <h2 className="font-bold text-sm mb-2">Email</h2>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" disabled value={featured?.userEmail} />
                </div>
                <div className="w-full mx-auto">
                    <h2 className="font-bold text-sm mb-2">Product Name</h2>
                    <input name="productName" defaultValue={featured?.name} type="text" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div className="w-full mx-auto">
                    <h2 className="font-bold text-sm mb-2">product Photo</h2>
                    <input name="productPhoto" type="text" placeholder="Type here" className="input input-bordered w-full" defaultValue={featured?.image} required />
                </div>
                <div className="w-full mx-auto">
                    <h2 className="font-bold text-sm mb-2">Brand</h2>
                    <input name="brand" type="text" placeholder="Type here" className="input input-bordered w-full" defaultValue={featured?.brand} required />
                </div>
                <div className="w-full mx-auto">
                    <h2 className="font-bold text-sm mb-2">Tags</h2>
                    <input name="tags" type="text" placeholder="Type here" className="input input-bordered w-full" defaultValue={featured?.tags} required />
                </div>
                <div className="w-full mx-auto">
                    <h2 className="font-bold text-sm mb-2">Description</h2>
                    <textarea name="desc" className="textarea textarea-bordered w-full" placeholder="Bio" defaultValue={featured?.desc} required></textarea>
                </div>
                <input type="submit" value={'Submit'} placeholder="Type here" className="input col-span-2 btn-outline input-bordered w-full mx-auto" />
            </form>
        </div>
    );
};

export default UpdateMyProducts;