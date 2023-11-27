import { useForm } from "react-hook-form";
import SectionTittle from "../../../Shared/SectionTittle/SectionTittle";
import UseAuth from "../../../Hooks/useAuth/UseAuth";
import UseAxiosPublic from "../../../Hooks/AxiosPublic/UseAxiosPublic";
import Swal from "sweetalert2";


const AddProducts = () => {
    const { user } = UseAuth()
    const axiosPublic = UseAxiosPublic()
    const newDate = new Date()
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {

        const addProductsData = {
            userName: user.displayName,
            userPhoto: user.photoURL,
            userEmail: user.email,
            name: data.productName,
            desc: data.desc,
            tags: [data.tags],
            brand: data.brand,
            image: data.productPhoto,
            upload_date: newDate,
            status: 'pending',
            upvote: 0
        }
        axiosPublic.post('/featured', addProductsData)
            .then(res => {
                if (res.data) {
                    Swal.fire({
                        title: "successful added a products",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            })

    }


    return (
        <div className="w-full">
            <div className="my-10">
                <SectionTittle tittle={'Add Products'} subTittle={'Add'}></SectionTittle>
                <form onSubmit={handleSubmit(onSubmit)} className="grid my-10 w-full grid-cols-2 items-center justify-center mx-auto gap-10">
                    <div className="w-full mx-auto">
                        <h2 className="font-bold text-sm mb-2">Name</h2>
                        <input {...register("name")} type="text" placeholder="Type here" className="input input-bordered w-full" value={user.displayName} disabled />
                    </div>
                    <div className="w-full mx-auto">
                        <h2 className="font-bold text-sm mb-2">Photo</h2>
                        <input {...register("photo")} type="text" placeholder="Type here" className="input input-bordered w-full" value={user.photoURL} disabled />
                    </div>
                    <div className="w-full mx-auto">
                        <h2 className="font-bold text-sm mb-2">Email</h2>
                        <input {...register("email")} type="text" placeholder="Type here" className="input input-bordered w-full" disabled value={user.email} />
                    </div>
                    <div className="w-full mx-auto">
                        <h2 className="font-bold text-sm mb-2">Product Name</h2>
                        <input {...register("productName")} type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className="w-full mx-auto">
                        <h2 className="font-bold text-sm mb-2">product Photo</h2>
                        <input {...register("productPhoto")} type="text" placeholder="Type here" className="input input-bordered w-full" required/>
                    </div>
                    <div className="w-full mx-auto">
                        <h2 className="font-bold text-sm mb-2">Brand</h2>
                        <input {...register("brand")} type="text" placeholder="Type here" className="input input-bordered w-full" required/>
                    </div>
                    <div className="w-full mx-auto">
                        <h2 className="font-bold text-sm mb-2">Tags</h2>
                        <input {...register("tags")} type="text" placeholder="Type here" className="input input-bordered w-full" required/>
                    </div>
                    <div className="w-full mx-auto">
                        <h2 className="font-bold text-sm mb-2">Description</h2>
                        <textarea {...register("desc")} className="textarea textarea-bordered w-full" placeholder="Bio" required></textarea>
                    </div>
                    <input type="submit" value={'Submit'} placeholder="Type here" className="input col-span-2 btn-outline input-bordered w-full mx-auto" />
                </form>
            </div>
        </div>
    );
};

export default AddProducts;