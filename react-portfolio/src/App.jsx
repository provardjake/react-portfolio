import "./App.css";
import {Outlet} from "react-router-dom";
import Nav from "./components/Nav";

function App() {
    return(
        <>
            <header>
                <Nav />
            </header>
            <Outlet />
            <footer>
                <div>
                    <a href="https://github.com/provardjake" className="me-5 footer-link" rel="noreferrer" target="_blank">GitHub</a>
                    <a href="https://www.linkedin.com/in/jake-provard-875335256/" className="ms-5 footer-link" rel="noreferrer" target="_blank">Linkedin</a>
                </div>
            </footer>

        </>
    );
}

export default App
