import React from 'react';
import useAuthContext from '../Hooks/useAuthContext';
import { Navigate, useLocation } from 'react-router';
import Loader from '../Components/Loaders/Loader';

const PrivateRout = ({ children }) => {
    const { user, userLoading } = useAuthContext()
    const location = useLocation()
    if (userLoading) {
        return <Loader></Loader>
    } else {
        if (!user) {
            return <Navigate state={location.pathname} to="/auth/login"></Navigate>
        } else {
            return children
        }
    }
};

export default PrivateRout;