# 1 INTRODUCTION

## 1.0 Welcome

Mon Oct 18 2022기준 ReactJS어플을 빠르게 만들 수 있는 최신 강의입니다.

## 1.1 Requirements

https://nomadcoders.co/react-for-beginners 듣고 오세요

## 1.2 Structure

React에 필요한 여러 지식을 나누어서 배우고, 마지막에 모두 합쳐서 프로젝트를 진행할겁니다.

또한, 매 번 배울때마다 이전에 배운 것들을 적용해볼겁니다.

# 2 STYLED COMPONENTS

## 2.0 Why Styled Components

https://styled-components.com/

styled components는 다양한 회사에서 사용됩니다.

styled components는 아주 획기적인 발상입니다.

지금까지 CRA를 사용해서 CSS를 적용하는 법은 3가지 입니다.

1. Global style CSS
2. styles attributes
3. CSS Module

CSS Module이 가장 좋은 방법이었지만, className을 계속 적어줘야하고, class이름을 짓는 것이 꽤나 까다로웠습니다.

## 2.1 Our First Styled Component

설치부터 해봅시다.

```bash
npm i styled-components
```

style attribute를 적용한 코드를 봅시다.

```
function App() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ backgroundColor: "teal", width: 100, height: 100 }}></div>
      <div style={{ backgroundColor: "tomato", width: 100, height: 100 }}></div>
    </div>
  );
}
```

위 코드의 단점은 2가지 입니다.

1. div의 남발
2. CSS를 읽어야 box인지 확인 가능함
3. 코드가 지저분함

styled components를 사용해봅시다.

```jsx
import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const BoxOne = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;

const BoxTwo = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;

function App() {
  return (
    <Father>
      <BoxOne />
      <BoxTwo />
    </Father>
  );
}
```

더이상 div를 남발하지도 않고, 각각의 Component가 어떤 의미인지 전달 가능합니다. 그리고 코드가 깔끔해졌습니다. 그리고 구현부분과 Style부분이 분리가 되었습니다.

Text도 추가해봅시다.

```jsx
const Father = styled.div`
  display: flex;
`;

const BoxOne = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;

const BoxTwo = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  color: white;
`;

function App() {
  return (
    <Father>
      <BoxOne>
        <Text>Text</Text>
      </BoxOne>
      <BoxTwo />
    </Father>
  );
}
```