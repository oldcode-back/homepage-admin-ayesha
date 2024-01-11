import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

//page imports
import { Login } from "./pages/";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Login />,
      }
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
