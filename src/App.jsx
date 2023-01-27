import { Route, Routes } from "react-router-dom";

import ProductoPage from "./pages/ProductosPage";
import ProductoForm from "./pages/ProductoForm";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import { ProductoContextProvider } from "./context/ProductoProvider";
import InicioPage from "./pages/InicioPage";

import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <Navbar />
      <div className="container mx-auto py-4 px-20">
        <ProductoContextProvider>
          <Routes>
            <Route path="/" element={<InicioPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/productos" element={<ProductoPage />} />
            <Route path="/new" element={<ProductoForm />} />
            <Route path="/edit/:id" element={<ProductoForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ProductoContextProvider>
        </div>
    </div>
  );
}

export default App;
