import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProdukIn = () => {
  const [idProduk, setIdProduk] = useState("");
  const [jumlah, setJumlah] = useState(0);
  const navigate = useNavigate();
  document.title = "Tambah Produk Masuk | Aplikasi Gudang";

  const saveProdukIn = async (event) => {
    event.preventDefault();
    const date = new Date();

    const data = {
      id_produk: idProduk,
      tanggal_masuk: date,
      jumlah: jumlah,
    };

    await axios.post("http://localhost:8080/produkin", data);

    navigate("/produkin");
  };

  return (
    <div className="add-produk">
      <div className="row">
        <div className="col">
          <form onSubmit={saveProdukIn}>
            <div className="mb-3">
              <label htmlFor="id_produk" className="form-label">
                ID Produk
              </label>
              <input
                type="text"
                className="form-control"
                id="id_produk"
                name="id_produk"
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
                placeholder="Masukkan Jumlah"
                onChange={(event) => setJumlah(event.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Tambah Produk Masuk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProdukIn;
