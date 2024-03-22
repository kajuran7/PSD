import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const Home = () => {
  
    return(
    
     
<div>
<Navbar/>

<section className="home">
  
        <div className="content">
            <h1 className="title"> 
<span>EVERYTHINGS WERE DESIGNED </span>
 </h1>
            <p className="description">Photography is the art of capturing light with a camera,
             usually via a digital create an image,Saves designers time in crafting unique albums.
             </p>
            {/* <Link to ="/Designs  " className="btn">Make Your Designs Easily  <Link className="fa fa-long-arrow-right" aria-hidden="true"></Link></Link> */}
           


        </div>

        <div className="image">
            < img src={require("../Components/assets/Login2.png")} alt="" data-speed="-3" className="move img-fluid"/>
        </div>
</section>





<div>
            <section id="about">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                        < img src={require("../Components/assets/101.jpg")} alt="About"
                            className="w-75 mt-5 img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fs-5 mb-0">About Us</h3>
                            <h1 className="display-6 mb-2">Who <b>We</b> Are</h1>
                            <hr className="w-50"/>
                            <p className="lead mb-4">
                            Our templates are carefully crafted, saving the designers' significant hours of work.<br/>
Designers can easily access and customize these templates to create personalized albums efficiently.<br/>
Saves designers time in crafting unique album designs.<br/>
Provides customers with quick access to fashionable album templates.
Eliminates the need for extended wait times to receive custom albums.

</p>
                           <span> <Link to="/Designs" className="btn btn-outline-dark">Get Started</Link>      </span> 
                            <Link to="/Contact" className="btn btn-outline-dark">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>











        <div className="container">
    <div className="content">
      <div className="image-box">
       <img src={require("../Components/assets/01.jpg")} alt=""/>
      </div>
    <form action="1">
      <div className="topic">Send us a message</div>
      <div className="input-box">
        <input type="text" required/>
        <label>Enter your name</label>
      </div>
      <div className="input-box">
        <input type="text" required/>
        <label>Enter your email</label>
      
      </div>
      <div className="input-box1">
        <input type="text" required/>
        <label>Enter your Message </label>
      
      </div>
      <div className="input-box">
        <input type="submit" value="Send Message"/>
      </div>
    </form>
  </div>
  </div>

</div>






    )
}
export default Home;