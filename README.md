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

```jsx
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

## 2.2 Adapting and Extending

BoxOne, BoxTwo가 중복이여서 하나로 해결하고 싶습니다.

```jsx
const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Box bgColor="tomato" />
    </Father>
  );
}
```

JSX와 마찬가지로 Props를 전달할 수 있습니다.

상속도 가능합니다.

```jsx
const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
    </Father>
  );
}
```

## 2.3 'As' and Attrs

만약 Button과 같은 Style이지만, HTML Element를 `<button>`이 아닌 `<a>`로 하고 싶다면?

as를 사용하면 됩니다.

```jsx
const Father = styled.div`
  display: flex;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

function App() {
  return (
    <Father as="header">
      <Btn>Login</Btn>
      <Btn as="a" href="/">
        Login
      </Btn>
    </Father>
  );
}
```

또한 Component에서 HTML Attribute를 설정할 수 있습니다.

```jsx
const Father = styled.div`
  display: flex;
`;

const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;

function App() {
  return (
    <Father as="header">
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}
```

## 2.4 Animations and Pseudo Selectors

animation은 keyframes를 사용하면 됩니다.

```jsx
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const rotationAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotationAnimation} 1s linear infinite;
`;

function App() {
  return (
    <Wrapper>
      <Box />
    </Wrapper>
  );
}

export default App;

```

```jsx
const rotationAnimation = keyframes`
  from {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  to {
    transform: rotate(360deg);
    border-radius: 100px;
  }
`;
```

```jsx

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 100px;
    }
  100% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;
```

Parent styled component에서 Child를 선택할 수 있습니다.

```jsx
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  span {
    font-size: 36px;
    &:hover {
      font-size: 40px;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>🤩</span>
      </Box>
    </Wrapper>
  );
}

export default App;

```

## 2.5 Pseudo Selectors part Two

`<span>`이 바뀐다면…?

```jsx
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 100px;
    }
  100% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  ${Emoji}:hover {
    font-size: 98px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>🤩</Emoji>
      </Box>
      <Emoji>🔥</Emoji>
    </Wrapper>
  );
}

export default App;

```

## 2.6 Super Recap

지금까지 배운 것을 몰라도 걱정하지 마세요. 어짜피 엄청나게 복습할 겁니다.

## 2.7 Themes

다크모드를 구현한다면 50%는 Theme, 50%는 Local Estate Management입니다.

theme이란 모든 색상을 가지고 있는 object입니다.

Theme을 사용하기 위해서 ThemeProvider를 사용해야 합니다.

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

```

```jsx
import styled, { keyframes } from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello, World!</Title>
    </Wrapper>
  );
}

export default App;

```

주의할 점은 darkTheme, lightTheme등 Theme안의 property는 반드시 같아야 합니다.

# 3 TYPESCRIPT

## 3.0 Introduction

TypeScript는 JavaScript에서 Type을 추가한 것입니다. 또한 Strongly-Typed Language입니다.

```tsx
	const plus = (a: number, b: number) => a + b;
```

TypeScript는 배포 전에 JavaScript로 Compile됩니다.

## 3.1 DefinitelyTyped

기존 파일에 TypeScript를 적용하려면 아래 파일들을 설치하면 됩니다.

```bash
npm i --save typescript @types/node @types/react @types/react-dom @types/jest
```

Styled Components는 JavaScript로 만들어졌기 때문에 TypeScript가 알 길이 없습니다. DefinitelyTyped에 사람들이 .d.ts정보를 모아놨습니다.

## 3.2 Typing the Props

Component를 Type한다는 것은 Component에게 Type을 준다는 뜻입니다. 즉 TypeScript에게 뭔가 설명해 준다는 것입니다.

PropTypes는 코드를 실행한 후 Console에 경고를 알려줍니다.

```tsx
import Circle from "./Circle";

function App() {
  return (
    <div>
      <Circle bgColor="teal" />
      <Circle bgColor="tomato" />
    </div>
  );
}

export default App;

```

```tsx
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

interface CircleProps {
  bgColor: string;
}

function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}

export default Circle;

```

대부분의 경우 React component의 props와 Styled components의 props가 다릅니다.

다른 예제입니다.

```tsx
interface PlayerShape {
  name: string;
  age: string;
}

const sayHello = (playerObj: PlayerShape) =>
  `Hello ${playerObj.name}, you are ${playerObj.age} years old`;

sayHello({ name: "nico", age: "12" });
sayHello({ name: "hi", age: "12" });

```