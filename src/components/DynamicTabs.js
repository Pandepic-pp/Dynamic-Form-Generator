import { Tabs, Tab, Form } from "react-bootstrap";
import DynamicFormItem from "./DynamicFormItem";
import { useState } from "react";

function DynamicTabs({ subParameters, jsonKey }) {
  const ignores = subParameters.filter((item) => item.uiType === "Ignore");
  const radio = subParameters.find((item) => item.uiType === "Radio");
  radio.validate.options = radio.validate.options.map((option) => {
    option.content = ignores.find((ignore) =>
      ignore.conditions.find(
        (condition) =>
          condition.value === option.value &&
          condition.op === "==" &&
          condition.action === "enable"
      )
    ); // pizza_type.type -> type -> pizza_type
    return option;
  });

  const [active, setActive] = useState(radio.validate.defaultValue);

  return (
    <>
      <div style={{ display: "none" }}>
        {radio.validate.options.map((option, index) => (
          <Form.Check
            key={index}
            type="radio"
            label={option.label}
            value={option.value}
            name={jsonKey}
            checked={active === option.value}
            onChange={() => {}}
            hidden
          />
        ))}
      </div>
      <Tabs
        activeKey={active}
        className="mt-2"
        unmountOnExit={true}
        onSelect={(active) => setActive(active)}
        fill
      >
        {radio.validate.options.map((option, index) => {
          return (
            <Tab
              key={index}
              eventKey={option.value}
              title={option.label}
              disabled={radio.validate.immutable}
            >
              {option.content.subParameters
                .sort((a, b) => a.sort - b.sort)
                .map((item, index) => {
                  return <DynamicFormItem key={index} {...item} />;
                })}
            </Tab>
          );
        })}
      </Tabs>
    </>
  );
}

export default DynamicTabs;
