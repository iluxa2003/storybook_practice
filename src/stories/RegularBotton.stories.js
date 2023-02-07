import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
};

export const SmallBlueButton = () => (
  <Button size="small" label="+" borderRadius="50%" backgroundColor="blue" />
);
export const LargeBlackButton = () => (
  <Button size="large" label="Get Started" />
);
