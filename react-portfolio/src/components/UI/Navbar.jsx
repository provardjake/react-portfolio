export default function Nav({ links }) {
    return (
      <nav className="navbar navbar-expand-lg py-3" id="nav">
        <div className="container-fluid">
          <div className=" navbar-collapse">
            <ul className="navbar-nav mb-2 mb-lg-0">
              {links.map((link) => link)}
            </ul>
          </div>
        </div>
      </nav>
    );
  }