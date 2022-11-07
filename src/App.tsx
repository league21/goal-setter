import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector(state => state)

  useEffect(() => {
    console.log(123, state)
  } ,[])
  return (
    <div className="App">
        <h1>123</h1>
    </div>
  );
}

export default App;
