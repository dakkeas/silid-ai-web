import { StrictMode } from 'react'
import { createRoot, Navigate } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


// style
import './css/global.css'
// pages
import SignUp from './pages/SignUp.jsx'
import HomePage from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import Dashboard from './pages/Dashboard.jsx'
import PostTest from './pages/PostTest.jsx'
import PreTest from './pages/PreTest.jsx'
import Vark from './pages/Vark.jsx'
import ProtectedRoutes from './utils/ProtectedRoutes.jsx'

const isAuthenticated = () => {
  // store local token
  // return localStorage.getItem('authToken') !== null;
  return null
}

const PrivateRoute = ({ element }) => {
  // if authenticated, return the dashboard page, if not, navigate to login!
  return isAuthenticated() ? element : <Navigate to="/" />;
  // return element

};


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFound />
  },
  {
    path: '/signup',
    element: <SignUp />,
    errorElement: <NotFound />
  },
  {
    path: '/dashboard',
    element: <ProtectedRoutes Component={Dashboard} />,
  },
  {
    path: '/posttest',
    element: <ProtectedRoutes Component={PostTest} />,
  },
  {
    path: '/pretest',
    element: <ProtectedRoutes Component={PreTest} />,
  },
  {
    path: '/vark',
    element: <ProtectedRoutes Component={Vark} />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
