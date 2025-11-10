import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import AllCrops from "../Pages/AllCrops";
import AddCrop from "../Pages/AddCrop";
import PrivateRout from "./PrivateRout";
import CropsDetails from "../Pages/CropsDetails";
import Profile from "../Pages/Profile";
import MyInterest from "../Pages/MyInterest";
import MyPosts from "../Pages/MyPosts";
import Loader from "../Components/Loaders/Loader";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "all-crops",
                Component: AllCrops
            },
            {
                path: "add-crop",
                element:
                    <PrivateRout>
                        <AddCrop></AddCrop>
                    </PrivateRout>
            },
            {
                path: "crop-details/:id",
                element:
                    <PrivateRout>
                        <CropsDetails></CropsDetails>
                    </PrivateRout>,
            },
            {
                path: "profile",
                element:
                    <PrivateRout>
                        <Profile></Profile>
                    </PrivateRout>
            },
            {
                path: "my-interest",
                element:
                    <PrivateRout>
                        <MyInterest></MyInterest>
                    </PrivateRout>
            },
            {
                path: "my-post",
                element:
                    <PrivateRout>
                        <MyPosts></MyPosts>
                    </PrivateRout>
            },
        ]
    },
    {
        path: "auth",
        Component: AuthLayout,
        children: [
            { path: "login", Component: Login },
            { path: "registration", Component: Registration }
        ]
    }
])