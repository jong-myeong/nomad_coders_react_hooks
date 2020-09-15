import React, { useState } from 'react';

const App = () => {
  // 새로운 state 변수를 선언하고, 이것을 number로 선언
  // number 변수를 갱신할 수 있는 함수로 setNumber를 선언
  // useState(0)으로 number를 0으로 초기화
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