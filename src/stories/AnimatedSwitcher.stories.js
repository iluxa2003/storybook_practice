import AnimatedSwitcher from "../components/AnimatedSwitcher";

export default {
  title: "AnimatedSwitcher",
  component: AnimatedSwitcher,
};

const Template = (args) => <AnimatedSwitcher {...args} />;
export const Switch = Template.bind({});
Switch.args = {
  disabled: false,
  background: "#C7C7C7",
  checkedBackground: "#007aff",
};

export const SwitchBlueOn = Template.bind({});
SwitchBlueOn.args = {
  disabled: false,
  background: "#C7C7C7",
  checkedBackground: "#007aff",
  checked: true,
};

export const SwitchDisabled = Template.bind({});
SwitchDisabled.args = {
  disabled: true,
  background: "#F2F2F7",
};
