import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productosBase from "../productos.json";

const productoDetail = productosBase;

const ItemDetailContainer = () => {
  const [cargando, setCargando] = useState(true);
  const [detalle, setdetalle] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    //console.log(id);
    const itemSeleccionado = productoDetail.filter((detalle) => {
      return detalle.id == id;
    })[0];
    //console.log(itemSeleccionado);
    const getItem = new Promise((res, rej) => {
      setTimeout(() => {
        res(productoDetail);
      }, 500);
    });
    getItem.then((res) => {
      setCargando(false);
      setdetalle(itemSeleccionado);
    });
    getItem.catch((error) => {
      console.log("Algo salió mal :(");
    });
  }, [detalle]);

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
        <ItemDetail detalle={detalle} />
      </>
    );
  }
};
export default ItemDetailContainer;
