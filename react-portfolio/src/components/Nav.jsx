import { Link, useLocation } from "react-router-dom";
import Navbar from "./UI/Navbar";

export default function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <Navbar
      links={[
        <Link key={1} className={currentPage !== "/" ? "nav-link text-light" : "nav-link nav-dark"} to="/">
          About Me
        </Link>,
        <Link key={2} className={currentPage !== "/portfolio" ? "nav-link text-light" : "nav-link nav-dark"} to="/portfolio">
          Portfolio
        </Link>,
        <Link key={3} className={currentPage !== "/contact" ? "nav-link text-light" : "nav-link nav-dark"} to="/contact">
            Contact
        </Link>,
        <Link key={4} className={currentPage !== "/resume" ? "nav-link text-light" : "nav-link nav-dark"} to="/resume">
            Resume
        </Link>
      ]}
    />
  );
}