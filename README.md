# 노마드코더 실전형 React Hooks

## Study List

- [x] useState
- [ ] useInput
- [ ] useTabs
- [ ] useEffect
- [ ] useTitle
- [ ] useClick
- [ ] useConfirm & usePrevent
- [ ] useBeforeLeave
- [ ] useFadeIn & useNetwork
- [ ] useScroll & useFullscreen
- [ ] useNotification
- [ ] useAxios

### 1. useState

React Hooks를 사용하게 되면 컴포넌트를 함수로 만들 수 있게 되어 React를 함수형 프로그래밍으로 사용할 수 있게 해주는데, 이것은 코드가 굉장히 간결해지는 이점을 얻을 수 있다

React Hooks의 장점을 느껴보기 위해 버튼을 누르면 숫자가 증가/감소 하는 예제를 만들어 비교해보자

**① 함수형 컴포넌트로 작성**

useState는 클래스 컴포넌트의 this.state가 제공하는 기능과 같으며, 함수 컴포넌트 안에서 state 변수를 선언해 사용할 수 있게 해준다

일반적으로 일반 변수는 함수가 끝날 때 사라지지만, state 변수는 React에 의해 사라지지 않는다

useState()의 인자로 넘겨주는 값은 state의 초기 값이다. 이때, 함수 컴포넌트의 state는 클래스 컴포넌트와 달리 객체일 필요는 없고, 숫자 타입과 문자 타입을 가질 수 있다

useState는 state 변수와 해당 변수를 갱신할 수 있는 함수, 두 가지 쌍을 반환한다

:file_folder: ./src/App.js
```javascript
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
```

**② 클래스형 컴포넌트로 작성**

:file_folder: ./src/App.js
```javascript
import React from 'react';

class App extends React.Component {
  state = {
    number : 0
  }

  render() {
    const { number } = this.state;
    return (
      <div className="App">
        <h1>{ number }</h1>
        <button onClick={ this.increaseNum }>Increase</button>
        <button onClick={ this.decreaseNum }>Decrease</button>
      </div>
    );
  }

  increaseNum = () => {
    this.setState(state => {
      return {
        number: state.number + 1
      }
    })
  }

  decreaseNum = () => {
    this.setState(state => {
      return {
        number: state.number - 1
      }
    })
  }
}

export default App;
```

함수형 컴포넌트와 클래스형 컴포넌트를 비교했을 때 굉장히 간결하게 코드를 작성할 수 있음을 알 수 있다