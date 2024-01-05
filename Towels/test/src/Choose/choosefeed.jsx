import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ChooseCard = () => {
  return (
    <Container className="mt-5">
      <Row xs={1} md={2} lg={3} className="g-4">
        {/* Card 1 */}
        <Col>
          <Card>
            <Card.Img variant="top" src="https://placekitten.com/300/200" alt="Card Image 1" />
            <Card.Body>
              <Card.Title>Card Title 1</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus bibendum quam, id dictum mi eleifend vel.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 2 */}
        <Col>
          <Card>
            <Card.Img variant="top" src="https://placekitten.com/300/200" alt="Card Image 2" />
            <Card.Body>
              <Card.Title>Card Title 2</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus bibendum quam, id dictum mi eleifend vel.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 3 */}
        <Col>
          <Card>
            <Card.Img variant="top" src="https://placekitten.com/300/200" alt="Card Image 3" />
            <Card.Body>
              <Card.Title>Card Title 3</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus bibendum quam, id dictum mi eleifend vel.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ChooseCard;
