import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserLayout from "../layouts/user-layout";
import HomePage from "../pages/home-page";
import PropertiesPage from "../pages/properties-page";
import AboutPage from "../pages/about-page";
import ContactPage from "../pages/contact-page";
import ProfilPage from "../pages/profil-page";
import Error401Page from "../pages/errors/error401-page";
import Error404Page from "../pages/errors/error404-page";
import LoginPage from "../pages/login-page";

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
        element: <ContactPage />,
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
        path: "*",
        element: <Error404Page />,
      },

      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
