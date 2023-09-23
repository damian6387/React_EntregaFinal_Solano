import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import icon from "../assets/icon.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

//Componente NavBar
const NavBar = () => {
  return (
    <header>
      <Navbar data-bs-theme="dark" className="navBarStyle">
        <Container>
          <Navbar.Brand href="#" className="logoStyle">
            <img src={icon} alt="logo" className="iconStyle"></img>
            <h1>The Green Corner</h1>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="linkStyle">
              Home
            </Link>
            <Link to="/productos/cafeteria" className="linkStyle">
              Coffee Shop
            </Link>
            <Link to="/productos/plantas" className="linkStyle">
              Plants Shop
            </Link>
          </Nav>
          <CartWidget>
            <Link to="/cart" className="number-cart-style"></Link>
          </CartWidget>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;
