import { Card, Col, Form, Row } from "react-bootstrap";

function DynamicSelect({ label, jsonKey, placeholder, validate, description }) {
  return (
    <Row className="mt-2">
      <Col>
        <Form.Label>{label}</Form.Label>
      </Col>
      <Col>
        <Form.Select
          title={description}
          name={jsonKey}
          required={validate.requried}
          disabled={validate.immutable}
          defaultValue={validate.defaultValue}
        >
          <option value="" disabled>{placeholder}</option>
          {validate.options?.map((item, index) => (
            <option
              key={index}
              name="slice"
              title={item.description}
              value={item.value}
            >
              {item.label}
            </option>
          ))}
        </Form.Select>
      </Col>
    </Row>
  );
}

export default DynamicSelect;
