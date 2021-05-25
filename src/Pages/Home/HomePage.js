import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

// import ButtonComponent from "../../Components/button/buttonComponent";
import NavbarComponent from "../../Components/navbar/navbarComponent";
import CardComponent from "../../Components/Cards/cardComponent";
import TableComponent from "../../Components/table/tableComponent";
import TooltipComponent from "../../Components/tooltip/tooltipComponent";

export default function Home() {
  const [show, setShow] = useState(false);

  return (
    <React.Fragment>
      <NavbarComponent />
      <CardComponent />
      <TableComponent />
      <br />
      <React.Fragment>
        <Col
          style={{
            marginBottom: "3%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TooltipComponent />
        </Col>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button onClick={() => setShow(true)}>Show Toast</Button>
        </Col>
        <br />
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "3%",
          }}
        >
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>
              Woohoo, you're reading this text in a Toast!
            </Toast.Body>
          </Toast>
        </Col>
      </React.Fragment>
    </React.Fragment>
  );
}
