const Navbar = () => {
  return (
    <header clasName="main_menu home_menu">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand" href="index.html">
                {" "}
                <img src="https://annmaryvinod.github.io/swasthi-one/images/fav4.png" alt="logo"/>{" "}
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse main-menu-item justify-content-center"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav align-items-center">
                  <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="finddoc.html">
                      Doctors
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="blog.html"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="services.html">
                        services
                      </a>
                      <a className="dropdown-item" href="dep.html">
                        depertments
                      </a>
                      <a className="dropdown-item" href="elements.html">
                        Elements
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="blog.html"
                      id="navbarDropdown_1"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      blog
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown_1"
                    >
                      <a className="dropdown-item" href="blog.html">
                        blog
                      </a>
                      <a className="dropdown-item" href="single-blog.html">
                        Single blog
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <a
                className="btn_2 d-none d-lg-block"
                style={{marginRight : "5px"}}
                href="register.html"
              >
                Register
              </a>
              <a className="btn_2 d-none d-lg-block" href="login.html">
                Login
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
