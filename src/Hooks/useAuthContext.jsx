import React, { use } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useAuthContext = () => {
    const authInfo = use(AuthContext)
    return authInfo;
};

export default useAuthContext;