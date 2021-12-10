import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProduk } from "../Functions/resfulAPI";

import axios from "axios";

const ListProduk = () => {
  const [produk, setProduk] = useState([]);

  const deleteProduk = async (id) => {
    await axios.delete(`http://localhost:8080/produk/${id}`);
    setProduk(await getProduk());
  };

  useEffect(async () => {
    document.title = "List Produk | Aplikasi Gudang";
    setProduk(await getProduk());
  }, []);

  const produkTable = (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ID Produk</th>
          <th scope="col">Nama Produk</th>
          <th scope="col">Created At</th>
          <th scope="col">Updated At</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {produk.map((p, index) => (
          <tr key={p.id_produk}>
            <th scope="row">{++index}</th>
            <td>{p.id_produk}</td>
            <td>{p.nama_produk}</td>
            <td>{p.created_at}</td>
            <td>{p.updated_at}</td>
            <td>
              <Link
                to={`/produk/edit/${p.id_produk}`}
                className="btn btn-warning btn-sm mx-1"
              >
                Edit
              </Link>
              <button
                type="submit"
                className="btn btn-danger btn-sm mx-1"
                onClick={() => deleteProduk(p.id_produk)}
              >
                Hapus
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="listProduk">
      <div className="row">
        <div className="col-6">
          <Link to="/produk/add" className="btn btn-primary">
            Tambah Produk Baru
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col">{produkTable}</div>
      </div>
    </div>
  );
};

export default ListProduk;
