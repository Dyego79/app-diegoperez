import { useNavigate } from "react-router-dom";
import "animate.css";
const formatter = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  minimumFractionDigits: 0,
});

const Item = ({ producto, i }) => {
  const navDetalle = useNavigate();
  const elegirDetalle = () => {
    navDetalle(`/producto/${producto.id}`);
  };
  return (
    <>
      <article className="card animate__animated animate__fadeIn animate__faster">
        <div className="div__H3">
          <h3>{producto.nombre}</h3>
        </div>
        <img src={producto.url} alt={producto.nombre} />
        <div className="article__div">
          <span>Precio </span>
          <span className="article__div__price">
            {formatter.format(producto.precio)}
          </span>
          <span className="article__icon material-symbols-outlined">
            favorite
          </span>
        </div>
        <button onClick={elegirDetalle} className="card__btn">
          DETALLE
        </button>
      </article>
    </>
  );
};
export default Item;
