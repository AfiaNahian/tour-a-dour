import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/Banner/1.jpg';
import banner2 from '../../../images/Banner/2.jpg';
import banner3 from '../../../images/Banner/3.jpg';
import './Banner.css'
const Banner = () => {
    return (
        <div className="container mb-5">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-white">We care for your vacation and entertainment</h3>
                        <p className="text-white">Get rid of tension and trauma and go take a tour SMILE.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-white">We Provide you the best service</h3>
                        <p className="text-white">We will manage your preffered services according to your time and budget.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-white">Our customers are our first priority</h3>
                        <p className="text-white">We have several packages of different types of places whether you like hills or seas.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;