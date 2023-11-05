import react from 'react'
import { useState, useEffect } from "react";
import "./Style1.css";
import {Link} from 'react-router-dom'
function Registration() {
  const initialValues = { fullname:"", username: "", email: "", password: "",confirmpassword:"",phonenumber:"",batch:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [numGuests, setNumGuests] = useState(2);
  const [totalPayment, setTotalPayment] = useState(0);
  const costPerHead = 5000;


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
    if(!values.fullname)
    {
        errors.username = "Username is required!"; 
    }
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
    if(values.confirmpassword==="" || values.confirmpassword!==values.password)
    {
        errors.confirmpassword = "Password is not matched";
    }
    return errors;
  };
  const handleAmount = (event) => {
    const newValue = event.target.value;
    setNumGuests(newValue);

    const newTotal = costPerHead + (newValue * costPerHead);
    setTotalPayment(newTotal);
}


  return (
    <div class="conform1">
          <div >
            <div class="formcontent1">
          <p>
<h1>Registration<br/></h1>
Please login if you are already a member or click on create <br/>
account to be registered as a new member.<br/>
          </p>  
          </div>
        </div>
      <form onSubmit={handleSubmit}>
        <h2>Registration Form</h2>
        <div class="ui divider"></div>
        <div class="ui form">
        <div class="field">
             <label class="name">Fullname *</label> 
            <br/>
            <input
              type="text"
              name="fullname"
              placeholder="as per certificate"
              value={formValues.fullname}
              onChange={handleChange}
              required
            />
          </div>
          <p>{formErrors.fullname}</p>
          <div class="field">
             <label class="name">Username *</label> 
            <br/>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
              required
            />
          </div>
          <p>{formErrors.username}</p>
          <div class="field">
             <label>Email *</label> 
             <br/>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
              required
            />
          </div>
          <p>{formErrors.email}</p>
          <div class="field">
             <label>Password *</label> 
             <br/>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
              required
            />
          </div>
          <p>{formErrors.password}</p>
          <div class="field">
             <label> Confirm Password *</label>
             <br/>
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
              value={formValues.confirmpassword}
              onChange={handleChange}
              required
            />
          </div>
          <p>{formErrors.confirmpassword}</p>
          <div class="field">
             <label>Phone Number(Example 019****)</label> 
             <br/>
            <input
              type="phonenumber"
              name="phonenumber"
              placeholder="0171009"
              value={formValues.phonenumber}
              onChange={handleChange}
              required
            />
          </div>
          <div class="field">
          <label for="batch" className="form-label mt-2">Batch *</label>
         {/* <input type="number" name="batch" placeholder="Enter your batch" className="form-control" min={1} max={31} required/> */}
         <select className="form-select" required>
                            <option selected disabled value="">---</option>
                            <option>CSE 1</option>
                            <option>CSE 2</option>
                            <option>CSE 3</option>
                            <option>CSE 4</option>
                            <option>CSE 5</option>
                            <option>CSE 6</option>
                            <option>CSE 7</option>
                            <option>CSE 8</option>
                            <option>CSE 9</option>
                            <option>CSE 10</option>
                            <option>CSE 11</option>
                            <option>CSE 12</option>
                            <option>CSE 13</option>
                            <option>CSE 14</option>
                            <option>CSE 15</option>
                            <option>CSE 16</option>
                            <option>CSE 17</option>
                            <option>CSE 18</option>
                            <option>CSE 19</option>
                            <option>CSE 20</option>
                            <option>CSE 21</option>
                            <option>CSE 22</option>
                            <option>CSE 23</option>
                            <option>CSE 24</option>
                            <option>CSE 25</option>
                            <option>CSE 26</option>
                            <option>CSE 27</option>
                            <option>CSE 28</option>
                            <option>CSE 29</option>
                            <option>CSE 30</option>
                            <option>CSE 31</option>
                        </select> 

          </div>
          <div class="field">
          <label for="guests" className="form-label mt-2">Number of Guests</label>
                        <select className="form-select" onChange={handleAmount} required>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
          </div>
          <div class="field">
          <label for="totalAmount" className="form-label mt-2">Total amount to be paid *</label>
                        <input type="number" className="form-control" value={totalPayment} /> 
          </div>
          <div class="field">
          <label for="paymentMethod" className="form-label mt-2">Select Payment Method</label>
                        <select className="form-select" required>
                            <option selected disabled value="">---</option>
                            <option value="cash">Cash</option>
                            <option value="bkash">Bkash</option>
                            <option value="nagad">Nagad</option>
                            <option value="rocket">Rocket</option>
                            <option value="card">Card</option>
                        </select>

          </div>
          <div class="field">
          <label for="trxid" className="form-label mt-2">Transaction ID</label>
         <input type="text" className="form-control" placeholder="Enter your TrxID"/>
          </div>
          <div class="field">
          <label for="bloodgroup" className="form-label mt-2">Blood Group</label>
                        <select className="form-select" required>
                            <option selected disabled value="">---</option>
                            <option>A+</option>
                            <option>B+</option>
                            <option>AB+</option>
                            <option>O+</option>
                            <option>A-</option>
                            <option>B-</option>
                            <option>AB-</option>
                            <option>O-</option>
                        </select>
          </div>
          {/* <p>{formErrors.password}</p> */}
          <button class="fluid ui button blue"><Link to="/homepage">Cancel</Link></button>
          <button class="fluid ui button blue">Submit</button>
        </div>
      </form>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div class="ui message success">Signed in successfully</div>
      ) : (
        //  <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        <p1></p1>
      )}
    </div>
  );
}

export default Registration;