import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';

const ProductsSection = () => {
    
    return (
        <div class = "products_section">
        <Card>
            <Card.Img variant="top" src={image1} />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
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
            <Card.Img variant="top" src={image3} />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
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
            <Card.Img variant="top" src={image2} />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
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
            <Card.Img variant="top" src={image3} />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
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
            <Card.Img variant="top" src={image2} />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
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
            <Card.Img variant="top" src={image1} />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
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