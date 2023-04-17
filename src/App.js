
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import React from "react";
import Home from "./pages/Home/Home"
import AboutUs from "./pages/AboutUs/AboutUs"
import Services from "./pages/Services/Services"
import Blog from "./pages/Blog/Blog"
import Contact from "./pages/Contact/Contact"
import NotFound from "./pages/NotFound/NotFound"
import OurTeam from "./pages/OurTeam/OurTeam"
import Booking from "./pages/Booking/Booking"
import Login from "./pages/Login/Login"
import 'bootstrap/dist/css/bootstrap.min.css';



const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,

    },
    {
      path: "/aboutus",
      element: <AboutUs />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/blogs",
      element: <Blog />,
    },
    {
      path: "/ourteam",
      element: <OurTeam />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },

    {
      path: "/booking",
      element: <Booking />,
    },
    {
      path: "/login",
      element: <Login />,
    },

    {
       path:'*',
        element:<NotFound />,
    }
  ]

);

function App() {
  return (
    <>
      <RouterProvider router={router}>
      
        
        
      </RouterProvider>
    </>
  );
}

export default App;
