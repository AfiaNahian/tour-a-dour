import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, img, name, days, description } = service;

    return (
        <div>
            <Col>
                <Card className="shadow" style={{ height: '500px' }}>
                    <div>
                        <Card.Img style={{ height: '200px' }} variant="top" src={img} />
                    </div>
                    <div>
                        <Card.Body style={{ height: '230px' }} className="fw-bold">
                            <Card.Title className="text-secondary">{name}</Card.Title>
                            <p className="text-success">{description}</p>
                            <p className="text-danger">Days :{days}</p>
                        </Card.Body>
                        <Link to={`/booking/${_id}`}>
                            <Button variant="success">Book Now</Button>
                        </Link>
                    </div>
                </Card>
            </Col>
        </div>
    );
};

export default Service;