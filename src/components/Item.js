import "animate.css";
const Item = ({ producto }) => {
  return (
    <>
      <article className="card animate__animated animate__fadeIn">
        <h3>{producto.nombre}</h3>
        <img src={producto.url} alt={producto.nombre} />
        <div className="article__div">
          <span>Precio </span>
          <span className="article__div__price">$ {producto.precio}</span>
          <span className="article__icon material-symbols-outlined">
            favorite
          </span>
        </div>
        <button className="card__btn">DETALLE</button>
      </article>
    </>
  );
};
export default Item;
