import React from 'react';
import { Link } from 'react-router-dom';
import not from '../../images/404.jpg'
const Notfound = () => {
    return (
        <div>
            <img style={{ width: '100%' }} src={not} alt="" />
            <Link to="/"><button>Go Back</button>
            </Link>
        </div>
    );
};

export default Notfound;