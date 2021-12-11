import { Fragment, useEffect, useState } from "react";
import { getProduk, getProdukIn, getProdukOut } from "../functions/resfulAPI";

const Home = () => {
  const [produk, setProduk] = useState([]);
  const [produkIn, setprodukIn] = useState([]);
  const [produkOut, setprodukOut] = useState([]);

  const jumlahProdukIn = {};
  const jumlahProdukOut = {};

  useEffect(async () => {
    document.title = "Home | Aplikasi Gudang";
    setProduk(await getProduk());
    setprodukIn(await getProdukIn());
    setprodukOut(await getProdukOut());
  }, []);

  produkIn.forEach((value) => {
    if (jumlahProdukIn[`${value.id_produk}`] == undefined) {
      jumlahProdukIn[`${value.id_produk}`] = 0;
    }
    jumlahProdukIn[`${value.id_produk}`] += parseInt(value.jumlah);
  });

  produkOut.forEach((value) => {
    if (jumlahProdukOut[`${value.id_produk}`] == undefined) {
      jumlahProdukOut[`${value.id_produk}`] = 0;
    }
    jumlahProdukOut[`${value.id_produk}`] += parseInt(value.jumlah);
  });

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
              <td>
                {jumlahProdukIn[p.id_produk] - jumlahProdukOut[p.id_produk]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Home;
