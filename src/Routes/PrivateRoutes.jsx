import PropTypes from 'prop-types';
import UseAuth from '../Hooks/useAuth/UseAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = UseAuth()
    const location = useLocation()

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (user) {
        return children
    }
    else {
        return <Navigate state={location.pathname} replace to={'/login'}></Navigate>
    }
};

PrivateRoutes.propTypes = {
    children: PropTypes.node
};

export default PrivateRoutes;