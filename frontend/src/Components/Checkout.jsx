import React, { useState, useEffect } from 'react';
import Payment from '../Components/Payment';
import Navbar from "./Navbar";

function Checkout() {
  const [cartDesigns, setCartDesigns] = useState([]);



  const handlePayment = async (token, totalPrice) => {
    try {
      const response = await fetch('http://localhost:3000/api/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
          amount: totalPrice * 100, // Convert amount to cents
        }),
      });

      const result = await response.json();

      if (result.success) {
        // Payment successful, you can redirect or perform other actions
        console.log('Payment successful:', result.paymentIntent);
        // Handle success, e.g., update order status, redirect to success page
      } else {
        // Payment failed, handle the error
        console.error('Payment failed:', result.error);
        // Handle failure, e.g., show error message to the user
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      // Handle unexpected errors
    }
  };

  useEffect(() => {
    // Retrieve cart designs from local storage
    const storedCartDesigns = JSON.parse(localStorage.getItem('cartDesigns')) || [];
    setCartDesigns(storedCartDesigns);
  }, []);

  const removeCart = (designId) => {
    const updatedCartDesigns = cartDesigns.filter(design => design.id !== designId);
    setCartDesigns(updatedCartDesigns);
    localStorage.setItem('cartDesigns', JSON.stringify(updatedCartDesigns));
  }
  

  const calculateTotalPrice = () => {
    return cartDesigns.reduce((total, design) => total + design.price, 0);
  }

  return (
    <div>
      <Navbar />

      <div className="card">
        <div className="row">
          <div className="col-md-8 cart">
            <div className="title">
              <div className="row">
                <div className="col"  style={{ Color: '#191d44' }}><h4><b>Shopping Cart</b></h4></div>
                <div className="col align-self-center text-right text-muted">{cartDesigns.length} items</div>
              </div>
            </div>

            {/* Render cart items */}
            {cartDesigns.map((design) => (
              <div key={design.id} className="row border-top border-bottom">
                <div className="row main align-items-center">
                  <div className="col-2"><img className="img-fluid" src={design.designImage.url} alt={design.name}  /></div>
                  <div className="col">
                    <div className="row text-muted">{design.category}</div>
                    
                    <div className="row">{design.name}</div>
                  </div>
                  <div className="col">
                    <button className="btn btn-danger btn-sm" onClick={() => removeCart(design.id)}>Remove</button>
                  </div>
                  <div className="col"> {design.price} <span className="close">RS</span></div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-4 summary">
            <div><h5><b>Summary</b></h5></div>
            <hr />
            <div className="row">
              <div className="col">ITEMS</div>
              <div className="col text-right">{cartDesigns.length} Designs</div>
            </div>


            <div className="row">
              <div className="col">TOTAL PRICE</div>
              <div className="col text-right">{calculateTotalPrice()} LKR</div>
            </div>
          
            <div className="btn btn-primary btn-sm mr-2" totalPrice={calculateTotalPrice()} handlePayment={(token, amount) => handlePayment(token, amount)} style={{ backgroundColor: 'blue' }}>CHECKOUT</div>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Checkout;