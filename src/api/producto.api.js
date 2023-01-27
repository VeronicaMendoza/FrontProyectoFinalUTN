import axios from "axios";

export const getProductosRequest = async () =>
  await axios.get("https://backproyectofinalutn-production.up.railway.app/productos");

export const createProductoRequest = async (producto) =>
  await axios.post("https://backproyectofinalutn-production.up.railway.app/productos", producto);

export const deleteProductoRequest = async (id) =>
  await axios.delete(`https://backproyectofinalutn-production.up.railway.app/productos/${id}`);

export const getProductoRequest = async (id) =>
  await axios.get(`https://backproyectofinalutn-production.up.railway.app/productos/${id}`);

export const updateProductoRequest = async (id, newFields) =>
  await axios.put(`https://backproyectofinalutn-production.up.railway.app/productos/${id}`, newFields);

export const toggleProductoDoneRequest = async (id, done) =>
  await axios.put(`https://backproyectofinalutn-production.up.railway.app/productos/${id}`, {
    done,
  });
