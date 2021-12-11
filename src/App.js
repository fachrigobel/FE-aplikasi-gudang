import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProduk from "./components/produk/AddProduk";
import EditProduk from "./components/produk/EditProduk";
import ListProduk from "./components/produk/ListProduk";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ListProdukIn from "./components/produk_in/ListProdukIn";
import AddProdukIn from "./components/produk_in/AddProdukIn";
import EditProdukIn from "./components/produk_in/EditProdukIn";
import ListProdukOut from "./components/produk_out/ListProdukOut";
import AddProdukOut from "./components/produk_out/AddProdukOut";
import EditProdukOut from "./components/produk_out/EditProdukOut";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <h1 className="text-center mb-4 mt-5 pt-5">
          Aplikasi Gudang John Smith
        </h1>
        <hr />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produk" element={<ListProduk />} />
            <Route path="/produk/add" element={<AddProduk />} />
            <Route path="/produk/edit/:id" element={<EditProduk />} />

            <Route path="/produkin" element={<ListProdukIn />} />
            <Route path="/produkin/add" element={<AddProdukIn />} />
            <Route path="/produkin/edit/:id" element={<EditProdukIn />} />

            <Route path="/produkout" element={<ListProdukOut />} />
            <Route path="/produkout/add" element={<AddProdukOut />} />
            <Route path="/produkout/edit/:id" element={<EditProdukOut />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </Fragment>
  );
}

export default App;
