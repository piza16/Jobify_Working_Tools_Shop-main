import { useParams, Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from "../Components/Rating";
import products from "../products";

const ProductScreen = () => {
  const { id: productId } = useParams();  
  const product = products.find((p) => p._id === productId);
  return (
    <>
        <Link className='btn btn-light my-3' to='/'>חזרה</Link>
        <Row>
            <Col md={5}>
                <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={4}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} numReviews={product.numReviews} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        מחיר: ₪{product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        מפרט: {product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup>
                        <ListGroup.Item>
                            <Row>
                                <Col>מחיר:</Col>
                                <Col>
                                    <strong>₪{product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>סטטוס:</Col>
                                <Col>
                                    <strong>{product.countInStock > 0 ? 'זמין במלאי' : 'המוצר חסר'}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button 
                            className='btn-block'
                            type='button'
                            disabled={product.countInStock === 0}>
                                הוסף לעגלה
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </>
  )
}
export default ProductScreen