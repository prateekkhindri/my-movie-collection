import React, { useState } from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { CustomCard } from "../card/CustomCard";

export const MovieList = ({ movieList }) => {
  // 1. Create a state to categorize the movies as per happy and lazy

  const [mood, setMood] = useState("");

  // 1.1 Filter and display

  const filterMovies = mood
    ? movieList.filter((movie) => movie.cat === mood)
    : movieList;

  return (
    <div className="py-3">
      <Row>
        <Col>{mood || "All"} list is selected</Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-between mt-3">
          <ButtonGroup>
            <Button variant="primary" onClick={() => setMood("")}>
              All
            </Button>
            <Button variant="info" onClick={() => setMood("Happy")}>
              Happy
            </Button>
            <Button variant="warning" onClick={() => setMood("Lazy")}>
              Lazy
            </Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button variant="primary">Grid</Button>
            <Button variant="info">List</Button>
          </ButtonGroup>
        </Col>
      </Row>

      <Row>
        <Col className="d-flex flex-wrap justify-content-around">
          {filterMovies.map((movie, i) => (
            <CustomCard key={i} movieObj={movie} />
          ))}
        </Col>
      </Row>
    </div>
  );
};
