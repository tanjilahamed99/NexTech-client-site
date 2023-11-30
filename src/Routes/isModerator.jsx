import PropTypes from 'prop-types';
import useAdmin from '../Hooks/userAdmin/useAdmin';
import UseAuth from '../Hooks/useAuth/UseAuth';
import { Navigate } from 'react-router-dom';

const IsModerator = ({ children }) => {
    const [useRole, isLoading] = useAdmin()
    const { user, loading } = UseAuth()
    console.log(useRole)

    if (loading || isLoading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if (useRole?.moderator && user) {
        return children
    }
    else {
        return <Navigate to={'/'}></Navigate>
    }

}

IsModerator.propTypes = {
    children: PropTypes.node
}

export default IsModerator