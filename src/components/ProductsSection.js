import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { makeDivVisible } from '../redux/actions/divVisibilityAction';

import audi from '../assets/images/audiTT.jpg';
import lambo2 from '../assets/images/lamboCOUNTACH2.jpg';
import maybach from '../assets/images/maybach.jpg';
import prius2 from '../assets/images/toyotaPRIUS2.jpg';
import lexus from '../assets/images/lexus.jpg';
import chr2 from '../assets/images/toyotaC-HR2.jpg';

const ProductsSection = () => {

    const cars = [
        {
            name : "Toyota Prius",
            mileage : "Mileage: 1000",
            year : "Year of production: 2017",
            price : "Price: $15650",
            id : "toyota_prius",
            image: prius2
        },
        {
            name : "Lamborghini Countach",
            mileage : "Mileage: 8000",
            year : "Year of production: 2010",
            price : "Price: $910000",
            id : "lambo",
            image: lambo2
        },
        {
            name : "Audi TT",
            mileage : "Mileage: 10000",
            year : "Year of production: 2021",
            price : "Price: $49800",
            id : "audi",
            image : audi
        },
        {
            name : "Mercedes Maybach",
            mileage : "Mileage: 13550",
            year : "Year of production: 2016",
            price : "Price: $170000",
            id : "maybach",
            image : maybach
        },
        {
            name : "Lexus LX 570",
            mileage : "Mileage: 12250",
            year : "Year of production: 2018",
            price : "Price: $115000",
            id : "lexus",
            image : lexus
        },
        {
            name : "Toyota C-HR",
            mileage : "Mileage: 11500",
            year : "Year of production: 2017",
            price : "Price: $23580",
            id : "chr",
            image : chr2
        }
    ];

    // const dispatch = useDispatch();
    
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
                <Button variant="primary">Add to Cart</Button>
                <div className="div_quantity" id={car.id}>
                    <Button className="btn_plus">+</Button>
                    <input type="text" className="input_quantity" />
                    <Button className="btn_minus">-</Button>
                </div>
                </Card.Body>
                </Card>
            ))}
                </div>
        );
    }
    
    export default ProductsSection;
