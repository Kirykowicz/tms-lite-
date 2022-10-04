import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";

function LoadBoard() {
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
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>143678</td>
              <td>Good2Grow</td>
              <td>Monson & Sons</td>
              <td>Chicago</td>
              <td>IL</td>
              <td>Minong</td>
              <td>WI</td>
              <td>$1,700</td>
              <td>$1,200</td>
              <td>$500</td>
              <td>In Transit</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default LoadBoard;
