import data from "../data/productos.json";

export const pedirProductos = () => {
  return new Promise((resolve, reject) => {
    resolve(data);
  });
};
