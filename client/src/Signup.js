import React, { useState } from "react";
import { Link } from "react-router-dom";
import Validation from './LoginValidation';

function Signup() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})
    const handleInput =(event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value]}))

    }
    const handleSubmit =(event) => {
        event.preventDefault();
        setErrors(Validation(values));
    }
    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Sign Up</h2>
                <form action="">
                <div className="mb-3">
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input type="text" placeholder="Enter Name" className="form-control rounded-0" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder="Enter Email" 
                        onChange={handleInput} className="form-control rounded-0" />
                        {errors.email && <span className="text-danger"> {errors.email}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder="Enter Password" 
                        onChange={handleInput} className="form-control rounded-0" />
                        <span>{errors.password && <span> {errors.password}</span>}</span>
                    </div>
                    <button className="btn btn-success w-100 rounded-0" onSubmit={handleSubmit} ><strong>Sign up</strong></button>
                    <Link to="/" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"><strong>Login</strong></Link>
                </form>
            </div>
        </div>
    )
}

export default Signup