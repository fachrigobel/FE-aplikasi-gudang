import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProduk } from "../../functions/resfulAPI";

const AddProdukOut = () => {
  const [idProduk, setIdProduk] = useState("");
  const [jumlah, setJumlah] = useState(0);
  const [produk, setProduk] = useState([]);
  const navigate = useNavigate();
  document.title = "Tambah Produk Keluar | Aplikasi Gudang";

  useEffect(async () => {
    setProduk(await getProduk());
  }, []);

  const saveProdukOut = async (event) => {
    event.preventDefault();
    const date = new Date();

    const data = {
      id_produk: idProduk,
      tanggal_keluar: date,
      jumlah: jumlah,
    };

    await axios.post("http://localhost:8080/produkout", data);

    navigate("/produkout");
  };

  return (
    <div className="add-produk">
      <div className="row">
        <div className="col">
          <form onSubmit={saveProdukOut}>
            <div className="mb-3">
              <label htmlFor="id_produk" className="form-label">
                Produk
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(event) => setIdProduk(event.target.value)}
              >
                {produk.map((p) => (
                  <option value={p.id_produk} key={p.id_produk}>
                    {p.nama_produk}
                  </option>
                ))}
              </select>
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
              Tambah Produk Keluar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProdukOut;
