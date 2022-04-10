import React from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { CustomCard } from "../card/CustomCard";

export const MovieList = ({ movieList }) => {
  return (
    <div className="py-3">
      <Row>
        <Col>All list is selected</Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-between mt-3">
          <ButtonGroup>
            <Button variant="primary">All</Button>
            <Button variant="info">Happy</Button>
            <Button variant="warning">Lazy</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button variant="primary">Grid</Button>
            <Button variant="info">List</Button>
          </ButtonGroup>
        </Col>
      </Row>

      <Row>
        <Col className="d-flex flex-wrap justify-content-around">
          {movieList.map((movie, i) => (
            <CustomCard key={i} movieObj={movie} />
          ))}
        </Col>
      </Row>
    </div>
  );
};
