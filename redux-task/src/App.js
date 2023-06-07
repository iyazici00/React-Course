import Counter from "./components/Counter";
import DecreaseCounter from "./components/DecreaseCounter";
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter";
import IncreaseCounter from "./components/IncreaseCounter";
import MultiplyNumber from "./components/MultiplyNumber";

function App() {
  return (
    <div className="App">
      <Counter />
      <IncreaseCounter />
      <DecreaseCounter />
      <IncreaseByTwoCounter />
      <MultiplyNumber />
    </div>
  );
}

export default App;
