import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

// useEffect & useState are hooks from React 

function App() {

  // create a variable in state called "count" with initial value of 0
    // ex: const [state variable, how you update state variable] = useState
  const [count, setCount] = useState(0);
  // count is set to equal 0
  // goal is to increment value by 1

  // everytime the "count" is updated, log a message to the console
  useEffect(() => {
    console.log('count was updated')
  }, [count]); 

  const incrementCount = () => {
    setCount(count + 1); // use this code to "paint" (render) output onto screen instead of console
  };
  
  return (
    <div className="App">
      <button type='button' onClick={incrementCount}>+</button>
      {/* attribute of button doesn't need a > sign until after attribute is assigned? */}
        {/* ex: <button type=''> */}
      {/* display value of "count" with {} */}
      <div>{count}</div>
      {/* code written above puts the value on a different line */}
    </div>
  );
}

export default App;
