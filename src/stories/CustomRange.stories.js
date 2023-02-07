import RangeComponent from "../components/RangeComponent";
export default {
  title: "Custom Range",
  component: RangeComponent,
};

const Template = (args) => <RangeComponent {...args} />;
export const Range = Template.bind({});
Range.args = {};

export const RangeWithCurrentValue = Template.bind({});
RangeWithCurrentValue.args = {
  currentValue: true,
};

export const RangeWithCustomField = Template.bind({});
RangeWithCustomField.args = {
  showRange: true,
};
