import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import UseAuth from "../../../Hooks/useAuth/UseAuth";
import { Link } from "react-router-dom";
import useUsers from "../../../Hooks/useUsers/useUsers";
import { GoCheckCircleFill } from "react-icons/go";
const MyProfile = () => {
    const { user } = UseAuth()
    const [profile] = useUsers()
    return (
        <div className="mx-auto text-center px-3">
            <div className="avatar mx-auto flex">
                <div className="w-40 rounded-full mx-auto">
                    <img src={user.photoURL} />
                </div>
            </div>
            <div className="flex items-center gap-3 justify-center">
                <h2 className="text-3xl font-bold  my-2">{user.displayName}</h2>
                {
                    profile[0]?.status && <GoCheckCircleFill className="text-3xl text-blue-600"></GoCheckCircleFill>
                }
            </div>
            <h2 className="text-3xl font-bold mb-3 mx-auto">{user.email}</h2>
            <p className="xl:mx-64 font-bold text-sm">Born and raised in a small town, Alex developed a deep sense of integrity from a young age. Friends and family often describe Alex as the straight shooter who never shies away from telling the truth, even when it is uncomfortable. It is this very quality that has earned Alex the respect and admiration of those fortunate enough to know them</p>
            {
                profile[0]?.status ? <button className="btn btn-outline mt-4">SubsCribed</button> : <Link to={'/dashboard/payment'}>
                    <button className="btn btn-outline mt-4">Membership Subscribe</button>
                </Link>  

            }
            <div className="flex gap-5 text-3xl mx-auto justify-center mt-5">
                <FaTwitter></FaTwitter>
                <FaFacebook></FaFacebook>
                <FaInstagram></FaInstagram>
            </div>
        </div>
    );
};

export default MyProfile;