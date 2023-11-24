import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const UseAuth = () => {
    const use = useContext(AuthContext)
    return use
};

export default UseAuth;