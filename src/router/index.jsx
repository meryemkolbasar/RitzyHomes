import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserLayout from "../layouts/user-layout";
import HomePage from "../pages/home-page";
import PropertiesPage from "../pages/properties-page";
import AboutPage from "../pages/about-page";
import ContactPage from "../pages/contact-page";
import ProfilPage from "../pages/profil-page";
import Error401Page from "../pages/errors/error401-page";
import LoginPage from "../pages/login-page";
import RegisterPage from "../pages/register-page";
import AddNewAdvertPage from "../pages/advert/add-new-advert-page";
import EditAdvertPage from "../pages/advert/edit-advert-page";
import ForgotPasswordPage from "../pages/password/forgot-password-page";
import ChangePasswordPage from "../pages/password/change-password-page";
import ResetPasswordPage from '../pages/password/reset-password-page';
import AdvertsPage from "../pages/advert/adverts-page";
import AdvertDetailsPage from "../pages/advert/advert-details-page";
import Error404Page from "../pages/errors/error404-page";


const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "properties",
        element: <PropertiesPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage/>
      },
      {
        path: "profile",
        element: <ProfilPage />,
      },
      {
        path: "unauthorized",
        element: <Error401Page />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "new-advert",
        element: <AddNewAdvertPage />,
      },
      {
        path: "edit-advert",
        element: <EditAdvertPage />,
      },
      {
        path: "forgot-password",
        element: <ForgotPasswordPage/>,
      },
      {
        path: "change-password",
        element: <ChangePasswordPage/>,
      },
      {
        path: "reset-password",
        element: <ResetPasswordPage/>,
      } ,
      {
        path: "adverts",
        element: <AdvertsPage/>,
      },
      {
        path: "advert-details",
        element: <AdvertDetailsPage/>,
      },
      {
        path: "*",
        element: <Error404Page />,
      }                 
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
