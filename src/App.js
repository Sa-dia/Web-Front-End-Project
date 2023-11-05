import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import BookList from './Component/BookList';
import Book from './Component/Book';
import HomePage from './Component/HomePage';
import Combine from './Component/Combine';
import Navbar from './Component/Navbar';
import AboutUs from './Component/AboutUs';
import ContactUs from './Component/ContactUs';
import Login from './Component/Login';
import Registration from './Component/Registration';
import ForgetPassword from './Component/ForgetPassword';
import OTP from './Component/OTP';
function App() {
  return (
  /*  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    // path name by which can access the page // element whose component to use
    // use for linking 
  
  <Router>
    <Navbar/>
    <Routes>
     <Route path="/" element={<HomePage/>}/>
     <Route path="/mainpage" element={<Combine/>}/>
     <Route path="/about-us" element={<AboutUs/>}/>
      <Route path="/contact-us" element={<ContactUs/>}/>
      <Route path="/login" element={<Login/>}/> 
      <Route path="/registration" element={<Registration/>}/>
      <Route path="/forget-password" element={<ForgetPassword/>}/>
      <Route path="/otp" element={<OTP/>}/>
    </Routes>
  </Router>

  );
}

export default App;
