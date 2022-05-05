import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";

const productoDetail =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, accusantium.";
const ItemDetailContainer = () => {
  const [cargando, setCargando] = useState(true);
  const [detalle, setdetalle] = useState("");

  useEffect(() => {
    const getItem = new Promise((res, rej) => {
      setTimeout(() => {
        res(productoDetail);
      }, 2000);
    });
    getItem.then((res) => {
      setCargando(false);
      setdetalle(productoDetail);
    });
    getItem.catch((error) => {
      console.log("Algo salió mal :(");
    });
  }, []);

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
    return <ItemDetail detalle={detalle} />;
  }
};
export default ItemDetailContainer;
