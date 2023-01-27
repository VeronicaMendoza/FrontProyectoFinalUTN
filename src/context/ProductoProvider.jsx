import { createContext, useContext, useState } from "react";
import {
  getProductosRequest,
  deleteProductoRequest,
  createProductoRequest,
  getProductoRequest,
  updateProductoRequest,
  toggleProductoDoneRequest,
} from "../api/producto.api";
import { ProductoContext } from "./ProductoContext";

export const useProductos = () => {
  const context = useContext(ProductoContext);
  if (context === undefined) {
    throw new Error("useProducto debe ser usado con ProductoContextProvider");
  }
  return context;
};

export const ProductoContextProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  async function loadProductos() {
    const response = await getProductosRequest();
    setProductos(response.data);
  }

  const deleteProducto = async (id) => {
    try {
      const response = await deleteProductoRequest(id);
      setProductos(productos.filter((producto) => producto.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const createProducto = async (producto) => {
    try {
      await createProductoRequest(producto);
    } catch (error) {
      console.error(error);
    }
  };

  const getProducto = async (id) => {
    try {
      const response = await getProductoRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateProducto = async (id, newFields) => {
    try {
      const response = await updateProductoRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleProductoDone = async (id) => {
    try {
      const productoFound = productos.find((producto) => producto.id === id);
      await toggleProductoDoneRequest(id, productoFound.done === 0 ? true : false);
      setProductos(
        productos.map((producto) =>
          producto.id === id ? { ...producto, done: !producto.done } : producto
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProductoContext.Provider
      value={{
        productos,
        loadProductos,
        deleteProducto,
        createProducto,
        getProducto,
        updateProducto,
        toggleProductoDone,
      }}
    >
      {children}
    </ProductoContext.Provider>
  );
};
