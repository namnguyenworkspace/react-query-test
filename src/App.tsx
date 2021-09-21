import "./App.css";
import { RecoilRoot } from "recoil";
import TestState from "./TestState";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <header className="App-header">
          <TestState />
        </header>
      </div>
    </RecoilRoot>
  );
}

export default App;
