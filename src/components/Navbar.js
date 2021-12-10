import { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary bg-gradient fixed-top">
        <div className="container py-1">
          <Link to={"/"} className="navbar-brand fw-bold text-light">
            Aplikasi Gudang
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-end fw-bold">
              <li className="nav-item">
                <Link to={"/"} className="nav-link text-light">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Produk
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to={"/produk"} className="dropdown-item">
                      Produk List
                    </Link>
                    <a className="dropdown-item" href="#">
                      Produk Out
                    </a>
                    <a className="dropdown-item" href="#">
                      Produk In
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
