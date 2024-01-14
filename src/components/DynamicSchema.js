import Form from "react-bootstrap/Form";

function Schema({ data, setData }) {
  return (
    <Form.Control
      as="textarea"
      rows={24}
      value={data}
      onChange={(e) => setData(e.target.value)}
    />
  );
}

export default Schema;
