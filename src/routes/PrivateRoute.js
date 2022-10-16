import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    console.log(user);
    if(loading){
        return <div>Loading</div>
    }
    if(user && user.email){
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;