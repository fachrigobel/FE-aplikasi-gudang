/* eslint-disable react-hooks/exhaustive-deps */

import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const EditProdukOut = () => {
  const { id } = useParams();
  const [idProduk, setIdProduk] = useState({ idProduk: "" });
  const [jumlah, setJumlah] = useState({ jumlah: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    getProdukOutDetails(id);
  }, []);

  const getProdukOutDetails = async (id) => {
    const response = await axios.get(`http://localhost:8080/produkout/${id}`);
    document.title = `ID Produk ${response.data.id_produk} | Aplikasi Gudang`;
    setIdProduk(response.data.id_produk);
    setJumlah(response.data.jumlah);
  };

  const updateProdukOut = async (event) => {
    event.preventDefault();

    const data = {
      id_produk: idProduk,
      jumlah: jumlah,
    };

    await axios.patch(`http://localhost:8080/produkout/${id}`, data);

    navigate("/produkout");
  };

  return (
    <div className="edit-produk">
      <div className="row">
        <div className="col">
          <form onSubmit={updateProdukOut}>
            <div className="mb-3">
              <label htmlFor="id_produk" className="form-label">
                ID Produk
              </label>
              <input
                type="text"
                className="form-control"
                id="id_produk"
                name="id_produk"
                value={idProduk}
                placeholder="Masukkan ID Produk"
                onChange={(event) => setIdProduk(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="jumlah" className="form-label">
                Jumlah
              </label>
              <input
                type="number"
                className="form-control"
                id="jumlah"
                name="jumlah"
                value={jumlah}
                placeholder="Masukkan Jumlah"
                onChange={(event) => setJumlah(event.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update Produk Keluar
            </button>
            <Link to={"/produkout"} className="btn btn-danger ms-2">
              Batal
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProdukOut;
