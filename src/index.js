import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import MenuItem from "./Components/MenuItem";
import { Menu } from './Components/Constant';

const App = ()=>{
  return (
      <>
      <Header/>
      <Outlet/>
      <Footer/>
      </>
    );
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/About",
          element: <About/>,
        },
        {
          path:"/Contact",
          element:<Contact/>
        },
        {
          path:"/MenuItem/:id",
          element:<MenuItem/>
        }
      ],
    },
  ]);
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
