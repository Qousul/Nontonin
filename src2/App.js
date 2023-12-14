import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(()=>{
    alert("you have change the value of counter to " + counter)
  },[])

  return (
    <div className="App">
      <br/><br/><br/>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
    </div>
  );
}

export default App;
