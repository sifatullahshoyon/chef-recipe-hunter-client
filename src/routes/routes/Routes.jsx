import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import Services from "../../pages/Services/Services";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/services',
                element: <Services />,
            },
        ]
    },
]);


export default router;