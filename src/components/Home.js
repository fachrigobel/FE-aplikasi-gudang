import { Fragment, useEffect, useState } from "react";
import { getProduk } from "../Functions/resfulAPI";

const Home = () => {
  const [produk, setProduk] = useState([]);

  useEffect(async () => {
    document.title = "Home | Aplikasi Gudang";
    setProduk(await getProduk());
  }, []);

  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nama Produk</th>
            <th scope="col">Jumlah Stok</th>
          </tr>
        </thead>
        <tbody>
          {produk.map((p, index) => (
            <tr key={p.id_produk}>
              <th scope="row">{++index}</th>
              <td>{p.nama_produk}</td>
              <td>0</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Home;
