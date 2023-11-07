import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx"

import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Portfolio from "./pages/Portfolio.jsx";
import Resume from "./pages/Resume.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
            children: [
                {
                    index: true,
                    element: <AboutMe />
                },
                {
                    path: "contact",
                    element: <Contact />
                },
                {
                    path: "portfolio",
                    element: <Portfolio />
                },
                {
                    path: "resume",
                    element: <Resume />
                }
            ]
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router = {router} />
)
