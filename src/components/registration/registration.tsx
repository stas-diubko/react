import React from 'react';
import './registration.css'


const Registr: React.FC = () => {
  return (
    <div>
      <h2>registration page</h2>
      <form>
        <div>
            <input type="text" placeholder="Your Name"/>
            <input type="text" placeholder="Your Last Name"/>
            <input type="email" placeholder="Your Email"/>
            <input type="submit" placeholder="Send"/>
        </div>
      </form>
    </div>
  );
}

export default Registr;
