import axios from "axios";

const getProduk = async () => {
  const produkList = await axios.get("http://localhost:8080/produk");
  return produkList.data;
};

const getProdukIn = async () => {
  const produkInList = await axios.get("http://localhost:8080/produkin");
  return produkInList.data;
};

const getProdukOut = async () => {
  const produkOutList = await axios.get("http://localhost:8080/produkout");
  console.log(produkOutList.data);
  return produkOutList.data;
};

export { getProduk, getProdukIn, getProdukOut };
