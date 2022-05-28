import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

export default function ProtectedRoutedUser(){
    const email = useSelector((state) => state.email)

    if(email === 'user'){
        return <Outlet></Outlet>
    }
    return <Navigate to={'/login'}/>
}