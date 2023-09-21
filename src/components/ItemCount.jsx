const ItemCount = ({ cantidad, handleSumar, handleBorrar, handleAgregar }) => {
  return (
    <div className="buttonsOrder">
      <button className="buttonStyle" onClick={handleSumar}>
        +
      </button>
      <div className="numberQuantityStyle">{cantidad}</div>

      <button className="buttonStyle" onClick={handleBorrar}>
        -
      </button>

      <button className="buttonCartStyle" onClick={handleAgregar}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
