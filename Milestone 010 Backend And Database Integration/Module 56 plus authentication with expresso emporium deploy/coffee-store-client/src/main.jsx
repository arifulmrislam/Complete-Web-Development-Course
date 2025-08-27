import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import MainLayout from './layouts/MainLayout.jsx';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import CoffeeDetails from './components/CoffeeDetails.jsx';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />, 
        children: [
            {
                index: true,
                loader: () => fetch('http://localhost:3000/coffees'),
                element: <Home />
            },
            {
                path: 'addCoffee',
                element: <AddCoffee />
            },
            {
                path: 'coffee/:id',
                element: <CoffeeDetails />
            },
            {
                path: 'updateCoffee/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
                element: <UpdateCoffee />
            },
            {
                path: 'signin',
                element: <SignIn />
            },
            {
                path: 'signup',
                element: <SignUp />
            }

        ]
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
