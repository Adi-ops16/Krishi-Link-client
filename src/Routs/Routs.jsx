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
                loader: ({ params }) => fetch(`https://krishilinkserver.vercel.app/crops/${params.id}`)
            }
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