import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { contexto } from "./CartContext";
const formatter = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  minimumFractionDigits: 0,
});
const ItemDetail = ({ detalle }) => {
  const [contadorRecibido, setcontadorRecibido] = useState(1);
  const { addProductCompleto } = useContext(contexto);

  const onAdd = (cant) => {
    setcontadorRecibido(cant);
    addProductCompleto(
      {
        id: detalle.id,
        img: detalle.url,
        cant: cant,
        nom: detalle.nombre,
        precio: detalle.precio,
        total: detalle.precio * cant,
      },
      cant
    );
  };
  return (
    <>
      <section className="detalle animate__animated animate__fadeInUp animate__faster">
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
            <span className="detalle__info__price">
              {formatter.format(detalle.precio)}
            </span>
          </div>
          <div className="detalle__descip">
            <div className="detalle__info__cat">Detalle:</div>{" "}
            <div>
              <p>{detalle.descripcion}</p>
            </div>
          </div>
          <ItemCount stock={10} initial={1} onAdd={onAdd} detalle="detalle" />
        </div>
      </section>
    </>
  );
};

export default ItemDetail;
