import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./router/consts";
import Login from "./pages/Login";
import RootLayout from "./layout/RootLayout";
import AuthLayout from "./layout/AuthLayout";
import Categories from "./pages/Categories";
import Businesses from "./pages/Businesses";
import { UserProvider } from "./context/UserContext";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Categories />,
      },
      {
        path: ROUTES.SERVICES,
        element: <Businesses />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: ROUTES.LOGIN,
        element: <Login />,
      },
    ],
  },
]);

const App = () => {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
};

export default App;
