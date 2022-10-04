import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

function NavBar() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <LinkContainer to="/">
            <Nav.Link>Load Board</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="customers">
            <Nav.Link>Customers</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="carriers">
            <Nav.Link>Carriers</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="new_load">
            <Nav.Link>New Load</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Sites</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Load History</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default NavBar;
