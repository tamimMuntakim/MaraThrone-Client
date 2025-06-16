import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user, loading } = use(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loader></Loader>;
    }
    else if (user && user.email) {
        return (children);
    } else {
        return <Navigate state={location.pathname} to="/auth/login"></Navigate>
    }
};

export default PrivateRoute;