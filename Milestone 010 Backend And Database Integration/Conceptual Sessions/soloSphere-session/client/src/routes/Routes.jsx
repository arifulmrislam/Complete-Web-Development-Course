import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home';
import Login from '../pages/Authentication/Login';
import Register from '../pages/Authentication/Register';

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children:[
            {
            index: true,
            element: <Home></Home>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path: '/registration',
            element: <Register></Register>
        }
    ]
    },
]);

export default Routes;

