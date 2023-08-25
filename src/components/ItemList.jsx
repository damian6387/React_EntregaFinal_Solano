import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div>
      {productos.length > 0 &&
        productos.map((producto) => {
          //Key para identificar los elementos del array
          return <Item key={producto.id} producto={producto} />;
        })}
    </div>
  );
};

export default ItemList;
