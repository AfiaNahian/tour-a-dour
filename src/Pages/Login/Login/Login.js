import React from 'react';
//import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const Login = () => {

    const { toggleLogin, handlepass, error, signInUsingGoogle, handleRegister, isLogin, handleName, handleEmail } = useAuth();
    // const location = useLocation();
    // const history = useHistory();
    // const redirect_uri = location.state?.from || '/home';


    // const handleGoogleLogin = () => {
    //     signInUsingGoogle()
    //         .then(result => {
    //             history.push(redirect_uri);
    //         })
    // }
    return (
        <div className="container">
            <form onSubmit={handleRegister}>
                <h3>Please {isLogin ? 'Login' : 'Register'}</h3>
                {!isLogin &&
                    <div className="row mb-3">
                        <label htmlFor="inputName" className="col-sm-2 form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" onBlur={handleName} className="form-control" placeholder="Your name" required />
                        </div>
                    </div>
                }
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" onBlur={handleEmail} className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" onBlur={handlepass} className="form-control" id="inputPassword3" required />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input onClick={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Already registered?
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 text-danger">{error}</div>
                <button type="submit" className="btn my-3 btn-primary"> {isLogin ? 'Login' : 'Register'}</button>
                <br />
            </form>
            <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;
