import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import { useGetTopProductsQuery } from "../slices/productsApiSlice";
import Loader from "./Loader";
import Message from "./Message";

const ProductCarousel = () => {
  const { data: topProducts, isLoading, error } = useGetTopProductsQuery();

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <h1 className="my-4">המוצרים שדורגו הכי גבוה</h1>
      <Carousel
        pause="hover"
        className="my-4"
        style={{ backgroundColor: "rgba(173, 181, 189, 0.5)" }}
      >
        {topProducts.map((product) => (
          <Carousel.Item key={product._id}>
            <Link to={`/product/${product._id}`}>
              <Image src={product.image} alt={product.name} fluid />
              <Carousel.Caption className="carousel-caption">
                <h2>
                  {product.name} ({product.price}₪)
                </h2>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};
export default ProductCarousel;
