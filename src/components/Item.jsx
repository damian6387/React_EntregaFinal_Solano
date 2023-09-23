import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Item = ({ producto }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="cardStyle">
        <Card.Img
          variant="top"
          src={producto.image}
          className="imageCardStyle"
        />
        <Card.Body className="textCardStyle">
          <Card.Title className="title-card-style">{producto.title}</Card.Title>
          <Card.Text>${producto.price}</Card.Text>
          <Link to={`/item/${producto.id}`}>
            <Button variant="success">Ver mas</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
