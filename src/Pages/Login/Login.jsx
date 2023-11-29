import { useState } from "react";
import { useForm } from "react-hook-form"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/useAuth/UseAuth";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../Hooks/AxiosPublic/UseAxiosPublic";

const Login = () => {

    const [see, setSee] = useState(false)
    const { loginUser, googleLogin } = UseAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosPublic = UseAxiosPublic()

    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        loginUser(data.email, data.password)
            .then((result) => {
                const userData = {
                    name: result?.user?.displayName,
                    email: result?.user?.email,
                    status: false,
                    isAdmin: false,
                    isModerator: false
                }
                axiosPublic.post('/users', userData)
                    .then(res => {
                        if (res.data) {
                            Swal.fire({
                                icon: "success",
                                title: "account created",
                                showConfirmButton: false,
                                timer: 1500
                            })
                            navigate('/')
                        }
                    })
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })
    }


    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "successful login",
                    showConfirmButton: false,
                    timer: 1500
                })
                location.state ? navigate(location.state) : navigate('/')
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200 w-full flex" style={{ backgroundImage: 'url(https://i.ibb.co/rtZg3TP/biotech-platform-static-banner.jpg)' }}>
            <div className="w-1/2">
                <div className="text-center text-white">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className=" w-[80%] mx-auto my-5 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input {...register("email")} type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input {...register("password")} type={see ? 'text' : 'password'} placeholder="password" className="input input-bordered" required />
                            {
                                see ? <FaEye className="absolute top-[53px] right-3 " onClick={() => setSee(!see)}></FaEye> : <FaEyeSlash className="absolute top-[53px] right-3 " onClick={() => setSee(!see)}></FaEyeSlash>
                            }
                            <label className="label">
                                <a href="#" className="label-text-alt text-white link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline text-white">Login</button>
                        </div>
                        <p className=" text-white">New here <Link className="font-bold" to={'/signUp'}>Create Account</Link></p>
                    </form>
                    <button onClick={handleGoogleLogin} className="btn btn-outline text-white mt-4 w-fit ml-10">Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;