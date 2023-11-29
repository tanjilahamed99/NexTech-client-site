import PropTypes from 'prop-types';
import useAdmin from '../Hooks/userAdmin/useAdmin';
import UseAuth from '../Hooks/useAuth/UseAuth';
import { Navigate } from 'react-router-dom';

const IsAdmin = ({ children }) => {
    const [useRole,isLoading] = useAdmin()
    const { user,loading } = UseAuth()

    if(loading || isLoading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if (useRole?.isAdmin && user) {
        return children
    } else {
        return <Navigate to={'/'}></Navigate>
    }

}

IsAdmin.propTypes = {
    children: PropTypes.node
}

export default IsAdmin;