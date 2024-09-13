import {useContext, useEffect, useState} from 'react'
import { Navigate } from 'react-router-dom' 
import { Context } from './AuthContext'

import Loading from '../components/Loading'
const ProtectedRoutes = ({ children }) => {

    const {user} = useContext(Context)

    if (!user) { return <Navigate to="/"></Navigate>
    } else {
        return children
    }
}



export default ProtectedRoutes