import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import Services from "../../pages/Services/Services";
import Chefes from "../../pages/Chefes/Chefes";
import History from "../../pages/History/History";
import AccountCreate from "../../layout/AccountCreate";
import Registration from "../../components/shared/Registration/Registration";
import Login from "../../components/shared/Login/Login";
import SingleChefData from "../../pages/SingleChefData/SingleChefData";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


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
                path: '/chefes/:id',
                element: <PrivateRoute><SingleChefData /></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
            },
            {
                path: '/history',
                element: <History />,
            },
        ]
    },
    {
        path: '/',
        element: <AccountCreate />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/registration',
                element: <Registration />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
]);


export default router;