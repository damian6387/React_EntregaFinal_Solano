import { createContext, useEffect } from "react";
import { useState } from "react";

export const CartContext = createContext();

//carrito va a arrancar con lo que haya guardado en el localStorage, pero sino hay nada guardado nos va a devolver un array vacio
const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(carritoInicial);

  //Funcion agregar al carrito
  const agregarAlCarrito = (item, cantidad) => {
    const itemAgregado = { ...item, cantidad };
    const nuevoCarrito = [...carrito]; //Se hace una copia de carrito
    const estaEnElCarrito = nuevoCarrito.find(
      //Se busca si esta en el Array un determinado producto
      (producto) => producto.id === itemAgregado.id
    );
    if (estaEnElCarrito) {
      //Si el producto ya existia en el carrito, se aumenta la cantidad, no se vuelve a cargar el producto
      estaEnElCarrito.cantidad = estaEnElCarrito.cantidad + cantidad;
    } else {
      //Sino existia en el carrito, se lo pushea como producto nuevo
      nuevoCarrito.push(itemAgregado);
    }
    setCarrito(nuevoCarrito);
  };

  //La defino para visualizar la cantidad de productos hay en el carrito
  const cantidadEnCarrito = () => {
    return carrito.reduce((acum, prod) => acum + prod.cantidad, 0);
  };

  //La defino para hallar el precio total de los productos de un carrito
  const precioTotal = () => {
    return carrito.reduce((acum, prod) => acum + prod.price * prod.cantidad, 0);
  };

  //La defino para vaciar el carrito de compras
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  //Cuando el componente se monte o carrito se modifique se va a guardar el cambio de estado
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  return (
    //Proveo del array carrito y de la funcion agregar AlCarrito
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        cantidadEnCarrito,
        precioTotal,
        vaciarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
