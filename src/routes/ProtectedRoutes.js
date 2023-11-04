import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

    return localStorage.getItem("dummyusertoken") ? <Outlet /> : <Navigate to={"/"} />
}

export default ProtectedRoutes