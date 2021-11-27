import React from 'react';
import { Card } from 'react-bootstrap';

const Customer = ({ customer }) => {
    const { name, img, comment } = customer;
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <Card className="shadow" style={{ height: '480px' }}>
                <div>
                    <Card.Img style={{ height: '250px' }} variant="top" src={img} />
                </div>
                <div>
                    <Card.Body style={{ height: '230px' }} className="fw-bold">
                        <Card.Title className="text-secondary">{name}</Card.Title>
                        <p className="text-success">{comment}</p>
                    </Card.Body>
                </div>
            </Card>
        </div>
    );
};

export default Customer;