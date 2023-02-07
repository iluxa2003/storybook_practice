import Button from "../components/Button";
import telegram from "../img/Telegram.svg";
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

export const LargeBlackButton = Template.bind({});
LargeBlackButton.args = {
  size: "large",
  label: "Get Started",
};

export const LargeBlueLeftIconButton = Template.bind({});
LargeBlueLeftIconButton.args = {
  size: "large",
  label: "Telegram",
  icon: telegram,
  iconType: "left",
  backgroundColor: "linear-gradient(180deg, #00AEFA 0%, #0983C5 99.08%)",
};

export const LargeBlueCenterIconButton = Template.bind({});
LargeBlueCenterIconButton.args = {
  size: "large",
  label: "Telegram",
  icon: telegram,
  iconType: "center",
  backgroundColor: "linear-gradient(180deg, #00AEFA 0%, #0983C5 99.08%)",
};
