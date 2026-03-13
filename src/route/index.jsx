import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Services from "../pages/Services";
import Blogs from "../pages/Blogs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/> ,
        children : [
            {
                path: "",
                element : <Home/> 
            },
            {
                path : "About-Me",
                element :<About/>
            },
            {
                path: "Skills",
                element : <Skills/>
            },
            {
                path: "Projects",
                element : <Projects/>
            },
            {
                path : "Services",
                element: <Services/>
            },
            {
                path : "Blogs",
                element: <Blogs/>
            }
        ]
    }
])

export default router