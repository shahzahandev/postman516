import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Registration from "./components/page/Registration";
import Login from "./components/page/Login";
import firebaseConfig from "./components/page/firebase/firebaseConfig";
import ForgotPassword from "./components/page/ForgotPassword";
import Home from "./components/page/Home";
import Inner from "./components/page/Inner";
import Message from "./components/page/UserInfo/Message/Message";
import Setting from "./components/page/UserInfo/Setting/Setting";


function App() {
  const router = createBrowserRouter([
     {
      path: "/",
      element: <Home></Home>,
    },
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
    {
      path: "/inner",
      element: <Inner/>
    },
    {
      path: "/goback",
      element: <Login></Login>
    },
      {
      path: "/msg",
      element: <Message></Message>
    },
    {
      path: "/homepage",
      element: <Inner></Inner>
    },
      {
      path: "/set",
      element:<Setting></Setting>
    }
    
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
