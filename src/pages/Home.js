import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DynamicForm from "../components/DynamicForm";
import DynamicSchema from "../components/DynamicSchema";
import pizzaJson from "../common/pizza.json";
import pastaJson from "../common/pasta.json";

function Home() {
  const [data, setData] = useState(JSON.stringify(pizzaJson, undefined, 4));

  return (
    <Container fluid className="py-2">
      <Row>
        <Col>
          <DynamicSchema data={data} setData={setData} />
        </Col>
        <Col>
          <DynamicForm data={data} />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
