// App.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FeedbackCard from './Feedback';
const  FeedbackApp= () => {
  const feedbackData = [
    {
      name: 'Sumedha Rewar',
      feedback: '“Softweave delivers what is most sought after by a distributor – excellent products, great variety and steady supply. The brand has helped us better our portfolio – we are very happy to be associated with Softweave.',
      imageUrl: 'https://softweave.co.in/wp-content/uploads/2019/03/sumedha_rewar_testimonial.png', // Replace with actual image URL
    },
    {
        name: 'John Doe',
        feedback: '“I purchased Softweave towels for my kids and husband from Pepperfry. I’m delighted to use your products as they are very fine and what I loved the most was your little note with both the pieces.',
        imageUrl: 'https://softweave.co.in/wp-content/uploads/2019/01/testi2.png', // Replace with actual image URL
      },
      {
        name: 'Raghu Yadav',
        feedback: '“I purchased Softweave towels for my kids and husband from Pepperfry. I’m delighted to use your products as they are very fine and what I loved the most was your little note with both the pieces.',
        imageUrl: 'https://softweave.co.in/wp-content/uploads/2019/01/testi3.png', // Replace with actual image URL
      },
  ];

  return (
    <Container>
        <div className='textt'>
        <h2>What Our Customer Say</h2>
        <div className='content'>
        <img src='https://softweave.co.in/wp-content/uploads/2018/12/border-icon.png'></img>
        </div>
        </div>
      <Row xs={1} md={3}>
        {feedbackData.map((feedback, index) => (
          <Col key={index} className="d-flex justify-content-center">
            <FeedbackCard {...feedback} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeedbackApp;
