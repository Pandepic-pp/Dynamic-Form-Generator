import { Col, Form, Row } from "react-bootstrap";

function DynamicSwitch({ label, jsonKey, validate, type, description }) {
  return (
    <Row className="mt-2">
      <Col>
        <Form.Check
          title={description}
          inline
          label={label}
          name={jsonKey}
          type={type || "checkbox"}
          required={validate.required}
          disabled={validate.immutable}
          defaultChecked={!!validate.defaultValue}
        />
      </Col>
    </Row>
  );
}

export default DynamicSwitch;
