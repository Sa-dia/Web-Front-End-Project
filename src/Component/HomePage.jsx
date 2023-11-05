import react from 'react'
import './Style.css'
import Dropdown from './Dropdown.jsx'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
function HomePage() {
    return ( 
        <div class="Cover">
       <div class="home-area">
         <h3>Tour Registration Is On Going</h3> 
         <h2>Click On <span class="types2">Learn More</span></h2> 
         <div class="page">
         <button class="Button"><Link to="/mainpage">Learn More</Link></button></div>
       </div>
       </div>
     );
}

export default HomePage;