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
import Document from './pages/Document.jsx'
import Vark from './pages/Vark.jsx'
import ProtectedRoutes from './utils/ProtectedRoutes.jsx'
import AuthContext from './utils/AuthContext.jsx'



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
    element: <ProtectedRoutes><Dashboard></Dashboard></ProtectedRoutes>
  },
  {
    path: '/posttest',
    element: <ProtectedRoutes><PostTest></PostTest></ProtectedRoutes>
  },
  {
    path: '/pretest',
    element: <ProtectedRoutes><PreTest></PreTest></ProtectedRoutes>
  },
  {
    path: '/vark',
    element: <ProtectedRoutes><Vark></Vark></ProtectedRoutes>
  },
  {
    path: '/document',
    element: <ProtectedRoutes><Document></Document></ProtectedRoutes>
  }
])

createRoot(document.getElementById('root')).render(
  <AuthContext>
    <RouterProvider router={router} />
  </AuthContext>
);
