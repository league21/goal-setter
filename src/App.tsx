import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Test1 } from "./components/Test1";

function App() {
  const state = useSelector(state => state)

  useEffect(() => {
    console.log(123, state)
  } ,[])
  return (
    <div className="App">
        <h1>123</h1>
        <Test1 />
    </div>
  );
}

export default App;
