import { useState, useEffect } from "react";
import {
  Alert,
  Col,
  Container,
  Form,
  Row,
  Card,
  Button,
  Modal,
} from "react-bootstrap";
import DynamicGroup from "./DynamicGroup";
import DynamicFormItem from "./DynamicFormItem";

let prevData = [];
const validateJSONData = (data) => {
  try {
    const parsedJsonSchema = JSON.parse(data);
    prevData = parsedJsonSchema;
    return { error: null, data: parsedJsonSchema };
  } catch (error) {
    return { error, data: prevData };
  }
};

function DynamicForm({ data }) {
  const [jsonSchema, setJsonSchema] = useState([]);
  const [error, setError] = useState(null);
  const [advanced, setAdvanced] = useState(false);
  const [modalData, setModalData] = useState("");

  useEffect(() => {
    const jsonData = validateJSONData(data);
    setJsonSchema(jsonData.data);
    setError(jsonData.error);
  }, [data]);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    let submitData = {};
    [...data.entries()].forEach(([key, value]) => {
      submitData[key] = value;
    });
    setModalData(JSON.stringify(submitData, undefined, 4));
  };

  return (
    <Container fluid>
      <Form onSubmit={onSubmit}>
        {error && (
          <Alert variant="danger">Invalid JSON format {error.message}</Alert>
        )}
        {jsonSchema
          .sort((a, b) => a.sort - b.sort)
          .map((item, index) => {
            switch (item.uiType) {
              case "Group":
                return (
                  <DynamicGroup key={index} {...item} advanced={advanced} />
                );
              default:
                return (
                  (!item.advanced || advanced) && (
                    <Card key={index} className="mt-2" bg="dark" text="white">
                      <Card.Body>
                        <DynamicFormItem {...item} advanced={advanced} />
                      </Card.Body>
                    </Card>
                  )
                );
            }
          })}
        <Row className="mt-2">
          <Col>
            <Form.Check
              // reverse
              type="switch"
              label="Show advanced fields"
              checked={advanced}
              onChange={() => setAdvanced(!advanced)}
            />
          </Col>
          <Col xs="auto">
            <Button className="me-2" variant="outline-secondary">
              Cancel
            </Button>
            <Button type="submit" variant="secondary" disabled={!!error}>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>

      <Modal show={!!modalData} onHide={() => setModalData("")} centered>
        <Modal.Header closeButton>
          <Modal.Title>JSON to be sent to the backend</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control as="textarea" rows={10} disabled value={modalData} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setModalData("")}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default DynamicForm;
