import { useProductos } from "../context/ProductoProvider";
import { useNavigate } from "react-router-dom";

function ProductoCard({ producto }) {
  const { deleteProducto, toggleProductoDone } = useProductos();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleProductoDone(producto.id);
  };

  return (
    <div className="bg-zinc-700 text-white rounded-md p-4">
      <header className="flex justify-between">
        <h2 className="text-sm font-bold">{producto.nombre}</h2>
        <span>{producto.done == 1 ? "️✅️" : "❌"}</span>
      </header>
      <p className="text-xs">{producto.precio}</p>
      <p className="text-xs">{producto.descripcion}</p>
      <span>{producto.createAt}</span>
      <div className="flex gap-x-1">
        <button
          className="bg-slate-300 px-2 py-1 text-black"
          onClick={() => deleteProducto(producto.id)}
        >
          Eliminar producto
        </button>
        <button
          className="bg-slate-300 px-2 py-1 text-black"
          onClick={() => navigate(`/edit/${producto.id}`)}
        >
          Editar
        </button>
        <button
          className="bg-slate-300 px-2 py-1 text-black"
          onClick={() => handleDone(producto.done)}
        >
        Confirmar Producto
        </button>
      </div>
    </div>
  );
}

export default ProductoCard;
