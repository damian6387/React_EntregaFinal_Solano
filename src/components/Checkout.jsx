import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

import { useForm } from "react-hook-form"; //npm install react-hook-form
import { Col, Container, Row } from "react-bootstrap";

const Checkout = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext); //Consumo los datos de carrito
  const { register, handleSubmit } = useForm();
  const [pedidoId, setPedidoId] = useState("");

  const comprar = (data) => {
    const pedido = { cliente: data, productos: carrito, total: precioTotal() };
    console.log(pedido);
    const pedidosRef = collection(db, "pedidos");

    addDoc(pedidosRef, pedido) //Te permite agregar un documento
      .then((doc) => {
        setPedidoId(doc.id); //Para capturar de firebase el id del pedido que hice
        vaciarCarrito(); //Despues de realizar la compra se limpia el carrito
      });
  };

  //Cuando un pedido se confirma
  if (pedidoId) {
    return (
      <Container className="containerStyle compra-confirmada">
        <Row>
          <Col>
            <h2>Muchas gracias por tu compra!</h2>
            <p>Tu numero de pedido es: {pedidoId}</p>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="containerStyle">
      <Row>
        <h3 className="titleStyle">
          Ingresa tus datos para finalizar la compra!
        </h3>
        <form className="formularioStyle" onSubmit={handleSubmit(comprar)}>
          <input
            className="inputsStyle"
            type="text"
            placeholder="Ingresá tu nombre"
            {...register("nombre")}
          />
          <input
            className="inputsStyle"
            type="email"
            placeholder="Ingresá tu e-mail"
            {...register("email")}
          />
          <input
            className="inputsStyle"
            type="phone"
            placeholder="Ingresá tu teléfono"
            {...register("telefono")}
          />

          <button className="button-comprar-style" type="submit">
            Comprar
          </button>
        </form>
      </Row>
    </Container>
  );
};

export default Checkout;
