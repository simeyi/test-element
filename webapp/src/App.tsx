import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="m-auto container">
      <div className="m-4">
        <Form></Form>
      </div>
    </div>
  );
}

export default App;
