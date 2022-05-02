const ItemDetail = ({ detalle }) => {
  return (
    <>
      <section className="detalle">
        <h3>NOMBRE PRODUCTO</h3>
        <img src="../img/smartv.png" alt="" />
        <div>Detalle:</div>
        <div>{detalle}</div>
        <div>Precio: $ 45.0000</div>
      </section>
    </>
  );
};

export default ItemDetail;
