import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";

function LoadBoard() {
  const [loads, setLoads] = useState([]);

  useEffect(() => {
    fetch("/loads")
      .then((res) => res.json())
      .then((res) => setLoads(res));
  }, []);

  return (
    <>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Load Number</th>
              <th>Customer</th>
              <th>Carrier</th>
              <th>Origin City</th>
              <th>Origin State</th>
              <th>Destination City</th>
              <th>Destination State</th>
              <th>Revenue</th>
              <th>Cost</th>
              <th>Margin</th>
              <th>Equipment</th>
            </tr>
          </thead>

          <tbody>
            {loads.map((load) => {
              return (
                <tr>
                  <td>{load.id}</td>
                  <td>{load.customer_name}</td>
                  <td>{load.carrier_name}</td>
                  <td>{load.stops[0].city}</td>
                  <td>{load.stops[0].state}</td>
                  <td>{load.stops[1].city}</td>
                  <td>{load.stops[1].state}</td>
                  <td>${load.revenue}</td>
                  <td>${load.cost}</td>
                  <td>{load.total}</td>
                  <td>{load.equipment_type}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default LoadBoard;
