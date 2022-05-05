import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailConatiner from "./ItemDetailConatiner";
import Carrito from "./Carrito";
const Main = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/productos/smartphones"
            element={<ItemDetailConatiner />}
          />
          <Route path="/Carrito" element={<Carrito />} />
          {/* <ItemListContainer greeting="E-COMMERCE" /> */}
        </Routes>
      </main>
    </>
  );
};

export default Main;
