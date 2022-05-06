import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Carrito from "./Carrito";
const Main = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos/:category" element={<ItemListContainer />} />
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
          <Route path="/Carrito" element={<ItemDetailContainer />} />
          {/* <ItemListContainer greeting="E-COMMERCE" /> */}
        </Routes>
      </main>
    </>
  );
};

export default Main;
