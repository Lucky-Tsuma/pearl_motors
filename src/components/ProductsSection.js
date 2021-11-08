import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { addCount, subtractCount } from '../redux/actions/carsActions';
import { cars } from '../assets/data/carsData';

// import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

const ProductsSection = () => {

    const dispatch = useDispatch();

    const count = useSelector((state) => state.count);
    
    return (
        <div class = "products_section">
            {cars.map((car) => (
                <Card>
                <Card.Img variant="top" src={car.image} />
                <Card.Body>
                <Card.Title>{car.name}</Card.Title>
                <Card.Text>
                    <p>{car.mileage}</p>
                    <p>{car.year}</p>
                    <p id="price">{car.price}</p>
                </Card.Text>
                <Button variant="primary" onClick={() => showDiv(car.id)}>Add to Cart</Button>
                <div className="div_quantity" id={car.id}>
                    <Button className="btn_plus" onClick={() => dispatch(addCount(car.id))}>+</Button>
                    <input type="text" className="input_quantity" value = {count[car.id]} />
                    <Button className="btn_minus" onClick={() => dispatch(subtractCount(car.id))}>-</Button>
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
