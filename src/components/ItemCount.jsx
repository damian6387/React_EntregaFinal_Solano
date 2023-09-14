const ItemCount = ({ cantidad, handleSumar, handleBorrar, handleAgregar }) => {
  return (
    <div>
      <button className="buttonStyle" onClick={handleSumar}>
        +
      </button>
      {cantidad}
      <button className="buttonStyle" onClick={handleBorrar}>
        -
      </button>
      <button onClick={handleAgregar}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
