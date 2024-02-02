import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./private-route";
import UserLayout from "../layouts/user-layout";
import HomePage from "../pages/home-page";
import PropertiesPage from "../pages/properties-page";
import AboutPage from "../pages/about-page";
import ContactPage from "../pages/contact-page";
import ProfilPage from "../pages/profil-page";
import LoginPage from "../pages/login-page";
import RegisterPage from "../pages/register-page";
import AddNewAdvertPage from "../pages/advert/add-new-advert-page";
import EditAdvertPage from "../pages/advert/edit-advert-page";
import ForgotPasswordPage from "../pages/password/forgot-password-page";
import ChangePasswordPage from "../pages/password/change-password-page";
import ResetPasswordPage from "../pages/password/reset-password-page";
import AdvertsPage from "../pages/advert/adverts-page";
import AdvertDetailsPage from "../pages/advert/advert-details-page";
import AdminDashboardPage from "../pages/dashboard/admin-dashboard-page";
import AdminAdvertspage from "../pages/dashboard/admin-adverts-page";
import AdminAdvertEditPage from "../pages/dashboard/admin-advert-edit-page";
import AdminCategoriesPage from "../pages/dashboard/admin-categories-page";
import AdminCategoryNewPage from "../pages/dashboard/admin-category-new-page";
import AdminCategoryEditPage from "../pages/dashboard/admin-category-edit-page";
import AdminAdvertTypesPage from "../pages/dashboard/admin-advert-types-page";
import AdminAdvertTypeNewPage from "../pages/dashboard/admin-advert-type-new-page";
import AdminAdvertTypeEditPage from "../pages/dashboard/admin-advert-type-edit-page";
import AdminUsersPage from "../pages/dashboard/admin-users-page";
import AdminUsersEditPage from "../pages/dashboard/admin-users-edit-page";
import AdminTourRequestsPage from "../pages/dashboard/admin-tour-requests-page";
import AdminTourRequestDetailsPage from "../pages/dashboard/admin-tour-request-details-page";
import AdminContactMessagesListPage from "../pages/dashboard/admin-contact-messages-list-page";
import AdminContactMessageDetailPage from "../pages/dashboard/admin-contact-message-detail-page";
import AdminSettingsPage from "../pages/dashboard/admin-settings-page";
import Error401Page from "../pages/errors/error401-page";
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
        element: <ContactPage />,
      },
      {
        path: "profile",
        element: <ProfilPage />,
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
        element: <ForgotPasswordPage />,
      },
      {
        path: "change-password",
        element: <ChangePasswordPage />,
      },
      {
        path: "reset-password",
        element: <ResetPasswordPage />,
      },
      {
        path: "adverts",
        element: <AdvertsPage />,
      },
      {
        path: "advert-details",
        element: <AdvertDetailsPage />,
      },
      {
        path: "dashboard",
        children: [
          {
            index: true,
            element: (
              <PrivateRoute>
                <AdminDashboardPage />
              </PrivateRoute>
            ),
          },
          {
            path: "admin-adverts",
            element: ( 
            <PrivateRoute>
              <AdminAdvertspage />
            </PrivateRoute>
            ),
          },
          {
            path: "admin-advert-edit",
            element: (
             <PrivateRoute>
                <AdminAdvertEditPage />
            </PrivateRoute>
            ),
          },
          {
            path: "admin-categories",
            element: (
            <PrivateRoute>
              <AdminCategoriesPage />
            </PrivateRoute>
            ),
          },
          {
            path: "admin-category-new",
            element: (
            <PrivateRoute>
              <AdminCategoryNewPage />
            </PrivateRoute>
            ),
          },
          {
            path: "admin-category-edit",
            element: (
            <PrivateRoute>
              <AdminCategoryEditPage />
            </PrivateRoute>
            ),
          },
          {
            path: "admin-advert-types",
            element: (
                <PrivateRoute>
                  <AdminAdvertTypesPage />
                </PrivateRoute>
            ),
          },
          {
            path: "admin-advert-type-new",
            element: (
                <PrivateRoute>
                 <AdminAdvertTypeNewPage />
                </PrivateRoute>
            ),
          },
          {
            path: "admin-advert-type-edit",
            element: (
              <PrivateRoute>
                  <AdminAdvertTypeEditPage />
              </PrivateRoute>
            ),
          },
          {
            path: "admin-users",
            element: (
            <PrivateRoute>
              <AdminUsersPage />
            </PrivateRoute>
            ),
          },
          {
            path: "admin-users-edit",
            element: (
            <PrivateRoute>
              <AdminUsersEditPage />
            </PrivateRoute>
            ),
          },
          {
            path: "admin-tour-requests",
            element: (
            <PrivateRoute>
              <AdminTourRequestsPage />
            </PrivateRoute>
            ),
          },
          {
            path: "admin-tour-request-details",
            element: (
            <PrivateRoute>
              <AdminTourRequestDetailsPage />
            </PrivateRoute>
            ),
          },
          {
            path: "admin-contact-messages-list",
            element: (
            <PrivateRoute>
              <AdminContactMessagesListPage />
            </PrivateRoute>
            ),
          },
          {
            path: "admin-contact-message-detail",
            element: (
            <PrivateRoute>
                <AdminContactMessageDetailPage />
            </PrivateRoute>
            ),
          },
          {
            path: "admin-settings",
            element: ( 
            <PrivateRoute>
              <AdminSettingsPage />
            </PrivateRoute>
            ),
          },
        ],
      },
      {
        path: "unauthorized",
        element: <Error401Page />,
      },
      {
        path: "*",
        element: <Error404Page />,
      },
    ],
  },
]);


const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
