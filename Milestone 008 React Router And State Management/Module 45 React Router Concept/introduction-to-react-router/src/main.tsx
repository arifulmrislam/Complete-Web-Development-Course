import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import App from './App.tsx';
import Home from './components/Home/Home.tsx'

import Contact from './components/Contact/Contact.tsx'
import About from './components/About/about.tsx'
import Users from './components/Users/Users.tsx'
import UserDetails from './components/UserDetails/UserDetails.tsx';
import Posts from './components/Posts/Posts.tsx';
import PostDetails from './components/PostDetails/PostDetails.tsx';
import ErrorPage from './components/ErrorPage/ErrorPage.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/about',
                element: <About></About>
            },
            {
                path:'/contact',
                element: <Contact></Contact>
            },
            {
                path:'/users',
                loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
                element: <Users></Users>
            },
            {
                path:'/user/:userId',
                // params is an object. Inside that object has a property which i gave to URL. 
                loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
                element:<UserDetails></UserDetails>
            },
            {
                path:'/posts',
                loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
                element: <Posts></Posts>
            },
            {
                path:'post/:postId',
                loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
                element:<PostDetails></PostDetails>
            }
        ]
    }
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
