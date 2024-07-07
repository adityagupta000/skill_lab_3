import React from 'react';
import './App.css';
import BookCard from './HCard';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import famousBook from '../images/5.jpg';

const Event = () => (
  <div className="container">  
    <div className=" row row-cols-md-2 row-cols-lg-4 mt-3">
      <div className="col mb-4">
        <BookCard
          title="The Famous Book"
          author="Renowned Author"
          price="15.00"
          image={famousBook}
          description="Brief description of the famous book goes here."
        />
      </div>

      <div className="col mb-4">
        <BookCard
          title="Book Title 1"
          author="Author 1"
          price="10.00"
          image={image1}
          description="Brief description of Book Title 1 goes here."
        />
      </div>

      <div className="col mb-4">
        <BookCard
          title="Book Title 2"
          author="Author 2"
          price="12.00"
          image={image2}
          description="Brief description of Book Title 2 goes here."
        />
      </div>

      <div className="col mb-4">
        <BookCard
          title="The Famous Book"
          author="Renowned Author"
          price="15.00"
          image={image3}
          description="Brief description of the famous book goes here."
        />
      </div>
    </div>
  </div>
);

export default Event;