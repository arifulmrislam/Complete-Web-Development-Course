import { AuthContext } from '../providers/AuthProvider';
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if(loading){
        return <span className='loading loading-infinity loading-lg'></span>;
    }
    
    if(user){
        return children;
    } 

    return (
        <Navigate to='/login'/>
    );
};

export default PrivateRoutes;
