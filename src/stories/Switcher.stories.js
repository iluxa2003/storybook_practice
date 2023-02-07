import BigSwitcher from "../components/BigSwitcher";
export default {
  title: "Segment picker",
  component: BigSwitcher,
};

const Template = (args) => <BigSwitcher {...args} />;
export const Switcher = Template.bind({});
Switcher.args = {
  list: [
    {
      label: "item1",
      checked: false,
    },
    {
      label: "item2",
      checked: false,
    },
    {
      checked: false,
      label: "item3",
    },
    {
      checked: false,
      label: "item4",
    },
  ],
};

export const SwitcherCheckedElement = Template.bind({});
SwitcherCheckedElement.args = {
  list: [
    {
      label: "item1",
      checked: true,
    },
    {
      label: "item2",
      checked: false,
    },
    {
      checked: false,
      label: "item3",
    },
    {
      checked: false,
      label: "item4",
    },
  ],
};
