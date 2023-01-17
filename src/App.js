import { useEffect } from "react";
import "./App.css";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { AiFillLinkedin , AiOutlineCopyrightCircle } from "react-icons/ai";

import pic from "./pic.jpg";
function App() {
  
  return (
    <div className="container">
      <img src={pic} alt="Snow" style={{ width: "100%", height: "100vh"  , opacity : "inherit"}} />
      <div className="container_item">
        <div className="Nav">
          <span className="alive-text"> Alive. </span>
          <button className="downlodebtn">Downlode</button>
        </div>
        <div className="center-text">
          <div className="coming-text">Coming Soon...</div>
          <div className="time-text">OUR WEBSITE IS COMING 2023</div>
        </div>

        <div className="bottom-split">
          <div className="left-bottom">
            <div className="left-bottom-item"> Launching in</div>
            <div className="time">
              <div className="day">
                <h1> 23</h1>
                <span> Day</span>
              </div>
              <div className="hour">
                <h1> 04</h1>
                <span>hour </span>
              </div>
              <div className="minute">
                <h1> 55</h1>
                <span> minut</span>
              </div>
              <div className="second">
                <h1> 23</h1>
                <span> second</span>
              </div>
            </div>
          </div>
          <div className="right-bottom">
            <div className="right-item">
              <div className="right-bottom-item">Follow Us :</div>
              <BsFacebook />
              <AiFillLinkedin />
              <BsTwitter />
              <BsInstagram />
            </div>
            <div className="copy-right-footer">
              <AiOutlineCopyrightCircle/>
              <span className="copy-right-text"> Shubham Maurya | All right reserved</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
