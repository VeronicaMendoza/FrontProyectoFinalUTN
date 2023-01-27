import React from 'react'
import { useEffect } from "react";
import ProductoCard from "../components/ProductoCard";
import { useProductos } from "../context/ProductoProvider";

function Productos() {
    const { productos, loadProductos } = useProductos();

    useEffect(() => {
        loadProductos();
    }, []);

    function renderMain() {
        if (productos.length === 0) return <h1 className="text-white font-bold">No hay productos creados</h1>;
        return productos.map((producto) => <ProductoCard producto={producto} key={producto.id} />);
    }
    return (

        
            <div>
            <h1 className="text-5xl text-white font-bold text-center">Productos</h1>
            <div className="grid grid-cols-3 gap-2">{renderMain()}</div>
            </div>
        
    )
}
export default Productos