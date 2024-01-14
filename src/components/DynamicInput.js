import { Col, Form, Row } from "react-bootstrap";

function DynamicInput({ label, jsonKey, placeholder, validate, description }) {
  return (
    <Row className="mt-2">
      <Col>
        <Form.Label>{label}</Form.Label>
      </Col>
      <Col>
        <Form.Control
          title={description}
          type="text"
          name={jsonKey}
          placeholder={placeholder}
          required={validate.required}
          disabled={validate.immutable}
        />
      </Col>
    </Row>
  );
}

export default DynamicInput;
