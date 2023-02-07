import Search from "../components/Search";
import telegram from "../img/send.svg";
import searchSign from "../img/search.svg";
export default {
  title: "CustomSearch",
  component: Search,
  argTypes: {
    leftSvg: {
      options: { telegram, searchSign },
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Search {...args} />;
export const RegularSearch = Template.bind({});
RegularSearch.args = {
  placeholder: "Search products",
};
export const FocusedSearch = Template.bind({});
FocusedSearch.args = {
  placeholder: "Search products",
  state: "focused",
  leftSvg: telegram,
};
