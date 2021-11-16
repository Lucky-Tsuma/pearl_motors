import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { addToCart, adjustQty } from '../redux/actions/carsActions';
import { useDispatch, useSelector } from 'react-redux';


const CarOnHomePage = ({car}) => {
    

    const dispatch = useDispatch();    
    const cart = useSelector((state) => state.carsReducer.cart);


    const showDiv = (id) => {
        document.getElementById(id).style.display="flex";
    }

    const addCar = (carId) => {
        dispatch(addToCart(carId));
    }

    const minusCar = (carId, Quantity) => {
        dispatch(adjustQty(carId, Quantity -1));
    }

    const onChangeHandler = (e) => {
        dispatch(adjustQty(car.id, parseInt(e.target.value)));
    }

    const carItem = cart.find(item => item.id === car.id);

    return (
        <Card key = {car.id} car = {car}>
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
                <Button className="btn_plus" onClick = {() => addCar(car.id)}>+</Button>
                <input type="text" className="input_quantity" value = {carItem?.qty} onChange = {onChangeHandler}/>
                <Button className="btn_minus" onClick = {() => minusCar(car.id, carItem?.qty)}>-</Button>
            </div>
            </Card.Body>
        </Card>
    );

}

export default CarOnHomePage;