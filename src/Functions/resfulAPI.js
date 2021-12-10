import axios from "axios";

const getProduk = async () => {
  const produkList = await axios.get("http://localhost:8080/produk");
  return produkList.data;
};

export { getProduk };
