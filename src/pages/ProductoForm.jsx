import { Form, Formik } from "formik";
import { useProductos } from "../context/ProductoProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductoForm() {
  const { createProducto, getProducto, updateProducto } = useProductos();
  const [producto, setProducto] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadProducto = async () => {
      if (params.id) {
        const producto = await getProducto(params.id);
        console.log(producto);
        setProducto({
          nombre: producto.nombre,
          precio: producto.precio,
          descripcion: producto.descripcion,
        });
      }
    };
    loadProducto();
  }, []);

  return (
    <div>
      <Formik
        initialValues={producto}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            await updateProducto(params.id, values);
          } else {
            await createProducto(values);
          }
          navigate("/Productos");
          setProducto({
            nombre: "",
            precio: "",
            descripcion: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
          >
            <h1 className="text-xl font-bold uppercase text-center">
              {params.id ? "Editar Producto" : "Nuevo Producto"}
            </h1>
            <label className="block">Nombre</label>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre del producto"
              className="px-2 py-1 rounded-sm w-full"
              onChange={handleChange}
              value={values.nombre}
            />
            <label className="block">Precio</label>
            <input
              type="text"
              name="precio"
              placeholder="Ingresá el monto del producto"
              className="px-2 py-1 rounded-sm w-full"
              onChange={handleChange}
              value={values.precio}
            />
            <label className="block">Descripción</label>
            <textarea
              name="descripcion"
              rows="3"
              placeholder="Escribe una descripción"
              onChange={handleChange}
              className="px-2 py-1 rounded-sm w-full"
              value={values.descripcion}
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ProductoForm;
