import AnimatedSwitcher from "./components/AnimatedSwitcher";
import BigSwitcher from "./components/BigSwitcher";
import Button from "./components/Button";
import RangeComponent from "./components/RangeComponent";
import Search from "./components/Search";
function App() {
  return (
    <div className="App">
      <Button label={"knppochka"} />
      <AnimatedSwitcher />

      {/* <BigSwitcher /> */}
      <RangeComponent />
      <Search />
    </div>
  );
}

export default App;
