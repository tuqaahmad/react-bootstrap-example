import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function CardComponent() {
  const [isLoaded, setIsLoaded] = useState(true);
  const [cards, setCards] = useState([{}, {}, {}, {}, {}, {}]);
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    loading();
  });

  function loading() {
    setTimeout(() => {
      setIsLoaded(false);
    }, 500);
  }

  function getCards() {
    return cards.map(() => {
      return (
        <Card>
          {isLoaded ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "5%",
              }}
            >
              <Spinner
                size="sm"
                animation="grow"
                style={{ marginRight: "2%" }}
              />
              <Spinner
                size="sm"
                animation="grow"
                style={{ marginRight: "2%" }}
              />
              <Spinner
                size="sm"
                animation="grow"
                style={{ marginRight: "2%" }}
              />
            </div>
          ) : (
            <Card.Img
              variant="top"
              src="https://thispersondoesnotexist.com/image"
              onClick={() => setModalShow(true)}
              style={{ cursor: "pointer" }}
            />
          )}

          <Card.Body>
            <Card.Title>Card title that wraps to a new line</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      );
    });
  }

  return (
    <CardColumns
      style={{
        marginLeft: "5%",
        marginRight: "5%",
        marginTop: "3%",
        marginBottom: "3%",
      }}
    >
      {getCards()}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </CardColumns>
  );
}
