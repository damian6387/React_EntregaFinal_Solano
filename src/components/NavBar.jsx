import { CartWidget } from "./CartWidget";

//Componente NavBar
export const NavBar = () => {
  return (
    <nav>
      <div className="navStyle">
        <h1>The Green Corner</h1>
        <button>Home</button>
        <button>Coffee Shop</button>
        <button>Plant Shop</button>
        <CartWidget />
      </div>
    </nav>
  );
};
