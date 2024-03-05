import React from "react"; 
import Navbar from "./Navbar";


const About = () => {
    return(
        <div> 
            <Navbar   />

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

</div>
)
}
export default About;