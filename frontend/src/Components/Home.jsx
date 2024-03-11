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
<span>EVERYTHINGS WERE DESIGNED</span>
 </h1>
            <p className="description">Photography is the art of capturing light with a camera,
             usually via a digital sensor or film, to create an image</p>
            <Link to ="/Designs  " className="btn">Make Your Designs Easily  <Link className="fa fa-long-arrow-right" aria-hidden="true"></Link></Link>
           


        </div>

        <div className="image">
            < img src={require("../Components/assets/H.png")} alt="" data-speed="-3" className="move img-fluid"/>
        </div>
</section>





<div>
            <section id="about">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                        < img src={require("../Components/assets/H.png")} alt="About"
                            className="w-75 mt-5 img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fs-5 mb-0">About Us</h3>
                            <h1 className="display-6 mb-2">Who <b>We</b> Are</h1>
                            <hr className="w-50"/>
                            <p className="lead mb-4">
Welcome to our enchanting world of wedding album design, where creativity blends seamlessly with your love story. Our unique platform connects you with a talented pool of experienced designers, each specializing in the art of capturing the essence of your special day. Whether you envision a classic, romantic album or a modern, vibrant masterpiece, our designers are here to bring your dreams to life. With personalized consultations, exquisite layouts, and a commitment to perfection, we're dedicated to crafting a wedding album that reflects the beauty of your journey together. Join our creative community today and embark on a delightful journey towards preserving your cherished moments in a timeless, visually stunning album. Your love story deserves to be showcased in a way that is as extraordinary as the day itself..</p>
                           <span> <div className="btn btn-outline-dark">Get Started</div>      </span> 
                            <div className="btn btn-outline-dark">Contact Us</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>








        <div className="container">
    <div className="content">
      <div className="image-box">
       <img src={require("../Components/assets/Contact.png")} alt=""/>
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