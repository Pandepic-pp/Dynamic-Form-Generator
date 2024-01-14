import { useState } from "react";
import { Row, Card, Form } from "react-bootstrap";
import DynamicTabs from "./DynamicTabs";
import DynamicFormItem from "./DynamicFormItem";

function DynamicGroup({ label, description, subParameters, jsonKey }) {
  const [advanced, setAdvanced] = useState(false);

  return (
    <Card className="mt-2" bg="dark" text="white">
      <Card.Body>
        <Row>
          <label title={description}>{label}</label>
        </Row>
        <Row>
          {subParameters
            .sort((a, b) => a.sort - b.sort)
            .map((item, index) => {
              switch (item.uiType) {
                case "Radio":
                  return (
                    <DynamicTabs
                      key={index}
                      jsonKey={jsonKey}
                      subParameters={subParameters}
                    />
                  );
                default:
                  return (
                    <div key={index}>
                      {item.advanced && (
                        <Form.Check
                          // reverse
                          className="mt-2"
                          type="switch"
                          label="Show advanced fields"
                          checked={advanced}
                          onChange={() => setAdvanced(!advanced)}
                        />
                      )}
                      {(!item.advanced || advanced) && (
                        <DynamicFormItem {...item} />
                      )}
                    </div>
                  );
              }
            })}
        </Row>
      </Card.Body>
    </Card>
  );
}

export default DynamicGroup;
