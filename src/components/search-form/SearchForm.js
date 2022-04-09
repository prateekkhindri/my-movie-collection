import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export const SearchForm = ({ getMovie }) => {
  // 1. Fetching the data
  const [search, setSearch] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  //   2. Catching the data when the search is clicked

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(search);
    getMovie(search);
  };

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Row>
          <Col></Col>

          <Col>
            <Form.Control placeholder="First name" onChange={handleOnChange} />
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
