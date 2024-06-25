import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const CategorySection = ({ id, title, items }) => (
  <div id={id} className="container category-section">
    <h2>{title}</h2>
    <Row>
      {items.map((item, index) => (
        <Col key={index} sm={4}>
          <div className="thumbnail">
            <Image src={item.image} alt={item.name} fluid className="item-image" />
            <div className="caption">
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  </div>
);

export default CategorySection;
