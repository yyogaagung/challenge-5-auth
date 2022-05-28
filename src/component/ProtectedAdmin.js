import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

export default function ProtectedRoutedAdmin(){
    const email = useSelector((state) => state.email)
   

    if(email === 'admin'){
        return <Outlet></Outlet>
    }
    return <Navigate to={'/login'}></Navigate>
}