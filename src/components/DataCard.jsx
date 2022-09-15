import React from "react";
import { Card, Badge } from "react-bootstrap";

const DataCard = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          City <Badge bg="warning" text="dark">Country</Badge>
        </Card.Title>
        <Card.Text>
         <h2>9 C</h2>
         <img src="" alt="" />
         Lorem ipsum dolor sit amet.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DataCard;
