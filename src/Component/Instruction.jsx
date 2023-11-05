import react from 'react'
import './Style.css'
function Instruction() {
    return ( 
        <div class="C">
        <div class="block">
          <h1 class="title">Do Not Have An Account?</h1>
         <div class="shadow-lg p-3 mb-5 bg-body rounded">
             <ul class="info">
                <li>
                    <p>To register to this event you need to be a registered member.</p>
                </li>
                <li>
                    <p>Complete your registration first.</p>
                </li>
                <li>
                    <p>After registration is completed login with your user id and password</p>
                </li>
                <li>
                    <p>After login, register to this event.</p>
                </li>
             </ul>
         </div>
        </div>
        </div>
     );
}

export default Instruction;