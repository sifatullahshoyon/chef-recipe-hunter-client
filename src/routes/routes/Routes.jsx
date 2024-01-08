import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import Services from "../../pages/Services/Services";
import Chefes from "../../pages/Chefes/Chefes";
import History from "../../pages/History/History";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/chefs')
            },
            {
                path: '/services',
                element: <Services />,
            },
            {
                path: '/chefes',
                element: <Chefes />,
            },
            {
                path: '/history',
                element: <History />,
            },
        ]
    },
]);


export default router;