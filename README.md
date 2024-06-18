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

## 3.3 Optional Props

```tsx
import Circle from "./Circle";

function App() {
  return (
    <div>
      <Circle borderColor="yellow" bgColor="teal" />
      <Circle text="im here" bgColor="tomato" />
    </div>
  );
}

export default App;

```

?와 default value로 Optional props를 만들 수 있습니다.

```tsx
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Container = styled.div<ContainerProps>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? "white"}>
      {text}
    </Container>
  );
}

export default Circle;

```

### sugar’s tip

- ?? (Null 병합 연산자 (Nullish coalescing operator))

??앞에 값이 null이거나 undefined이면 오른쪽 값을, 그렇지 않으면 왼쪽 값을 반환하는 논리연산자

```tsx
null ?? "hello" // "hello"
undefined ?? "hello" // "hello"
"hi" ?? "hello" // "hi"

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
```

## 3.4 State

```tsx
function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  const [counter, setCounter] = useState<number>(0);
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? "white"}>
      {text}
    </Container>
  );
}
```

### sugar’s tip

`useState < number > ( )`

state의 type을 지정하려면 Generics안에 타입을 지정

일반적으로는 초기값을 지정하면 타입스크립트가 자동으로 타입을 유추하기 때문에 굳이 지정해주지 않아도 되지만 상태가 undefined또는 null이 될 수도 있거나 객체 또는 배열일 때는 지정해주는 것이 좋다.

ex) `const [ value, setValue ] = useState< Value | null >(null);`

## 3.5 Form

React에도 많은 Type들이 준비되어 있는데, 뭐가 필요한지 모두 다 알 수는 없습니다. 오직 구글링 뿐입니다.

`React.FormEvent<HTMLInputElement>` 이런거 다 알 수 없습니다.

```tsx
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;

```

## 3.6 Themes

Styled Component의 Default Theme을 수정하고싶다면, styled.d.ts 파일을 만들면 됩니다.

아래 공식 링크에서 확인할 수 있습니다.

https://styled-components.com/docs/api#typescript

```tsx
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
  }
}

```

그러면 이제 DefaultTheme에 위 Type이 추가된 것을 확인할 수 있습니다.

```tsx
import { DefaultTheme } from "styled-components";

export const ligthTheme: DefaultTheme = {
  bgColor: "white",
  textColor: "black",
};

export const darkTheme: DefaultTheme = {
  bgColor: "black",
  textColor: "white",
};

```

그럼 이제 새로 Theme을 적용해볼까요?

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { darkTheme, ligthTheme } from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

```

```tsx
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Container>
      <H1>Hi</H1>
    </Container>
  );
}

export default App;

```

## 3.7 Recap

모든 React Event에 대해서 알고 싶다면 Synthetic Event를 찾아보세요.

DefinitelyTypes에서 type을 찾아보지 마세요. 어짜피 GitHub는 1,000개 밖에 안보여줍니다.

# 4. REACT ROUTER V6

## 4.0 Update Introduction

앞으로의 강의는 React Router v5로 진행됩니다. 그러나 v6이 되면서 breaking change가 되었습니다.

```bash
npm i react-router-dom@5.4.3
```

강의를 끝까지 들은 후 다시 돌아와주세요.

# 5 CRYPTO TRACKER

## 5.0 Setup

이번 프로젝트에서는 아주 간단한 코인 트래커를 만들겁니다. 아래 링크는 자주 사용하는 코인 API입니다.

https://api.coinpaprika.com

아래 내용을 배워볼 겁니다.

- fetching
- React Query

React Query가 왜 만들어졌는지도 배울겁니다. 항상 왜 만들어졌는지 아는 것이 중요합니다.

설치부터 해봅시다. 필요한 프로그램 버전은 아래와 같습니다.

- node@20.14.0
- npm@10.7.0
- react@18.3.1
- typescript@4.9.5
- styled-component@6.1.11
- react-router-dom@5.3.4
- @types/react-router-dom
- react-query@3.39.3

설치 명령업니다.

```bash
npx create-react-app crypto-tracker --template typescript
npm i react-router-dom@5.3
npm i -D @types/react-router-dom
npm i react-query
npm i -D styled-components
```

Nested Router에 대해서도 배울 겁니다. 전체 코드 입니다.

### index.tsx

저번에 배운 Styled Components의 ThemeProvider도 사용할겁니다. 다만 Theme은 한개입니다.

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
  
);

```

### styled.d.ts

```tsx
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
  }
}

```

### theme.ts

```tsx
import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  bgColor: "white",
  textColor: "black",
};

```

### App.tsx

React Router도 적용할겁니다.

```tsx
import Router from "./Router";

function App() {
  return <Router />;
}

export default App;

```

### Route.tsx

BrowserRoute의 basename을 정해주어야 GitHub Page Production환경에서 잘 동작합니다.

```tsx
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coins from "./routers/Coins";
import Coin from "./routers/Coin";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/:coinId">
          <Coin />
        </Route>
        <Route path="/">
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

```

### routers/Coins.tsx

```tsx
function Coins() {
  return (
    <div>
      <h1>Coins</h1>
    </div>
  );
}

export default Coins;

```

### routers/Coin.tsx

useParams와 interface에 익숙해집시다.

```tsx
import { useParams } from "react-router-dom";

interface RouteParams {
  coinId: string;
}

function Coin() {
  const { coinId } = useParams<RouteParams>();
  return <h1>Coin: {coinId}</h1>;
}

export default Coin;

```