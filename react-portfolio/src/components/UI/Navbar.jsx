export default function Navbar({ links }) {
    return (
      <nav className="navbar navbar-expand-lg py-3" id="nav">
        <div className="container-fluid">
          <div className=" navbar-collapse justify-content-between">
            <ul className="navbar-nav mb-2 mb-lg-0">
              {links.map((link) => link)}
            </ul>
            <h2>Jake Provard</h2>
          </div>
        </div>
      </nav>
    );
  }