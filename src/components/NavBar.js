import { useEffect, useState } from "react";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import { db } from "./database";
import { collection, getDocs } from "firebase/firestore";

const NavBar = () => {
  const [cat, setCat] = useState([]);
  useEffect(() => {
    const productosCollection = collection(db, "productos");
    const getItem = getDocs(productosCollection);
    getItem
      .then((resultado) => {
        const e = [];
        resultado.docs.map((doc) => {
          e.push(doc.data().categoria);
          const arrayDuplicados = new Set(e);
          const arryFiltrados = [...arrayDuplicados];
          setCat(arryFiltrados);
          return arryFiltrados;
        });
      })
      .catch((error) => {})
      .finally(() => {});
  }, []);

  return (
    <>
      <nav className="header__nav">
        {cat.map((e) => {
          return (
            <NavLink
              className="header__nav__link"
              key={e}
              to={`../productos/${e}`}
            >
              {e.toUpperCase()}
            </NavLink>
          );
        })}
      </nav>
      <CartWidget />
    </>
  );
};
export default NavBar;
