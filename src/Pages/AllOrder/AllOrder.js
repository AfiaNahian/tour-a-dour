import React, { useEffect, useState } from 'react';

const AllOrder = () => {
    const [orders, setOrder] = useState([])
    useEffect(() => {
        fetch(`https://shielded-escarpment-87134.herokuapp.com/order`)
            .then(res => res.json())
            .then(data => setOrder(data))

    }, [])
    const handleDelete = email => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://shielded-escarpment-87134.herokuapp.com/order/${email}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = orders.filter(order => order.email !== email);
                        setOrder(remaining);
                    }

                })
        }
    }

    return (
        <div>
            <h2>Here is All placed order</h2>
            <h3>Total placed Orders : {orders.length}</h3>
            <ul>
                {
                    orders.map(order => <li
                        key={order.email}>{order.buyerName} ::: {order.email} ::: {order.name} ::: {order.price}
                        < button onClick={() => handleDelete(order.email)}>X</button></li>)
                }
            </ul >

        </div>
    );
};

export default AllOrder;