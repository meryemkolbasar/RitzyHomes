import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserLayout from "../layouts/user-layout";
import HomePage from "../pages/home-page";
import PropertiesPage from "../pages/properties-page";
import AboutPage from "../pages/about-page";
import ContactPage from "../pages/contact-page";
import ProfilPage from "../pages/profil-page";



const router = createBrowserRouter([
    {
        path: "/",
        element: <UserLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path:"properties",
                element: <PropertiesPage/>
            },
            {
                path:"about",
                element: <AboutPage/>
            },
            {
                path: "contact",
                element: <ContactPage/>
            },
            {
                path: "profile",
                element: <ProfilPage/>
            }

        ]
    }
]);




const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter