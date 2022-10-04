import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";

export default function Carriers() {
  const [carriers, setCarriers] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mc, setMc] = useState();

  useEffect(() => {
    fetch("/carriers")
      .then((res) => res.json())
      .then((res) => {
        setCarriers(res);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let newCarrier = {
      name,
      address,
      mc,
    };

    fetch("/carriers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCarrier),
    })
      .then((res) => res.json())
      .then((res) => {
        setCarriers([...carriers, res]);
      });
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Enter name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>MC Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter MC number"
                  value={mc}
                  onChange={(e) => setMc(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col>
            <ListGroup>
              {carriers.map((carrier) => (
                <ListGroup.Item>{carrier.name}</ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}
