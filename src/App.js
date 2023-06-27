import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Form,
  Alert,
  Button,
} from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar bg="dark" expand="lg" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="me-auto">
              <Button
                variant="outline-secondary"
                className="bg-transparent border-0"
                active
              >
                Home
              </Button>
              <Button
                variant="outline-secondary"
                className="bg-transparent border-0"
              >
                Features
              </Button>
              <Button
                variant="outline-secondary"
                className="bg-transparent border-0"
              >
                Pricing
              </Button>
              <Button
                variant="outline-secondary"
                className="bg-transparent border-0"
              >
                About
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="m-1">
        <Row className="pt-2 row-cols-1 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 ">
          <Col>
            <h2>Example body text</h2>
            <p>
              Nullam quis risus eget <a href="#">urna mollis ornare</a> vel eu
              leo. Cum socis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Nullam id dolor id nibh ultricies
              vehicula.
            </p>
            <p>
              <small>
                This line of text is meant to be treated as fine print.
              </small>
            </p>
            <p>
              The following is <strong>rendered as bold text.</strong>
            </p>
            <p>
              The following is <em>rendered as italicized text</em>
            </p>
            <p>
              An abbreviation of the word attribute is
              <abbr className="m-1" title="attribute">
                attr
              </abbr>
            </p>
          </Col>

          <Col>
            <Form className="d-flex flex-column">
              <Form.Group className="mb-4">
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" placeholder="Username" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Dropdown list (4 options)</Form.Label>
                <Form.Select as="select">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Form.Check type="checkbox" id="checkbox1" label="Checkbox 1" />
                <Form.Check type="checkbox" id="checkbox2" label="Checkbox 2" />
              </Form.Group>
            </Form>
          </Col>

          <Col>
            <Alert variant="warning">
              <Alert.Heading>Warning!</Alert.Heading>
              Best check yo self, you're not looking too good. Nulla vitae elit
              libero, a pharetra augue. Present commodo cursus magna,
              <Alert.Link href="#" className="m-1">
                vel scelerisque nisl consectetur et.
              </Alert.Link>
            </Alert>
            <Alert variant="danger">
              Oh snap!
              <Alert.Link href="#" className="m-1">
                Change a few things up
              </Alert.Link>
              and try submitting again.
            </Alert>
            <Alert variant="success">
              Well done! Yo have succesfully read
              <Alert.Link href="#" className="m-1">
                this important alert message
              </Alert.Link>
              and try submitting again.
            </Alert>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
