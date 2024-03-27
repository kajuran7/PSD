import React from "react";


const Footer = () => {
    return(


<div>
<footer>
    <div className="content">
      <div className="top">
        <div className="logo-details">
     
          <span className="logo_name">PSDynamic
          {/* <img src={require("../Components/assets/4my chump.png")} style={{width:"http://localhost:3000/Home00px", height:"http://localhost:3000/Home00px",}} /> */}
          </span>
        </div>
      
      </div>
      <div className="link-boxes">
        <ul className="box">
          <li className="link_name">Company</li>
          <li><a href="http://localhost:3000">Home</a></li>
          <li><a href="http://localhost:3000/Contact">Contact us</a></li>
          <li><a href="http://localhost:3000/About">About us</a></li>
          <li><a href="http://localhost:3000/Register">Get started</a></li>
        </ul>
        <ul className="box">
          <li className="link_name">Services</li>
          <li><a href="http://localhost:3000">App design</a></li>
          <li><a href="http://localhost:3000">Web design</a></li>
          <li><a href="http://localhost:3000">Logo design</a></li>
          <li><a href="http://localhost:3000">Banner design</a></li>
        </ul>
        <ul className="box">
          <li className="link_name">Account</li>
          <li><a href="http://localhost:3000">My account</a></li>
          <li><a href="http://localhost:3000">Prefrences</a></li>
          <li><a href="http://localhost:3000">Purchase</a></li>
          <li><a href="http://localhost:3000">Profile</a></li>
        </ul>
        <ul className="box">
          <li className="link_name">Courses</li>
          <li><a href="http://localhost:3000/Home">HTML & CSS</a></li>
          <li><a href="http://localhost:3000/Home">JavaScript</a></li>
          <li><a href="http://localhost:3000/Home">Photography</a></li>
          <li><a href="http://localhost:3000/Home">Photoshop</a></li>
        </ul>
        {/* <ul className="box input-box">
          <li className="link_name">Subscribe</li>
          <li><input type="text" placeholder="Enter your email"/></li>
          <li><input type="button" value="Subscribe"/></li>
        </ul> */}
      </div>
    </div>
    {/* <div className="bottom-details">
      <div className="bottom_text">
        <span className="copyright_text">Copyright © 2024 <a href="http://localhost:3000/Home">PSDynamic</a>All rights reserved</span>
        <span className="policy_terms">
          <a href="http://localhost:3000/Home">Privacy policy</a>
          <a href="http://localhost:3000/Home">Terms & condition</a>
        </span>
      </div>
    </div> */}
  </footer>
</div>


    )
}
export default Footer ;