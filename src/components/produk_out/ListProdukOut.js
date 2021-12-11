import { Fragment } from "react/cjs/react.development";
import { useEffect, useState } from "react";
import { getProdukOut } from "../../functions/resfulAPI";
import { Link } from "react-router-dom";

const ListProdukOut = () => {
  const [produkOut, setProdukOut] = useState([]);

  const deleteProdukOut = (id) => {};

  useEffect(async () => {
    setProdukOut(await getProdukOut());
  }, []);

  const produkOutTable = (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ID Produk</th>
          <th scope="col">Tanggal Keluar</th>
          <th scope="col">Jumlah</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {produkOut.map((p, index) => (
          <tr key={p.id_produk}>
            <th scope="row">{++index}</th>
            <td>{p.id_produk}</td>
            <td>{p.tanggal_keluar}</td>
            <td>{p.jumlah}</td>
            <td>
              <Link
                to={`/produkIn/edit/${p.id_produk}`}
                className="btn btn-warning btn-sm mx-1"
              >
                Edit
              </Link>
              <button
                type="submit"
                className="btn btn-danger btn-sm mx-1"
                onClick={() => deleteProdukOut(p.id_produk)}
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
          <Link to="/produkout/add" className="btn btn-primary">
            Tambah Produk Keluar
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col">{produkOutTable}</div>
      </div>
    </Fragment>
  );
};

export default ListProdukOut;
