import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
const Navbar = () => {
  const navigate =useNavigate(); 
  const user=JSON.parse(localStorage.getItem("user"))
  const role=user?user.role:""
  const handleLogout = () => {
    // Perform logout actions (remove token, etc.)
    
      // Send a POST request to the server-side logout endpoint
      fetch('http://localhost:3001/api/users/logout', {
        method: 'POST',
        credentials: 'include'
      })
      .then(response => {
        if (response.ok) {
          setTimeout(() => {
              toast.success("logout success")
          }, 5000);
          localStorage.removeItem('user');
          window.location.reload();
          window.location.href = '/Home';
        } else {
          throw new Error('Logout failed.');
        }
      })
      .catch(error => {
        console.error(error);
      });
  

    // Redirect to the Signup page
    navigate('/Signup');
  };
  return (
  

    <div>
  
      <nav className="navbar navbar-expand-lg navbar-dark" id="navbar">

        <div className="container-fluid">
          <Link className="navbar-brand" to="/Home">
         PSDynamic
          </Link>
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
                <Link className="nav-link" to="/Home">
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
              {role==="admin"&& <li className="nav-item">
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
                href="Signup"
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
