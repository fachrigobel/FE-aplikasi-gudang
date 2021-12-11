import { Fragment } from "react/cjs/react.development";
import { useEffect, useState } from "react";
import { getProdukIn } from "../../functions/resfulAPI";
import { Link } from "react-router-dom";

import axios from "axios";

const ListProdukIn = () => {
  const [produkIn, setProdukIn] = useState([]);

  const deleteProdukIn = async (id) => {
    await axios.delete(`http://localhost:8080/produkin/${id}`);
    setProdukIn(await getProdukIn());
  };

  useEffect(async () => {
    setProdukIn(await getProdukIn());
  }, []);

  const produkInTable = (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ID Produk</th>
          <th scope="col">Tanggal Masuk</th>
          <th scope="col">Jumlah</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {produkIn.map((p, index) => (
          <tr key={p.id}>
            <th scope="row">{++index}</th>
            <td>{p.id_produk}</td>
            <td>{p.tanggal_masuk}</td>
            <td>{p.jumlah}</td>
            <td>
              <Link
                to={`/produkIn/edit/${p.id}`}
                className="btn btn-warning btn-sm mx-1"
              >
                Edit
              </Link>
              <button
                type="submit"
                className="btn btn-danger btn-sm mx-1"
                onClick={() => deleteProdukIn(p.id)}
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
    <Fragment>
      <div className="row">
        <div className="col-6">
          <Link to="/produkin/add" className="btn btn-primary">
            Tambah Produk Masuk
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col">{produkInTable}</div>
      </div>
    </Fragment>
  );
};

export default ListProdukIn;
