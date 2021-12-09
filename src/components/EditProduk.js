import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const EditProduk = () => {
  const { id } = useParams();
  const [produk, setProduk] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getProdukDetails(id);
  }, []);

  const getProdukDetails = async (id) => {
    const response = await axios.get(`http://localhost:8080/produk/${id}`);
    return setProduk(response.data);
  };

  const updateProduk = async (event) => {
    event.preventDefault();

    const data = {
      nama_produk: produk,
    };

    await axios.patch(`http://localhost:8080/produk/${id}`, data);

    navigate("/");
  };

  return (
    <div className="edit-produk">
      <div className="row">
        <div className="col">
          <form onSubmit={updateProduk}>
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
                value={produk.nama_produk}
                onChange={(event) => setProduk(event.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update Produk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduk;
