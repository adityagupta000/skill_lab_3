// src/components/Details.js
import React from 'react';
import book1 from '../images/1.jpg';

const Details = () => (
  <div className="container my-5">
    <div className="row">
      <div className="col-md-4">
        <img src={book1} className="img-fluid" alt="Book 1" />
      </div>
      <div className="col-md-8">
        <h2>Book Title 1</h2>
        <p>Author: Author 1</p>
        <p>Price: $10.00</p>
        <p>Detailed description of the book goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at lectus nec arcu bibendum interdum.</p>
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
);

export default Details;
