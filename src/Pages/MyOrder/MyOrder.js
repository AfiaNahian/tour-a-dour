import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const { user } = useAuth();
    const mail = user.email;
    const [orders, setOrder] = useState([])

    useEffect(() => {
        fetch(`https://shielded-escarpment-87134.herokuapp.com/order/${mail}`)
            .then(res => res.json())
            .then(data => setOrder(data))

    }, [])

    return (
        <div>
            <h2>Here is your placed order {orders.length}</h2>
            <ul>
                {
                    orders.map(order => <li
                        key={order._id}>{order.buyerName} ::: {order.email} :::
                        {order.name} ::: {order.price}</li>)

                }
            </ul>
        </div >
    );
};

export default MyOrder;