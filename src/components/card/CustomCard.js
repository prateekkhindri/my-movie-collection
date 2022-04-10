import React from "react";
import { Button, Card } from "react-bootstrap";

export const CustomCard = ({ movieObj, func }) => {
  return (
    <Card style={{ width: "18rem" }} className="mt-5 me-3">
      <Card.Img variant="top" src={movieObj.Poster} />
      <Card.Body>
        <Card.Title>
          {movieObj.Title} ({movieObj.Language})
        </Card.Title>
        <Card.Title>Rating: {movieObj.imdbRating}</Card.Title>
        <Card.Title>Runtime: {movieObj.Runtime}</Card.Title>

        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}

        <div className="d-flex justify-content-around">
          <Button variant="info" onClick={() => func("happy")}>
            Happy
          </Button>
          <Button variant="secondary" onClick={() => func("lazy")}>
            Lazy
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
