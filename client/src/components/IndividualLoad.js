import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

export default function IndividualLoad({
  setViewLoad,
  load,
  customers,
  carriers,
  sites,
}) {
  const [customerId, setCustomerId] = useState();
  const [carrierId, setCarrierId] = useState();
  const [originId, setOriginId] = useState();
  const [destinationId, setDestinationId] = useState();
  const [customerRate, setCustomerRate] = useState();
  const [carrierRate, setCarrierRate] = useState();

  console.log(load);

  const handleSubmit = (e) => {
    e.preventDefault();

    let newLoad = {
      customer_id: customerId,
      carrier_id: carrierId,
      revenue: customerRate,
      cost: carrierRate,
    };

    fetch(`/loads/${load.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLoad),
    })
      .then((res) => res.json())
      .then((res) => {
        fetch(`/stops/${load.stops[0].id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            load_id: res.id,
            site_id: originId,
          }),
        });
        fetch(`/stops/${load.stops[0].id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            load_id: res.id,
            site_id: destinationId,
          }),
        });
      });
  };
  return (
    <>
      <h1>
        Load Details / Edit Load Details
        <span>
          <Button onClick={() => setViewLoad(false)}>Back to Load Board</Button>
        </span>
      </h1>
      <p>
        {load.stops[0]
          ? `Pickup address: ${load.stops[0].address}`
          : `Pickup address: ---`}
      </p>
      <p>
        {load.stops[1]
          ? `Delivery address: ${load.stops[1].address}`
          : `Delivery address: ---`}
      </p>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Customer</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
          >
            <option>Choose a Customer</option>
            {customers.map((customer) => (
              <option value={customer.id}>{customer.name}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Carrier</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={carrierId}
            onChange={(e) => setCarrierId(e.target.value)}
          >
            <option>Choose a Carrier</option>

            {carriers.map((carrier) => (
              <option value={carrier.id}>{carrier.name}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Origin</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={originId}
            onChange={(e) => setOriginId(e.target.value)}
          >
            <option>Choose Origin</option>
            {sites.map((site) => (
              <option value={site.id}>{site.name}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Destination</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={destinationId}
            onChange={(e) => setDestinationId(e.target.value)}
          >
            <option>Choose Destination</option>
            {sites.map((site) => (
              <option value={site.id}>{site.name}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Customer Rate</Form.Label>
          <Form.Control
            type="number"
            placeholder="Rate"
            value={carrierRate}
            onChange={(e) => setCustomerRate(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Carier Rate</Form.Label>
          <Form.Control
            type="number"
            placeholder="Rate"
            value={carrierRate}
            onChange={(e) => setCarrierRate(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
