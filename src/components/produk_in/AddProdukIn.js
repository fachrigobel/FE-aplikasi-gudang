import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProduk } from "../../functions/resfulAPI";

const AddProdukIn = () => {
  const [idProduk, setIdProduk] = useState("");
  const [jumlah, setJumlah] = useState(0);
  const [produk, setProduk] = useState([]);
  const navigate = useNavigate();
  document.title = "Tambah Produk Masuk | Aplikasi Gudang";

  useEffect(async () => {
    setProduk(await getProduk());
  }, []);

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
              Tambah Produk Masuk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProdukIn;
