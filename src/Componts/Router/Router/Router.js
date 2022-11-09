import { createBrowserRouter } from "react-router-dom";
import Home from "../../Page/Home/Home/Home";
import Root from "../../Root/Root";
import Login from "../../Page/Login/Login"
import Service from "../../Page/Service/Service"
import SingUp from "../../Page/SingUP/SingUp";
import Dasbord from "../../Page/Dasbord/Dasbord";
import SingleService from "../../Page/SingleService/SingleService";
import Blog from "../../Page/Blog/Blog";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import Review from "../../Page/Review/Review";
import UpdateReview from "../../Page/Blog/UpdateReview/UpdateReview";
import Error from "../../Page/Error/Error";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Error></Error>,
       children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/service',
            element:<Service></Service>
        },
        {
            path:'/singup',
            element:<SingUp></SingUp>
        },
        {
            path:'/dasbord',
            element:<PrivateRouter><Dasbord></Dasbord></PrivateRouter>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/review',
            element:<PrivateRouter><Review></Review></PrivateRouter> 
        },
        {
            path:'/singleService/:id',
            element:<SingleService></SingleService>
        },
        {
            path:'/update/:id',
            element:<PrivateRouter><UpdateReview></UpdateReview></PrivateRouter> 
        },
        {
            path:'/login',
            element:<Login></Login>
        }
       ]
    }

])