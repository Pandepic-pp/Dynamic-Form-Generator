import DynamicInput from "./DynamicInput";
import DynamicSelect from "./DynamicSelect";
import DynamicSwitch from "./DynamicSwitch";

function DynamicFormItem(item) {
  switch (item.uiType) {
    case "Input":
      return <DynamicInput {...item} />;
    case "Select":
      return <DynamicSelect {...item} />;
    case "Switch":
      return <DynamicSwitch {...item} />;
    default:
      return <></>;
  }
}

export default DynamicFormItem;
