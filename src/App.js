import './App.css';
import { useState } from 'react';
import  Form  from './Form.jsx';
import Timer from './Timer.jsx';

function App() {
  // const [count, setCount] = useState(0);
  return (
    <div className="App">
      {/* <button onClick={() => setCount(count - 1)}>-</button>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button> */}
      {/* <Form /> */}
      <Timer/>
    </div>
  );
}

export default App;
