import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const WeatherForm = () => {
  return (
    <section className="text-light">
      <h1>Clima App</h1>
      <Form className="my-5">
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formCity">
              <Form.Label>Ciudad</Form.Label>
              <Form.Control type="text" placeholder="Ingresa una ciudad" required minLength={3} maxLength={50}/>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formCountry">
              <Form.Label>Pais</Form.Label>
              <Form.Control type="text" placeholder="Ingresa un pais" required minLength={3} maxLength={50}/>
            </Form.Group>
          </Col>
        </Row>
            <Button variant="danger" type="submit" className="mb-3">
              Buscar
            </Button>
      </Form>
    </section>
  );
};

export default WeatherForm;
