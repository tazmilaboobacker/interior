import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HomePage from './pages/HomePage';

import About from './pages/About';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Hero from "./pages/Hero";
import Banner from "./pages/Banner";
import Services from "./pages/Services";

import App from './App';



const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/services",
                element: <Services/>},
            {
                path: "/projects",
                element: <Projects/>},   
            {
                path: "/about",
                element: <About/>},
            {
                path: "/",
                element: <Hero/>},
        {
                    path: "/explore",
                    element: <Banner/>},
            {
                        path: "/contacts",
                        element: <Contacts/>},
        ]
    }
])
const Router = () => <RouterProvider router={router} />

export default Router;