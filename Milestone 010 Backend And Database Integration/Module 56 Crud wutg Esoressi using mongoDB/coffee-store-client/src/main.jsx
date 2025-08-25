import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'sweetalert2/dist/sweetalert2.min.css';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        loader: () => fetch('http://127.0.0.1:5000/coffee')
    },
    {
        path: "addCoffee",
        element: <AddCoffee></AddCoffee> 
    },
    {
        path: "updateCoffee",
        element: <UpdateCoffee></UpdateCoffee>
    }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
