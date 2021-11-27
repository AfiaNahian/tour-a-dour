import React from 'react';
import ex1 from '../../../images/customer/1.jpg'
import ex2 from '../../../images/customer/2.jpg'
import ex3 from '../../../images/customer/3.jpg'
import ex4 from '../../../images/customer/4.jpg'
import Customer from '../Customer/Customer';

const customers = [
    {
        img: ex1,
        name: 'Anna meri',
        comment: 'It was my first visit in Bangladesh and I had a wonderful time . Tour - a -dour arranged everything perfectly.'
    },
    {
        img: ex2,
        name: 'Siddiqur Rahman',
        comment: 'I had a great time with my family . It was a budget friendly trip.'
    },
    {
        img: ex3,
        name: 'Masudul Hasan',
        comment: 'It was fun trip with my friends . i had a great time . looking forward to more tours in the future .'
    },
    {
        img: ex4,
        name: 'hasan Khan',
        comment: 'Thanks tour-a-dour for managing the affordabe tour plan . I needed a free time for myself. '
    },
]

const Customers = () => {
    return (
        <div id="customers" className="container">
            <h2 className="fw-bold text-primary my-5">Our Satisfied Customers</h2>
            <div className="row g-4">
                {
                    customers.map(customer => <Customer
                        key={customer.name}
                        customer={customer}
                    >
                    </Customer>)
                }
            </div>
        </div>
    );
};

export default Customers;