import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="container mx-auto">
            <img className="mx-auto w-[600px] mt-20" src="https://i.ibb.co/ZT4ZJr9/download.jpg" alt="" />
        <Link to={'/'}><button className="btn-outline btn mx-auto flex"><FaArrowAltCircleLeft></FaArrowAltCircleLeft>Back ot Home</button></Link>
        </div>
    );
};

export default ErrorPage;