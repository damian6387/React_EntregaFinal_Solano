import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

import { useForm } from "react-hook-form"; //npm install react-hook-form

const Checkout = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext); //Consumo los datos de carrito
  const { register, handleSubmit } = useForm();
  const [pedidoId, setPedidoId] = useState("");

  const comprar = (data) => {
    const pedido = { cliente: data, productos: carrito, total: precioTotal() };
    console.log(pedido);
    const pedidosRef = collection(db, "pedidos");

    addDoc(pedidosRef, pedido) //Nos permite agregar un documento
      .then((doc) => {
        setPedidoId(doc.id); //Para capturar de firebase el id del pedido que hice
        vaciarCarrito(); //Despues de realizar la compra se limpia el carrito
      });
  };

  //Cuando un pedido se confirma
  if (pedidoId) {
    return (
      <div>
        <h3>Muchas gracias por tu compra!</h3>
        <p>Tu numero de pedido es: {pedidoId}</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h3 className="mainTitle">Finalizar compra</h3>
      <form className="formulario" onSubmit={handleSubmit(comprar)}>
        <input
          type="text"
          placeholder="Ingresá tu nombre"
          {...register("nombre")}
        />
        <input
          type="email"
          placeholder="Ingresá tu e-mail"
          {...register("email")}
        />
        <input
          type="phone"
          placeholder="Ingresá tu teléfono"
          {...register("telefono")}
        />

        <button className="enviar" type="submit">
          Comprar
        </button>
      </form>
    </div>
  );
};

export default Checkout;
