import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import Form from "./Form";
import viteLogo from "/vite.svg";

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <button onClick={() => setIsFormVisible(true)}>Show form</button>

      {isFormVisible && <Form />}
    </div>
  );
}

export default App;
