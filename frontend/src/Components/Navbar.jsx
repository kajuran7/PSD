import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";


const Navbar =() => {
  
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"))
  const role = user ? user.role : ""
 
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    // Fetch the initial cart count from local storage
    const initialCartCount = JSON.parse(localStorage.getItem("cartDesigns"))?.length || 0;
    setCartCount(initialCartCount);
  }, [cartCount]);

  


  const handleLogout = () => {
    // Perform logout actions (remove token, etc.)

    // Send a POST request to the server-side logout endpoint
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users/logout`, {
      method: 'POST',
      credentials: 'include'
    })
      .then(response => {
        if (response.ok) {
          setTimeout(() => {
            toast.success("logout success")
          }, 3000);
          localStorage.removeItem('user');
          localStorage.removeItem('cartDesigns')
          window.location.reload();
          window.location.href = '/';
        } else {
          throw new Error('Logout failed.');
        }

      })
      .catch(error => {
        console.error(error);
      });


    // Redirect to the Signup page
    navigate('/Register');
    // Function to update the cart count


  };

  return (


    <div>

      <nav  className="navbar navbar-expand-lg navbar-dark" id="navbar" style={{position:'fixed'}}>

        <div className="container-fluid" >
        < img  src={require("../Components/assets/PSDl.png")}/> 
          <Link className="navbar-brand" to="/" >PSDynamic
          </Link>
           
            {/* style={{ width:'200px' ,height:'200px'   }}  */}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="1navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto design">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Designs">
                  Designs
                </Link>
              </li>



              <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                  Contact Us
                </Link>

              </li>
          
             
              <li className="nav-link">
                <Link className= "fa fa-shopping-cart"   style={{
              textDecoration:"none"
                }} to="/Checkout">
                  <span className="badge">{cartCount}</span>
                </Link>

              </li>






              {role === "admin" && <li className="nav-item">
                <Link className="nav-link" to="/Admin">
                  Dashbord
                </Link>
              </li>}
            </ul>

            {/* Conditional rendering of Signup/Logout button */}
            {user ? (
              <button
                onClick={handleLogout}
                className="btn p-2 my-lg-0 my-2"
                style={{
                  marginLeft: "50px",
                  backgroundColor: "white",
                  color: "rgb(14, 13, 61",
                  fontSize: "20px",
                  fontWeight: "600"
                }}
              >
                SignOut
              </button>
            ) : (
              <a
                href="Register"
                className="btn p-2 my-lg-0 my-2"
                style={{
                  marginLeft: "50px",
                  backgroundColor: "white",
                  color: "rgb(14, 13, 61",
                  fontSize: "20px",
                  fontWeight: "600"
                }}
              >SignIn
              </a>

            )}
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
