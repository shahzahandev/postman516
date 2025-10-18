import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Registration from "./components/page/Registration";
import Login from "./components/page/Login";
import firebaseConfig from "./components/page/firebase/firebaseConfig";
import ForgotPassword from "./components/page/ForgotPassword";


function App() {

const router = createBrowserRouter([
  {
    path: "/registration",
    element: <Registration></Registration>,
  },
   {
    path: "/login",
    element: <Login></Login>
  },
   {
    path: "/forgot",
    element: <ForgotPassword></ForgotPassword>
  },
]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
