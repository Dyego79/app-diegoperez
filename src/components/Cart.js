import { contexto } from "./CartContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "./database";
import { collection, addDoc } from "firebase/firestore";
import "animate.css";
const { DateTime } = require("luxon");

const formatter = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  minimumFractionDigits: 0,
});
const Cart = () => {
  const [fade, setFade] = useState(false);
  const [idCompra, setIdCompra] = useState("");
  const [check, setChek] = useState(false);

  const {
    productquantity,
    carrito,
    eliminarProducto,
    vaciarCarrito,
    totalCarrito,
    order,
    agregarOrden,
  } = useContext(contexto);

  const comprar = () => {
    const ordenesCollection = collection(db, "ordenes");

    const orden = {
      buyer: {
        name: "Diego",
        phone: "11-5555-5555",
        email: "diego@diego.com",
      },
      items: carrito,
      date: DateTime.now().toLocaleString(DateTime.DATE_MED),
      total: totalCarrito,
    };

    const consulta = addDoc(ordenesCollection, orden);

    consulta
      .then((resultado) => {
        const id = resultado.id;
        setIdCompra(id);
        agregarOrden(orden, id);
        setChek(true);
        vaciarCarrito();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const elim = (id) => {
    eliminarProducto(id.target);
  };
  const fad = () => {
    setFade(!fade);
    vaciarCarrito();
  };

  return (
    <>
      {check ? (
        <section className="checkout  animate__animated animate__fadeIn animate__faster">
          <div className="checkout__icon">
            <span className="material-symbols-outlined  animate__animated animate__fadeInUp animate__delay-0">
              check
            </span>
          </div>
          <h2>¡Gracias por tu compra {order.buyer.name.toUpperCase()}!</h2>
          <div className="contenedorDatos">
            <div className="contenedorDatos__datos">
              <h3>Datos de Contacto: </h3>
            </div>
            <div className="contenedorDatos__phone">
              Tel: {order.buyer.phone}
            </div>
            <div className="contenedorDatos__email">
              e-mail: {order.buyer.email}
            </div>
            <div className="contenedorDatos__email">Fecha: {order.date}</div>
          </div>
          <div className="contenedor__id">
            <div className="contenedor__id__id">Nº PEDIDO:</div>
            <div className="contenedor__id__numero">{idCompra}</div>
          </div>
          <div className="checkout__titulos">
            <div className="checkout__titulos__productos">Producto</div>
            <div className="checkout__titulos__cantidad">Cantidad</div>
          </div>
          {order.items.map((element, iter) => {
            return (
              <>
                <div className="checkout__titulos">
                  <div className="checkout__nombre">{element.nom}</div>
                  <div className="checkout__cantidad">{element.cant}</div>
                </div>
              </>
            );
          })}
          <div className="checkout__total">
            <div className="checkout__total__total">Total</div>
            <div className="checkout__total__precio">
              {formatter.format(order.total)}
            </div>
          </div>
        </section>
      ) : carrito.length === 0 ? (
        <section className="volver">
          <h2 className="animate__animated animate__fadeInUp animate__faster">
            Tu carrito está vacío. :(
          </h2>
          <button className="volver__btn animate__animated animate__fadeIn animate__delay-0.95s">
            <Link to="/">
              <span className="material-symbols-outlined back">
                keyboard_backspace
              </span>
              Volver a la tienda
            </Link>
          </button>
        </section>
      ) : (
        <main
          className={
            !fade
              ? "main__cart animate__animated animate__fadeInUp animate__faster"
              : "main__cart animate__animated animate__fadeOut animate__delay-0.5"
          }
        >
          <section className="main__cart__listado">
            <div className="main__cart__row_titulo">
              <div className="main__cart__titulo__cant">CANT</div>
              <div className="main__cart__titulo__img">IMAGEN</div>
              <div className="main__cart__titulo__producto">PRODUCTO</div>
              <div className="main__cart__titulo__precio">PRECIO</div>
              <div className="main__cart__titulo__total">PRECIO TOTAL</div>
              <div className="main__cart__titulo__modificar">MODIFICAR</div>
              <div className="main__cart__titulo__eliminar">ELIMINAR</div>
            </div>
            {carrito.map((element) => {
              return (
                <div key={element.id} className="main__cart__row">
                  <div className="main__cart__row__cont__cant">
                    {element.cant}
                  </div>
                  <div className="main__cart__row__cont__img">
                    <img src={element.img} alt="{element.nom}" />
                  </div>
                  <div className="main__cart__row__cont__nom">
                    {element.nom}
                  </div>
                  <div className="main__cart__row__cont__precio">
                    {formatter.format(element.precio)}
                  </div>
                  <div className="main__cart__row__cont__total">
                    {formatter.format(element.total)}
                  </div>
                  <div className="contenedorModificar">
                    <Link
                      className="linksCart"
                      to={`../producto/${element.id}`}
                    >
                      <button className="modificar">
                        <span className="material-symbols-outlined">
                          restart_alt
                        </span>
                        MODIFICAR
                      </button>
                    </Link>
                  </div>
                  <div className="contenedorEliminar">
                    <button
                      className="eliminar"
                      onClick={elim}
                      id={element.id}
                      value={element.cant}
                    >
                      <span className="material-symbols-rounded">delete</span>
                      ELIMINAR
                    </button>
                  </div>
                </div>
              );
            })}
          </section>
          <section className="main__cart__carrito">
            <h2>Tu Carrito ({productquantity}) Items</h2>
            {carrito.map((element) => {
              return (
                <div key={element.id} className="main__cart__Final__row">
                  <div className="main__cart__Final__cant">{element.cant}</div>

                  <div className="main__cart__Final__nom">{element.nom}</div>

                  <div className="main__cart__Final__total">
                    {formatter.format(element.total)}
                  </div>
                </div>
              );
            })}
            <section className="section__importe">
              <div>IMPORTE TOTAL</div>
              <div>{formatter.format(totalCarrito)}</div>
            </section>
            <div className="botonesCarrito">
              <button className="eliminarCarrito" onClick={fad}>
                VACIAR CARRITO
              </button>
              <button className="comprar" onClick={comprar}>
                COMPRAR
              </button>
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default Cart;
