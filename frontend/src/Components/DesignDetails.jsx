import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios'; // Import axios for HTTP requests
import Navbar from "./Navbar";

function DesignDetails() {
  const [design, setDesign] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchDesign = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/design/${id}`);
        setDesign(response.data);
      } catch (error) {
        console.error("Error fetching design data:", error);
      }
    };

    fetchDesign();
  }, [id]);

  return (
    <>
    <Navbar   />
    
    <section id="portfolio-details" className="portfolio-details">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-8">
            <div className="portfolio-details-slider swiper">
              <div className="swiper-wrapper align-items-center">
                {design && (
                  <div className="swiper-slide">
                    <img src={design.designImage.url} alt={design.name} className="img-fluid" />
                  </div>
                )}
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="portfolio-info">
              <h2>{design ? design.name : "Design Details"}</h2>
              <ul>
                <li><strong>Description:</strong> {design && design.description}</li>
                <li><strong>Price:</strong> ${design && design.price}</li>
                <li><strong>Size:</strong> {design && design.size}</li>
                <li><strong>Sheet Size:</strong> {design && design.sheetsize}</li>
                <li><strong>Category:</strong> {design && design.category}</li>
              </ul>
            </div>
            <div className="portfolio-description">
              {design ? (
                
                <Link to= {`/Payment`} className="btn btn-outline-dark" type="button">Order Design</Link>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default DesignDetails;
