import React, { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const increaseNum = () => setNumber(number + 1);
  const decreaseNum = () => setNumber(number - 1);
  return (
    <div className="App">
        <h1>{ number }</h1>
        <button onClick={ increaseNum }>Increase</button>
        <button onClick={ decreaseNum }>Decrease</button>
    </div>
  )
}

export default App;