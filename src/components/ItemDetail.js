const ItemDetail = ({ detalle }) => {
  return (
    <>
      <section className="detalle">
        <div>
          <img src="../img/smartv.png" alt="" />
        </div>
        <div>
          <h3 className="detalle__titulo">{detalle.nombre}</h3>
          <div>Categoría: {detalle.categoria.toUpperCase()}</div>
          <div>Detalle: {detalle.descripcion}</div>
          <div></div>
          <div>Precio: $ 45.0000</div>
        </div>
      </section>
    </>
  );
};

export default ItemDetail;
