import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
};
const Template = (args) => <Button {...args} />;
export const CustomButton = Template.bind({});
CustomButton.args = {
  size: "small",
  label: "+",
  borderRadius: "50%",
  backgroundColor: "blue",
};
// export const SmallBlueButton = () => (
//   <Button size="small" label="+" borderRadius="50%" backgroundColor="blue" />
// );
// export const LargeBlackButton = () => (
//   <Button size="large" label="Get Started" />
// );
export const LargeBlackButton = Template.bind({});
LargeBlackButton.args = {
  size: "large",
  label: "Get Started",
};
