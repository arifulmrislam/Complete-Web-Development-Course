import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './providers/AuthProvider';
import Orders from './components/Orders';
import PrivateRoutes from './routes/PrivateRoutes';
import Profile from './components/Profile';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'orders',
                element: 
                <PrivateRoutes>
                    <Orders/>
                </PrivateRoutes>
            },
            {
                path: 'profile',
                element: 
                <PrivateRoutes>
                    <Profile/>
                </PrivateRoutes>
            }
        ]
    },
]);


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </StrictMode>
);
