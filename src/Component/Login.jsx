import react from 'react'
import { useState, useEffect } from "react";
import "./Style.css";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'

function Login() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div class="conform">
          <div >
            <div class="formcontent">
          <p>
<h1>Registration / Login<br/></h1>
Please login if you are already a member or click on create <br/>
account to be registered as a new member.<br/>
          </p>  
          </div>
        </div>
      <form onSubmit={handleSubmit}>
        <h2>Login Form</h2>
         <div class="ui divider"></div> 
        <div class="ui form">
          <div class="field">
            
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div class="field">
        
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div class="field">
      
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
           <p>{formErrors.password}</p>
          <button class="fluid ui button blue">Login</button>
        </div>
      </form>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div class="ui message success">Signed in successfully</div>
      ) : (
       
        <p1></p1>
      )}
      <div class="link">
      <Link to="/registration" class="NA">No Account?</Link>
      <h4>Or</h4>
      <Link to="/forget-password" class="FP">Forget Password?</Link>
      </div>
    </div>
  );
}

export default Login;