import AnimatedSwitcher from "./components/AnimatedSwitcher";
import BigSwitcher from "./components/BigSwitcher";
import Button from "./components/Button";
import RangeComponent from "./components/RangeComponent";
import Search from "./components/Search";
function App() {
  const list = [
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
  ];
  return (
    <div className="App">
      <Button label={"knppochka"} />
      <AnimatedSwitcher />

      <BigSwitcher list={list} />
      <RangeComponent />
      <Search />
    </div>
  );
}

export default App;
