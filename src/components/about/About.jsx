import React from 'react';
import "./about.css";
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


const About=()=> {
  return (
    <div className='a'>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""
          className="a-img" 
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
        An enthusiast 21 year old, first year student pursuing MCA at Dayananda Sagar College of Engineering.
        I’m Sincere and dedicated person towards my work which drives me to get motivated.Eager to learn and implement new technology and methodologies needed to push both the company and myself forward into success.Just dived into ML and Flutter.
        </p>
        <p>Apart from programming i like economics.</p>
      </div>

    </div>




  );
}

export default About;
