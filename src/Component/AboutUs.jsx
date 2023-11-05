import react from 'react'
import img7 from './images/download.jpg'
import './Style.css'
function AboutUs() {
    return ( 
        <div class="backabout">
        <div class="Head">
        <h1>About Us</h1>
       <p>
       The study of computer programming itself investigates various aspects of the use of programming languages and complex systems,<br/> 
       and human-computer interaction focuses on the challenges in making computers and computations useful, usable, and universally accessible to humans.
       </p>
       </div>
       <div class="aboutcon">
        <section class="us">
         <div class="image-about">
         <img src={img7}/>
         </div>
         <div class="about-content">
          <h2>
            Lorem ipsum dolor sit, <br/>
            amet consectetur adipisicing elit. <br/>
            Nam suscipit, voluptas necessitatibus perspiciatis, <br/>
            velit impedit quo placeat quos sequi aliquid doloribus iure reprehenderit vel repellendus, repellat omnis illum. Obcaecati, exercitationem.<br/>
          </h2>
         </div>
        </section>
       </div>
        </div>
     );
}

export default AboutUs;