import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Product from '../components/Product/Product';
import Profile from '../components/Profile/Profile';



const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/product/:id',
                element: <Product />
            }
        ]
    }
])
export default routes;
