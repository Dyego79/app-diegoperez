import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import ItemDetailContainer from "./ItemDetailContainer";

const productosDB = [
  {
    id: 1,
    url: "../img/smartv.png",
    nombre: "TV SMART LG",
    categoria: "TV",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, aliquam!",
    precio: 45000,
    color: "BLACK",
  },
  {
    id: 2,
    url: "../img/smartphone.jpg",
    nombre: "SMARTPHONE SARASA",
    categoria: "SMARTPHONE",
    descripcion:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias.",
    precio: 25000,
    color: ["BLACK", "METAL-GRAY", "RADIAL BLUE"],
  },
  {
    id: 3,
    url: "../img/tablet.jpg",
    nombre: "TABLET PRO",
    categoria: "TABLET",
    descripcion:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, consectetur.",
    precio: 25000,
    color: ["RED", "METAL-GRAY", "RADIAL BLUE"],
  },
];
const ItemListContainer = ({ greeting }) => {
  const [cargando, setCargando] = useState(true);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosDB);
      }, 2000);
    });
    promesa.then((res) => {
      setCargando(false);
      setProductos(productosDB);
    });
    promesa.catch((error) => {
      console.log("Algo salió mal :(");
    });
  }, []);

  const onAdd = () => {};

  if (cargando) {
    return (
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  } else {
    return (
      <>
        <ItemList productos={productos} />
        <ItemDetailContainer />;
      </>
    );
  }
};
/* return (
    <>
      <h2>{greeting}</h2>
      <ItemCount stock={10} initial={1} onAdd={onAdd} />
      
    </>
  ); */

export default ItemListContainer;
