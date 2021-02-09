import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import Form from "./components/Form";
import Lifecycle from "./components/Lifecycle";

function App() {
  return (
    <div className="App">
      <main>
        {/* <Login /> */}
        {/* <Form /> */}
        <Lifecycle />
      </main>
    </div>
  );
}

export default App;
