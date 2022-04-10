import React from "react";
import { Button, Card } from "react-bootstrap";

export const CustomCard = ({ movieObj, func, btnDelete = false }) => {
  return (
    <Card style={{ width: "18rem" }} className="mt-5 me-3">
      <Card.Img variant="top" src={movieObj.Poster} />
      <Card.Body>
        <Card.Title>
          {movieObj.Title} ({movieObj.Language})
        </Card.Title>
        <Card.Title>Rating: {movieObj.imdbRating}</Card.Title>
        {/* <Card.Title>Runtime: {movieObj.Runtime}</Card.Title> */}

        {btnDelete ? (
          <div className="d-grid gap-2">
            <Button
              variant="danger"
              size="lg"
              onClick={() => func(movieObj.imdbID)}
            >
              Delete
            </Button>
          </div>
        ) : (
          <div className="d-flex justify-content-around">
            <Button variant="info" onClick={() => func("Happy")}>
              Happy
            </Button>
            <Button variant="warning" onClick={() => func("Lazy")}>
              Lazy
            </Button>
          </div>
        )}

        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}

        {/* <div className="d-flex justify-content-around">
          <Button variant="info" onClick={() => func("Happy")}>
            Happy
          </Button>
          <Button variant="secondary" onClick={() => func("Lazy")}>
            Lazy
          </Button>
        </div> */}

        {/* <div className="d-grid gap-2">
          <Button variant="secondary" size="lg">
            Delete
          </Button> */}
        {/* <Button variant="secondary" size="lg">
            Block level button
          </Button> */}
        {/* </div> */}
      </Card.Body>
    </Card>
  );
};
