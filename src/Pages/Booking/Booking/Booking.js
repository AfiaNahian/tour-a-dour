import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useParams, useHistory } from 'react-router-dom';
import './Booking.css'

const Booking = () => {
    const { user } = useAuth();
    const { serviceId } = useParams();
    const [service, setService] = useState([])
    // const [singleService, setSingle] = useState({})
    useEffect(() => {
        fetch(`https://shielded-escarpment-87134.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    const history = useHistory();
    const handleClick = () => {
        history.push('/Home#services');
    }
    const confirm = () => {

        const data = service;
        data.email = user.email;
        data.buyerName = user.displayName;
        console.log(data);
        fetch("https://shielded-escarpment-87134.herokuapp.com/order", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.email) {
                    alert('Successfully placed the order')
                }
            })

    }
    return (
        <div className="container">
            <h2 className="text-success fw-bold">Please Book your service</h2>
            <img src={service?.img} alt="" />
            <h2 className="text-success">{service?.name}</h2>
            <h2 className="text-success">About the place:</h2>
            <h4 className="text-danger"> {service?.description}</h4>
            <h3 className="text-success">Minimum day staying : </h3>
            <p className="text-danger fw-bold">{service?.days}</p>
            <h3 className="text-success">Price per person :</h3>
            <p className="text-danger fw-bold">{service?.price}</p>
            <br />
            <button className="btn" onClick={confirm}>Comfirm Booking</button>
            <br />
            <button className="btn" onClick={handleClick}>See All services</button>
        </div>
    );
};
export default Booking;