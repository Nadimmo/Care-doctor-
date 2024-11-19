/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user,loader} = useContext(Context)
    if(loader){
        <span className="loading loading-bars loading-lg"></span>
    }
    if(user){
        return children
    }
    return <Navigate state={location?.pathname} to={'/signin'}></Navigate>
};

export default PrivateRoute;