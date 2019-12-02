import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import slideOne from '../images/slide1.jpg';
import slideTwo from '../images/slide2.jpg';
import slideThree from '../images/slide3.jpg';

const HomeSlider = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    return (
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slideOne}
                    alt="First banner slide"
                />
                <Carousel.Caption>
                    <h3 className="intro-text">Welcome!</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slideTwo}
                    alt="Second banner slide"
                />

                <Carousel.Caption>
                    <h3 className="intro-text">Cute Plushies for a cheap price!</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slideThree}
                    alt="Third banner slide"
                />

                <Carousel.Caption>
                    <h3 className="intro-text">Contact Us!</h3>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
}

export default HomeSlider;