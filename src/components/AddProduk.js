import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduk = () => {
  const [produk, setProduk] = useState("");
  const navigate = useNavigate();

  const saveProduk = async (event) => {
    event.preventDefault();

    const data = {
      nama_produk: produk,
    };

    await axios.post("http://localhost:8080/produk", data);

    navigate("/");
  };

  return (
    <div className="add-produk">
      <div className="row">
        <div className="col">
          <form onSubmit={saveProduk}>
            <div className="mb-3">
              <label htmlFor="nama_produk" className="form-label">
                Nama Produk
              </label>
              <input
                type="text"
                className="form-control"
                id="nama_produk"
                name="nama_produk"
                placeholder="Masukkan Nama Produk"
                onChange={(event) => setProduk(event.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Tambah Produk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduk;
