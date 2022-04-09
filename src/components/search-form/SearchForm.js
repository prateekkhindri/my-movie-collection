import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export const SearchForm = () => {
  return (
    <div>
      <Form>
        <Row>
          <Col></Col>

          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Button variant="warning" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
