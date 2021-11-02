import React from "react";
import { Carousel } from "react-bootstrap";

import lambo1 from '../assets/images/lamboCOUNTACH1.jpg';
import lambo2 from '../assets/images/lamboCOUNTACH2.jpg';
import prius1 from '../assets/images/toyotaPRIUS1.jpg';
import prius2 from '../assets/images/toyotaPRIUS2.jpg';
import chr1 from '../assets/images/toyotaC-HR1.jpg';
import chr2 from '../assets/images/toyotaC-HR2.jpg';

const CarouselContainer = () => {
    
    return (
        <div className="carousel_container">
            <Carousel fade={true} pause={false}>
                <Carousel.Item interval={3000}>
                <img
                className="d-block w-100"
                src={lambo1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Lamborghini Countach. Cool</h3>
                <p>Coming 2022</p>
                </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={3000}>
                <img
                className="d-block w-100"
                src={lambo2}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Lamborghini Countach. Best</h3>
                <p>Coming 2022</p>
                </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <img
                className="d-block w-100"
                src={prius1}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Toyota PRIUS. Just what you want.</h3>
                <p>Year 2020</p>
                </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <img
                className="d-block w-100"
                src={prius2}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Toyota PRIUS. For you.</h3>
                <p>Release 2020</p>
                </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <img
                className="d-block w-100"
                src={chr1}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Toyota C-HR. Another Cool car.</h3>
                <p>Year 2021.</p>
                </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <img
                className="d-block w-100"
                src={chr2}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Toyota C-Hr. Exactly this.</h3>
                <p>Since 2021.</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>        
    );
}
    
    export default CarouselContainer;