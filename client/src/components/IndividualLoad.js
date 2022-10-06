import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

export default function IndividualLoad({ setViewLoad, load }) {
  return (
    <>
      <h1>Load Details / Edit Load Details</h1>
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
      <Form>
        <Form.Group>
          <Form.Label>Customer</Form.Label>
          <Form.Select>
            <option>{load.customer_name}</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>Carrier</Form.Label>
          <Form.Select>
            <option>{load.carrier_name}</option>
          </Form.Select>
        </Form.Group>
      </Form>
      <Button onClick={() => setViewLoad(false)}>Back</Button>
    </>
  );
}
