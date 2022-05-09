import { useState } from "react";
import ItemCount from "./ItemCount";
import Cart from "./Cart";
const ItemDetail = ({ detalle }) => {
  const [contadorRecibido, setcontadorRecibido] = useState(1);
  const obj = [];
  const onAdd = (cant) => {
    console.log(`ESTO VIENE DEL HIJO ${cant}`);
    setcontadorRecibido(cant);
  };
  return (
    <>
      <section className="detalle">
        <div className="detalle__img">
          <img src={detalle.url} alt="" />
        </div>
        <div className="detalle__info">
          <div>
            <h3 className="detalle__info__titulo">{detalle.nombre}</h3>
            <span className="detalle__info__cat">Categoría: </span>
            <span className="detalle__info__catNombre">
              {detalle.categoria.toUpperCase()}
            </span>
          </div>
          <div className="detalle__info__div">
            <span className="detalle__info__cat">Precio:</span>{" "}
            <span className="detalle__info__price">$ {detalle.precio}</span>
          </div>
          <div className="detalle__descip">
            <div className="detalle__info__cat">Detalle:</div>{" "}
            <div>
              <p>{detalle.descripcion}</p>
            </div>
          </div>
          <ItemCount stock={10} initial={1} onClick={onAdd} />
        </div>
      </section>
    </>
  );
};

export default ItemDetail;
