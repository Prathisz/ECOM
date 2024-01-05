// FeedbackCard.js

import React from 'react';
import { Card } from 'react-bootstrap';
import './Feedback.css'; // Import the CSS file for styling

const FeedbackCard = ({ name, feedback, imageUrl }) => {
  return (
    <Card className="text-center">
      <div className="circle-image">
        <Card.Img variant="top" src={imageUrl} alt={`${name}'s photo`} />
      </div>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{feedback}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FeedbackCard;
