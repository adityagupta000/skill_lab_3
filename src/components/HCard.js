import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HCard = ({ title, author, price, description, image, link }) => (
  <Card style={{ width: '20rem', marginBottom: '50px' ,marginTop:'30px',marginLeft:'10px' }}> 
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>Author: {author}</Card.Text>
      <Card.Text>Price: ${price}</Card.Text>
      <Card.Text>{description}</Card.Text>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to={link} className="btn btn-info" style={{ marginRight: 'auto',marginleft:'auto' }}>View Details</Link>
        <Button className="btn btn-info" style={{ marginRight: 'auto',marginleft:'auto' }} >Add to Cart</Button>
      </div>
    </Card.Body>
  </Card>
);
export default HCard;
