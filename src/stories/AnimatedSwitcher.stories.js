import AnimatedSwitcher from "../components/AnimatedSwitcher";

export default {
  title: "AnimatedSwitcher",
  component: AnimatedSwitcher,
};

export const Switch = () => <AnimatedSwitcher />;
export const SwitchOn = () => <AnimatedSwitcher checked={true} />;
export const DisabledSwitch = () => (
  <AnimatedSwitcher disabled={true} background="#F2F2F7" />
);
