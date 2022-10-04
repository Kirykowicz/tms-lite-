import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    fetch("/customers")
      .then((res) => res.json())
      .then((res) => {
        setCustomers(res);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let newCustomer = {
      name,
      address,
    };

    fetch("/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCustomer),
    })
      .then((res) => res.json())
      .then((res) => {
        setCustomers([res, ...customers]);
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

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col>
            <ListGroup>
              {customers.map((customer) => (
                <ListGroup.Item>{customer.name}</ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}
