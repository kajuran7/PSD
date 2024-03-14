
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PayList = () => {
  const [designs, setDesigns] = useState([]);

  useEffect(() => {
    const fetchDesigns = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/get');
        setDesigns(response.data);
      } catch (error) {
        console.error('Error fetching designs:', error);
      }
    };

    fetchDesigns();
  }, []);


  return (
    <div className="designlist">
      <h2>Design List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Design Name</th>
            <th>Sheetsize</th>
            <th>Size</th>
            <th>Description</th>
            <th>Prize</th>
            <th>category</th>
            <th>designImage</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {designs.map((design) => (
            <tr key={design._id}>
              <td>{design._id}</td>
              <td>{design.amount}</td>
              <td>{design.sheetsize}</td>
              <td>{design.size}</td>
              <td>{design.description}</td>
              <td>{design.price}</td>
              <td>{design.category}</td>
             
              <td>
                {design.designImage && (
                  <img src={design.designImage.url} alt="Design" style={{ width: '100px', height: 'auto' }} />
                )}
              </td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PayList;
