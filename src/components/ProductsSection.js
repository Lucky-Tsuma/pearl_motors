import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/carsActions';

const ProductsSection = () => {

    const state = useSelector((state) => state.carsReducer);

    const dispatch = useDispatch();
    
    return (
        <div class = "products_section">
            {state.cars.map((car) => (
                <Card>
                <Card.Img variant="top" src={car.image} />
                <Card.Body>
                <Card.Title>{car.name}</Card.Title>
                <Card.Text>
                    <p>{car.mileage}</p>
                    <p>{car.year}</p>
                    <p id="price">Price: ${car.price}</p>
                </Card.Text>
                <Button variant="primary" onClick={() => showDiv(car.id)}>Add to Cart</Button>
                <div className="div_quantity" id={car.id}>
                    <Button className="btn_plus" onClick = {() => dispatch(addToCart(car.id))}>+</Button>
                    <input type="text" className="input_quantity"/>
                    <Button className="btn_minus">-</Button>
                </div>
                </Card.Body>
                </Card>
            ))}
        </div>
        );
    }

    const showDiv = (id) => {
        document.getElementById(id).style.display="flex";
    }
    
export default ProductsSection;
