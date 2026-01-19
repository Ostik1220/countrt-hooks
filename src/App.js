import './App.css';
import { useState } from 'react';
import Timer from './components/Timer.jsx';
import Form from './components/Form.jsx';
import { ProductsProvider } from './context/ProductsContext.js';
import { ProductList } from './components/ProductList.jsx';

function App() {
  // const [count, setCount] = useState(0);
  return (
    <div className="App">
      <ProductsProvider>
        {/* <button onClick={() => setCount(count - 1)}>-</button>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button> */}
        {/* <Form /> */}
        {/* <Timer/> */}
        <ProductList />
      </ProductsProvider>
    </div>
  );
}

export default App;
