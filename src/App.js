import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddProduk from "./components/AddProduk";
import EditProduk from "./components/EditProduk";
import ListProduk from "./components/ListProduk";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <h1 className="text-center my-4">Aplikasi Gudang John Smith</h1>
          <Routes>
            <Route path="/" element={<ListProduk />} />
            <Route path="/add" element={<AddProduk />} />
            <Route path="/edit/:id" element={<EditProduk />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
