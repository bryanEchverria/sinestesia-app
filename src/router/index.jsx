import RegisterPage from '../pages/register';
import AboutPage from '../pages/about';
import ContactHome from '../pages/contact'
import HomePage from '../pages/home';
import ProductPages from '../pages/productsPages';
import ProductSelected from '../pages/productSelected'
import {createBrowserRouter} from 'react-router-dom';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/about",
        element: <AboutPage />,
    },
    {
        path: "/contact",
        element: <ContactHome />,
    },


    {
        path: "/productselected",
        element: <ProductSelected/>,
    },
    
]);