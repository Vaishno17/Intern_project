import './App.css'
import MainPage from './Component/MainPage';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Product from './Pages/Product';
import Trusted from './Pages/Trusted';
import Contact from './Pages/Contact';
import SignIn from './Pages/SignIn';
import Login from './Pages/Login';




function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<MainPage />,
      children:[
        {
          path:'/',
          element:<Home />,
        },
        {
          path:"/About",
          element:<About />
        },
        {
          path:"/Product",
          element:<Product />
        },
        {
          path:"/Trusted",
          element:<Trusted />
        },
        {
          path:"/Contact",
          element:<Contact />
        }
      ]
    },
    {
      path:"Signin",
      element:<SignIn />
    },
    {
      path:"Login",
      element:<Login />
    }
  ])

  return (
    <>
    {/* <MainPage /> */}
    < RouterProvider router={router} />
    </>
  )
}

export default App
