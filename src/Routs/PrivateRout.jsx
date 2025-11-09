import React from 'react';
import useAuthContext from '../Hooks/useAuthContext';
import { Navigate } from 'react-router';
import Loader from '../Components/Loaders/Loader';

const PrivateRout = ({ children }) => {
    const { user, userLoading } = useAuthContext()
    if (userLoading) {
        return <Loader></Loader>
    } else {
        if (!user) {
            return <Navigate to="/auth/login"></Navigate>
        } else {
            return children
        }
    }
};

export default PrivateRout;