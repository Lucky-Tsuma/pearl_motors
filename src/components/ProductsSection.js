import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import audi from '../assets/images/audiTT.jpg';
import lambo2 from '../assets/images/lamboCOUNTACH2.jpg';
import maybach from '../assets/images/maybach.jpg';
import prius2 from '../assets/images/toyotaPRIUS2.jpg';
import lexus from '../assets/images/lexus.jpg';
import chr2 from '../assets/images/toyotaC-HR2.jpg';

const ProductsSection = () => {
    
    return (
        <div class = "products_section">
        <Card>
            <Card.Img variant="top" src={prius2} />
            <Card.Body>
            <Card.Title>Toyota Prius</Card.Title>
            <Card.Text>
                <p>Mileage: 10000</p>
                <p>Year of production: 2017</p>
                <p id="price">Price: $15650</p>
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
            <div className="div_quantity">
                <Button className="btn_plus">+</Button>
                <input type="number" className="input_quantity" />
                <Button className="btn_minus">-</Button>
            </div>
            </Card.Body>
        </Card>

        <Card>
            <Card.Img variant="top" src={lambo2} />
            <Card.Body>
            <Card.Title>Lamborghini Countach</Card.Title>
            <Card.Text>
                <p>Mileage: 8000</p>
                <p>Year of production: 2010</p>
                <p id="price">Price: $910000</p>
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
            <div className="div_quantity">
                <Button className="btn_plus">+</Button>
                <input type="number" className="input_quantity" />
                <Button className="btn_minus">-</Button>
            </div>
            </Card.Body>
        </Card>

        <Card>
            <Card.Img variant="top" src={audi} />
            <Card.Body>
            <Card.Title>Audi TT</Card.Title>
            <Card.Text>
                <p>Mileage: 10000</p>
                <p>Year of production: 2021</p>
                <p id="price">Price: $49800</p>
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
            <div className="div_quantity">
                <Button className="btn_plus">+</Button>
                <input type="number" className="input_quantity" />
                <Button className="btn_minus">-</Button>
            </div>
            </Card.Body>
        </Card>

        <Card>
            <Card.Img variant="top" src={maybach} />
            <Card.Body>
            <Card.Title>Mercedes Maybach</Card.Title>
            <Card.Text>
                <p>Mileage: 13550</p>
                <p>Year of production: 2016</p>
                <p id="price">Price: $170000</p>
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
            <div className="div_quantity">
                <Button className="btn_plus">+</Button>
                <input type="number" className="input_quantity" />
                <Button className="btn_minus">-</Button>
            </div>
            </Card.Body>
        </Card>

        <Card>
            <Card.Img variant="top" src={chr2} />
            <Card.Body>
            <Card.Title>Toyota C-HR</Card.Title>
            <Card.Text>
                <p>Mileage: 11500</p>
                <p>Year of production: 2017</p>
                <p id="price">Price: $23580</p>
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
            <div className="div_quantity">
                <Button className="btn_plus">+</Button>
                <input type="number" className="input_quantity" />
                <Button className="btn_minus">-</Button>
            </div>
            </Card.Body>
        </Card>

        <Card>
            <Card.Img variant="top" src={lexus} />
            <Card.Body>
            <Card.Title>Lexus LX 570</Card.Title>
            <Card.Text>
                <p>Mileage: 12250</p>
                <p>Year of production: 2018</p>
                <p id="price">Price: $115000</p>
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
            <div className="div_quantity">
                <Button className="btn_plus">+</Button>
                <input type="number" className="input_quantity" />
                <Button className="btn_minus">-</Button>
            </div>
            </Card.Body>
        </Card>
        </div>

        
        );
    }
    
    export default ProductsSection;