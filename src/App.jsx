import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Loan from "./Loan";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Loan />
    </>
  );
}

export default App;
