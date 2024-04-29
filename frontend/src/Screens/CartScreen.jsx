import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import Message from "../Components/Message";
//import Product from "../Components/Product";
import { addToCart, removeFromCart } from "../slices/cartSlice";
import Meta from "../Components/Meta";

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=/shipping");
  };

  return (
    <>
      <Meta title={"סל הקניות | Jobify"} />
      <Row>
        <Col md={8}>
          <h1 style={{ marginBottom: "20px" }}>סל הקניות</h1>
          <Link className="btn btn-light my-3" to="/">
            חזרה
          </Link>
          {cartItems.length === 0 ? (
            <Message>
              סל הקניות ריק <Link to="/">חזור חזרה</Link>
            </Message>
          ) : (
            <ListGroup variant="flush" className="listGroup">
              {cartItems.map((item) => (
                <ListGroup.Item key={item._id}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item._id}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>₪{item.price}</Col>
                    <Col md={2}>
                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          addToCartHandler(item, Number(e.target.value))
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(item._id)}
                      >
                        <FaTrash />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush" className="listGroup">
              <ListGroup.Item>
                <h3>
                  {cartItems.reduce((acc, item) => acc + item.qty, 0)} פריטים
                  נוספו לסל
                </h3>
                <h5>
                  מחיר כולל&nbsp; ₪
                  {Number(
                    cartItems.reduce(
                      (acc, item) => acc + item.qty * item.price,
                      0
                    )
                  ).toFixed(2)}
                </h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  המשך לביצוע הזמנה
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default CartScreen;