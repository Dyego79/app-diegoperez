import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productosBase from "../productos.json";

const productosDB = productosBase;

const ItemListContainer = ({ greeting }) => {
  const [cargando, setCargando] = useState(true);
  const [productos, setProductos] = useState([]);
  const { category } = useParams();
  const filter = productosDB.filter((cat) => cat.categoria == category);
  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosDB);
      }, 2000);
    });
    promesa.then((res) => {
      setCargando(false);
      if (category == undefined) {
        setProductos(productosDB);
      } else {
        setProductos(filter);
      }
    });
    setCargando(true);
    promesa.catch((error) => {
      console.log("Algo salió mal :(");
    });
  }, [category]);

  const onAdd = () => {};

  if (cargando) {
    return (
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  } else {
    return (
      <>
        <ItemList productos={productos} /> {/* <ItemDetailContainer />; */}
      </>
    );
  }
};
/* return (
    <>
      <h2>{greeting}</h2>
     
      
    </>
  ); */

export default ItemListContainer;
