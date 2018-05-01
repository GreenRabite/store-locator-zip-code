import React from 'react';

const BottomSection = ()=>{
  return(
    <div id="bottom-section">
      <div>Everything you love about Target at your fingertips.</div>
      <div>
        <div id="splash-images">
          <div>
            <img src="./images/splash-bs1.png"></img>
            <h3>Scroll through the aisles.</h3>
            <p>Create an order from your local store in our app or on
              our website.</p>
          </div>
          <div>
            <img src="./images/splash-bs2.png"></img>
            <h3>Our shoppers work their magic.</h3>
            <p>Connect with your shopper and get live updates from
              the aisles.</p>
          </div>
          <div>
            <img src="./images/splash-bs3.png"></img>
            <h3>We deliver your groceries.</h3>
            <p>Schedule a delivery, and your order will arrive in as
               soon as 1 hour.</p>
          </div>
        </div>
      </div>
      <div><button className="green-temp btn-btm">Get Started</button></div>
    </div>
  );
};

export default BottomSection;
