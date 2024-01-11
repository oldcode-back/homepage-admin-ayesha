import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

//page imports
import { Login, DashboardLayout, Dashboard, Banners } from "./pages/";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "banners",
            element: <Banners />
          },
        ],
      },

    ],
  }
]);


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
