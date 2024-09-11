import { Navigate } from 'react-router-dom'



const ProtectedRoutes = ({ Component }) => {
    // const user = null
    const user = true
    return user ? <Component /> : <Navigate to="/"></Navigate>
}



export default ProtectedRoutes