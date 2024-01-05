import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './choose.css';
import imgg from './kids.png'
import imggg from './variety.png'
import img from './cotton.png'
const CardComponent = () => {
  return (
    <div  className='total'>
     <div className='text'>
        <h2>Why Choose Jotex ? </h2>
        <p>Our loom finished, yarn dyed jacquard terry towels offer legendary softness and are highly absorbent.</p>
        <div className='conten'>
        <img src='https://softweave.co.in/wp-content/uploads/2018/12/border-icon.png'></img>
        </div>
        </div>
        <div className='ca'>
    <Container className="mt-5">
    <Row xs={1} md={2} lg={3} className="g-4">
      {/* Card 1 */}
      <Col>
        <Card className="h-100 d-flex flex-column">
          <Card.Img variant="top" src={img} alt="Card Image 1" height="280" className="responsive-image" />
          <Card.Body className="d-flex flex-fill flex-column text-center">
            <Card.Title className="flex-fill font-weight-bold">100% Pure Cotton</Card.Title>
            <Card.Text>
              We do not blend our yarn and use only 100% pure cotton sourced from some of the best mills in India.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Card 2 */}
      <Col>
        <Card className="h-100 d-flex flex-column">
          <Card.Img variant="top" src={imgg} alt="Card Image 2" height="280" className="responsive-image" />
          <Card.Body className="d-flex flex-fill flex-column text-center">
            <Card.Title className="flex-fill font-weight-bold">Kids Friendly Products</Card.Title>
            <Card.Text>
              All our products are Oeko-Tex certified and use eco-friendly dyes to ensure they are 100% safe for your family.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Card 3 */}
      <Col>
        <Card className="h-100 d-flex flex-column">
          <Card.Img variant="top" src={imggg} alt="Card Image 3" height="280" className="responsive-image" />
          <Card.Body className="d-flex flex-fill flex-column text-center">
            <Card.Title className="flex-fill font-weight-bold">Variety</Card.Title>
            <Card.Text>
            Our in-house specialists and partner designers custom design our towels to suit any mood & theme.
              Our in-house specialists and partner designers custom design our towels to suit any mood & theme.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  </div>
  </div>
      );
    };

export default CardComponent;
