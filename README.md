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
null ?? "hello"; // "hello"
undefined ?? "hello"; // "hello"
"hi" ?? "hello"; // "hi"

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

## 5.1 Styles

Browser에서 제공하는 기본 CSS를 초기화 하고 싶다면 아래 링크를 사용합니다.

- https://meyerweb.com/eric/tools/css/reset/index.html

심지어 Package로도 제공합니다.

- https://github.com/zacanger/styled-reset/tree/master

그런데 이 CSS를 어디에 적용해야 할까요? Styled Componenets에서는 Create Global Style을 제공합니다.

https://styled-components.com/docs/api#createglobalstyle

React의 Fragment도 사용해야 합니다.

```tsx
import { createGlobalStyle } from "styled-components";
import Router from "./Router";

const GlobalStyle = createGlobalStyle`
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
```

Reset CSS를 GlobalStyle에 넣어봅시다.

그런데, Prettier가 동작하지 않는다면? 아래 링크를 참고해보세요.

https://github.com/styled-components/vscode-styled-components/issues/175

다음은 Font입니다.

Google Fonts https://fonts.google.com

Source Sans Pro 폰트

### App.tsx

```css
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap");

* {
  box-sizing: border-box;
}
body {
  font-family: "Source Sans Pro", sans-serif;
}
a {
  text-decoration: none;
}
```

CSS 색깔도 모아둔 사이트가 있습니다.

https://flatuicolors.com/palette/gb

### App.tsx

```css
* {
  box-sizing: border-box;
}
body {
  font-family: "Source Sans Pro", sans-serif;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  accent-color: ${(props) => props.theme.accentColor};
}
a {
  text-decoration: none;
}
```

Console Error가 신경쓰이고, React Helmet은 쓰기 싫다면 public/index.html의 `<head>`안에 추가하면 해결됩니다.

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap"
/>
```

## 5.2 Home part One

API를 사용해 Coin정보를 가져옵시다.

https://api.coinpaprika.com/v1/coins

React Router를 사용하니 `<a>`대신 `<Link>`를 사용합시다. 추후 <Link>는 모두 <a>로 변경되기 때문에 Link에 CSS를 적용하고 싶다면, a element에 적용하면 됩니다.

Hover도 적용해봅시다.

```tsx
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 10px;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

// https://api.coinpaprika.com/v1/coins
const coins = [
  {
    id: "btc-bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    rank: 1,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "eth-ethereum",
    name: "Ethereum",
    symbol: "ETH",
    rank: 2,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "hex-hex",
    name: "HEX",
    symbol: "HEX",
    rank: 3,
    is_new: false,
    is_active: true,
    type: "token",
  },
];

function Coins() {
  return (
    <Container>
      <Header>
        <Title>Crypto Tracker</Title>
      </Header>
      <CoinsList>
        {coins.map((coin) => (
          <Coin key={coin.id}>
            <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
          </Coin>
        ))}
      </CoinsList>
    </Container>
  );
}

export default Coins;
```

## 5.3 Home part Two

`margin: 0 auto;`를 추가하면 자연스럽게 가운데정렬이 됩니다.

```
const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;
```

fetch를 사용하려면 then을 사용했었습니다. async, await을 사용할 수도 있는데, 그러면 함수를 분리했어야 합니다. 함수를 따로 만들지 않고 useEffect에 async를 적용하는 방법은 아래와 같습니다.

useEffect()와 async 팁!

```tsx
useEffect(() => {
  (async () => {
    const response = await fetch();
  })();
});
```

Loading도 만들어봅시다.

다음에는 React Query를 적용할겁니다.

```tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const data: Array<CoinInterface> = await response.json();
      setCoins(data.slice(0, 100));
      setLoading(false);
    })();
  });
  return (
    <Container>
      <Header>
        <Title>Crypto Tracker</Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}

export default Coins;
```

## 5.4 Route States

아래 웹사이트에서 암호화폐에 대한 아이콘을 얻을 수 있지만, 최신 아이콘은 없습니다.

https://cryptoicon-api.pages.dev/

https://cryptoicon-api.pages.dev/icons/128/color/yfi.png

따라서 아래 웹사이트를 이용합시다.

https://cryptocurrencyliveprices.com/img/${coin.id}.png

```tsx
<CoinsList>
  {coins.map((coin) => (
    <Coin key={coin.id}>
      <Link to={`/${coin.id}`}>
        <Img src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`} />
        {coin.name} &rarr;
      </Link>
    </Coin>
  ))}
</CoinsList>
```

이제 만들어야 할 것은 상세페이지입니다. 상세페이지로 이동할 때에도 loading이 뜨는 것은 좋지 않습니다. 이미 기본 정보는 가지고 있기 때문에, 그걸 바탕으로 간단하게 보여줍시다.

`Link`를 사용해서 URL로 정보를 보낼 수도 있지만, `<Link state=””>`를 사용할 수도 있습니다.

https://v5.reactrouter.com/web/api/Link/to-object

```tsx
  <Link
    to={{
      pathname: `/${coin.id}`,
      state: {
        name: coin.name,
      },
    }}
  >
```

그렇다면 이동한 Component는 어떻게 state를 받아올 수 있을까요? 바로 [`useLocation()`](https://v5.reactrouter.com/web/api/Hooks/uselocation)을 사용하면 됩니다.

`<Link>`를 사용해서 Object를 보낼 수 있고, `useLocation()`은 언제나 URL상태를 저장하고 있습니다.

useLocation()의 state를 사용해서 Component를 Rendering하면 단점은, URL을 직접 입력하거나 시크릿모드이면 에러가 발생합니다.

그래서 해당 에러를 `{state?.name || "Loading..."}` 으로 해결해줘야 합니다.

```tsx
function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}
```

## 5.5 Coin Data

이제 개별 Coin정보를 받아봅시다.

```tsx
const CACHE_EXPIRY_TIME = 60 * 60 * 1000; // 1 hour in milliseconds

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  const [info, setInfo] = useState<any>({});
  const [priceInfo, setPriceInfo] = useState<any>({});

  useEffect(() => {
    const loadCoinData = async () => {
      // Check if cached data exists and is not expired
      const cachedInfo = localStorage.getItem(`info_${coinId}`);
      const cachedPriceInfo = localStorage.getItem(`price_${coinId}`);
      const cachedTime = localStorage.getItem(`cacheTime_${coinId}`);

      if (
        cachedInfo &&
        cachedPriceInfo &&
        cachedTime &&
        Date.now() - parseInt(cachedTime) < CACHE_EXPIRY_TIME
      ) {
        // Use cached data
        setInfo(JSON.parse(cachedInfo));
        setPriceInfo(JSON.parse(cachedPriceInfo));
        setLoading(false);
      } else {
        // Fetch new data from the API
        const infoData = await (
          await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
        ).json();
        const priceData = await (
          await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
        ).json();

        // Update state
        setInfo(infoData);
        setPriceInfo(priceData);
        setLoading(false);

        // Cache new data
        localStorage.setItem(`info_${coinId}`, JSON.stringify(infoData));
        localStorage.setItem(`price_${coinId}`, JSON.stringify(priceData));
        localStorage.setItem(`cacheTime_${coinId}`, Date.now().toString());
      }
    };

    loadCoinData();
  }, [coinId]); // Dependency array includes coinId to refetch data if coinId changes

```

### sugar’s tip

coin id로 코인 받기 (Coins)

https://api.coinpaprika.com/v1/coins/btc-bitcoin

https://api.coinpaprika.com/#operation/getCoinById

coin id로 특정 코인에 대한 시세 정보 얻기 (Tickers)

https://api.coinpaprika.com/v1/tickers/btc-bitcoin

https://api.coinpaprika.com/#operation/getTickersById

### bluesky’s tip

자체 URL: https://ohlcv-api.nomadcoders.workers.dev

사용을 위해서는. 파라미터로 coinId 를 추가하세요.

https://ohlcv-api.nomadcoders.workers.dev?coinId=btc-bitcoin

https://jvilk.com/MakeTypes/

## 5.6 Data Types

API로 받은 데이터의 Data Type을 추가해봅시다.

```tsx
const [info, setInfo] = useState<any>({});
const [priceInfo, setPriceInfo] = useState<any>({});
```

아래 인터페이스를 만들건데, Interface의 이름 앞에 I를 붙이는 경우도 있지만 이번엔 넘어가겠습니다.

```tsx
interface InfoData {}

interface PriceData {}
```

Chrome Dev Tools에서 Console창에 나타난 console.log결과 값을 오른쪽 마우스 클릭하면 Store as global variable이 보입니다. 그걸 선택하면 temp1이라는 변수에 저장됩니다.

`Object.keys(temp1).map(e => typeof e).join()`

`Object.values(temp1).map(e => typeof e).join()`

위 명령을 실행하면 key와 value의 Data Type을 알아낼 수 있습니다. 그럼 이걸로 interface를 구성하면 됩니다.

그런데 이렇게 일일이 하기 보다는 서비스를 이용해봅시다.

- https://jvilk.com/MakeTypes/
- https://app.quicktype.io/?l=ts

```tsx
interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: Quotes;
}
interface Quotes {
  USD: USD;
}
interface USD {
  price: number;
  volume_24h: number;
  volume_24h_change_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  percent_change_15m: number;
  percent_change_30m: number;
  percent_change_1h: number;
  percent_change_6h: number;
  percent_change_12h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  percent_change_30d: number;
  percent_change_1y: number;
  ath_price: number;
  ath_date: string;
  percent_from_price_ath: number;
}
```

## 5.7 Nested Routes part One

저번에 까먹었는데 setLoading(false)를 설정해주세요.

useEffect(() => {}, [])에서 []에 경고가 있을겁니다. 만약, useEffect 내부에서 state를 사용한다면, 의존성이 추가되기 때문에 useEffect에도 알려줘야 합니다.

이제 CSS는 코드로 보여줄 겁니다.

```tsx
const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  margin: 20px 0px;
`;
```

```tsx
  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{info?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${info?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source:</span>
              <span>{info?.open_source ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>
          <Description>{info?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{priceInfo?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{priceInfo?.max_supply}</span>
            </OverviewItem>
          </Overview>
          <Switch>
            <Route path={`/${coinId}/price`}>
              <Price />
            </Route>
            <Route path={`/${coinId}/chart`}>
              <Chart />
            </Route>
          </Switch>
        </>
      )}
    </Container>
```

Title을 자세히 보면, React Router를 사용한 state가 null일 경우엔 loading을 확인합니다.

```tsx
<Title>{state?.name ? state.name : loading ? "Loading..." : info?.name}</Title>
```

Nested Routes는 이 부분입니다.

```tsx
<Switch>
  <Route path={`/${coinId}/price`}>
    <Price />
  </Route>
  <Route path={`/${coinId}/chart`}>
    <Chart />
  </Route>
</Switch>
```

## 5.8 Nested Routes part Two

React Router는 충분히 똑똑해서 아래와 같이 바꿔도 잘 동작합니다.

```tsx
<Switch>
  <Route path={`/:coinId/price`}>
    <Price />
  </Route>
  <Route path={`/:coinId/chart`}>
    <Chart />
  </Route>
</Switch>
```

React Router의 useRouteMatch()를 사용해봅시다. URL이 정확하게 일치한다면 Object를 반환하고 아니면 null을 반환합니다.

Styled Components의 Component Props에 TypeScript를 적용하는 방법도 알아봅시다.

```tsx
import {
  Link,
  Route,
  Switch,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{ isactive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.isactive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
`;
function Coin() {

  const priceMatch = useRouteMatch("/:coinId/price");
  const chartMatch = useRouteMatch("/:coinId/chart");

  return (
    <Container>
          <Tabs>
            <Tab isactive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab isactive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>
          <Switch>
            <Route path={`/:coinId/price`}>
              <Price />
            </Route>
            <Route path={`/:coinId/chart`}>
              <Chart />
            </Route>
          </Switch>
        </>
      )}
    </Container>
  );
}

export default Coin;
```

## 5.9 React Query part One

React Query를 사용하면 위에 useEffect를 지워도 무방합니다. index.tsx를 수정해줍시다.

React Query가 하는 일은, fetch()가 끝나면 state를 바꾸고 loading도 바꾸는 일을 알아서 해줍니다.

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";

const queyrClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queyrClient}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
```

코드량이 확 줄었습니다. useEffect()로 일일히 하던 것을 다 알아서 해줍니다. React Query의 또 좋은 점은 알아서 Caching해줍니다.

```tsx
function Coins() {
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchcoins);
  return (
    <Container>
      <Header>
        <Title>Crypto Tracker</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}`,
                  state: {
                    name: coin.name,
                  },
                }}
              >
                <Img
                  src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}
```

```tsx
export async function fetchcoins() {
  return fetch("https://api.coinpaprika.com/v1/coins").then((response) =>
    response.json()
  );
}
```

## 5.10 React Query part Two

이번엔 상세페이지도 적용해봅시다.

그 전에 ReactQueryDevtools를 사용하면 Caching된 데이터를 확인할 수 있습니다.

```tsx
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}
```

React Query는 key로 query를 관리합니다. key가 중복된다면 Array를 사용합시다.

```tsx
function Coin() {
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  const priceMatch = useRouteMatch("/:coinId/price");
  const chartMatch = useRouteMatch("/:coinId/chart");
  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(
    ["info", coinId],
    () => fetchCoinInfo(coinId)
  );
  const { isLoading: tickersLoading, data: tickersData } = useQuery<PriceData>(
    ["tickers", coinId],
    () => fetchCoinTickers(coinId)
  );

  const loading = infoLoading || tickersLoading;
```

fetch에 props를 전달하려면 이렇게 하면됩니다.

```tsx
const BASE_URL = `https://api.coinpaprika.com/v1`;

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}
```

## 5.12 Price Chart

자체 URL: [**https://ohlcv-api.nomadcoders.workers.dev**](https://ohlcv-api.nomadcoders.workers.dev/)

사용을 위해서는. 파라미터로 `coinId` 를 추가하세요. [**https://ohlcv-api.nomadcoders.workers.dev?coinId=btc-bitcoin**](https://ohlcv-api.nomadcoders.workers.dev/?coinId=btc-bitcoin)

아래와 같이 useParams를 사용해도 되지만 굳이?

```tsx
import { useParams } from "react-router";

function Chart() {
  const { coinId } = useParams<{ coinId: string }>();
  return <h1>Chart</h1>;
}

export default Chart;
```

```tsx
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";

interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return <h1>Chart</h1>;
}

export default Chart;
```

```tsx
export function fetchCoinHistory(coinId: string) {
  //   const endDate = Math.floor(Date.now() / 1000);
  //   const startDate = endDate - 60 * 60 * 24 * 7;
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
  ).then((response) => response.json());
}
```

## 5.13 Price Chart part Two

그래프를 그리기 위해 APEXCHARTS.JS를 사용할 겁니다.

https://apexcharts.com/

React에 적용하기 위해 react-apexcharts도 설치해줍시다.

```bash
npm install --save apexcharts react-apexcharts
```

이렇게 사용합니다.

```tsx
<ApexChart
  type="line"
  series={[
    {
      name: "hello",
      data: [1, 2, 3, 4, 5, 6],
    },
    {
      name: "sales",
      data: [15, 18, 15, 78, 56],
    },
  ]}
  options={{
    theme: {
      mode: "dark",
    },
    chart: {
      height: 500,
      width: 500,
    },
  }}
/>
```

다양한 옵션을 수정해봅시다.

```tsx
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "Price",
              data: data?.map((price) => parseFloat(price.close)) ?? [],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 500,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: {
              show: false,
            },
            stroke: {
              curve: "smooth",
              width: 3,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: {
                show: false,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
```

## 5.14 Price Chart part Three

이거 다 못외워요. 그냥 사람들이 만든거 쓰세요.

```tsx
<ApexChart
  type="line"
  series={[
    {
      name: "Price",
      data: data?.map((price) => parseFloat(price.close)) ?? [],
    },
  ]}
  options={{
    theme: {
      mode: "dark",
    },
    chart: {
      height: 500,
      width: 500,
      toolbar: {
        show: false,
      },
      background: "transparent",
    },
    grid: {
      show: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        show: false,
      },
      type: "datetime",
      categories:
        data?.map((price) => new Date(price.time_close * 1000).toUTCString()) ??
        [],
    },
    fill: {
      type: "gradient",
      gradient: {
        gradientToColors: ["#0be881"],
        stops: [0, 100],
      },
    },
    colors: ["#0fbcf9"],
    tooltip: {
      y: {
        formatter: (value) => `$${value.toFixed(2)}`,
      },
    },
  }}
/>
```

## 5.15 Final Touches

useQuery에서 유용한 기능인 refetching은 3번 째 argument에서 설정할 수 있습니다.

```tsx
const { isLoading, data } = useQuery<IHistorical[]>(
  ["ohlcv", coinId],
  () => fetchCoinHistory(coinId),
  {
    refetchInterval: 10000,
  }
);
```

그리고 Browser tab의 title을 바꾸고 싶은데, React Helmet을 사용해봅시다.

```bash
 npm i react-helmet
 npm i --save-dev @types/react-helmet
```

Helmet은 왜 쓸까요? Helmet Component는 index.html의 head를 수정합니다. Component로 수정할 수 있게 됩니다.

Helmet으로 title말고, CSS, favicon도 수정할 수 있습니다.

Helmet은 `<head>`로 가는 Direct link입니다.

```tsx
<Helmet>
  <title>
    {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
  </title>
</Helmet>
```

## 5.16 Conclusions

1. 뒤로가기 버튼
2. Price 탭
3. Chart에서 candlestick

## 6.0 Dark Mode part One

Recoil은 페이스북이 만들었습니다.

https://recoiljs.org/ko

state management가 뭘까요? state management는 왜 필요할까요?

도구와 기술은 문제를 해결하기 위해 만들어집니다. 문제를 직접 경험한다면, 도구와 기술도 더 잘 이해할 수 있게 됩니다.

다크모드/라이트모드를 Recoil없이 구현하려면 조금 수정해야 합니다.

ThemerPovider를 옮긴 이유는 state를 사용하기 위해서였습니다.

```tsx
function App() {
  const [isDark, setIsDark] = useState(true);
  const toggleDark = () => setIsDark((current) => !current);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <button onClick={toggleDark}>Toggle Theme</button>
        <GlobalStyle />
        <Router />
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
}
```

```tsx
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
    cardBgColor: string;
  }
}
```

```tsx
import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  bgColor: "#2f3640",
  textColor: "white",
  accentColor: "#9c88ff",
  cardBgColor: "transparent",
};

export const lightTheme: DefaultTheme = {
  bgColor: "whitesmoke",
  textColor: "black",
  accentColor: "#9c88ff",
  cardBgColor: "white",
};
```

## 6.1 Dark Mode part Two

원래는 ThemeProvider가 index에 있다가, App으로 옮겨졌습니다. 그래서 토글 버튼도 App에 만들었습니다.

그런데 이 토글 버튼을 Coins에 있는 Title 옆에 두고 싶습니다. 그러려면 App에 있는 setIsDark()를 Router를 거쳐 Coins까지 전달해야 합니다.

그리고 Chart는 가장 하위 컴포넌트인데, 만약 App에서 사용하는 isDark를 Chart에서도 사용하고 싶다면…?

물론 상위 컴포넌트에서 만든 상태를 엄청 아래아래 하위 컴포넌트까지 전달할 수도 있지만, 이게 복잡해진다면??? 컴포넌트가 만개라면?

```tsx
function App() {
  const [isDark, setIsDark] = useState(true);
  const toggleDark = () => setIsDark((current) => !current);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router isDark={isDark} toggleDark={toggleDark} />
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
}
```

```tsx
interface IRouterProps {
  toggleDark: () => void;
  isDark: boolean;
}

function Router({ toggleDark, isDark }: IRouterProps) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/:coinId">
          <Coin isDark={isDark} />
        </Route>
        <Route path="/">
          <Coins toggleDark={toggleDark} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
```

Global State가 해결책입니다. Global State는 어느 Component나 공유합니다.

예를 들어 isLogin 상태가 있다고 해봅시다. 로그인 상태는 다양한 컴포넌트가 관심있어 하는 상태입니다. 유저가 로그인을 했는지 안했는지 알고 싶은 컴포넌트는 꽤나 많을겁니다. 일일히 컴포넌트에 props로 넘겨줘야 할까요?

코드가 너무 복잡해지지 않을까요?

Global state는 Bubble을 연상하면 좋습니다.

## 6.2 Introduction to Recoil

Recoil에서는 Bubble이란 표현을 Atom으로 사용합니다.

설치는 쉽죠

```bash
npm i recoil
```

index.tsx에도 적용해줍시다.

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import { RecoilRoot } from "recoil";

const queyrClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queyrClient}>
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
);
```

그리고 atoms.ts를 만듭시다.

```tsx
import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "isDark",
  default: false,
});
```

App에서는 이렇게 사용합니다.

```tsx
function App() {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router />
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
}
```

## 6.3 Introduction to Recoil part Two

그러면 수정은 어떻게 하죠?

```tsx
const setterFn = useSetRecoilState(isDarkAtom);
```

```tsx
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDArkAtom = () => {
    setDarkAtom((prev) => !prev);
  };
  return (
      <Header>
        <Title>Crypto Tracker</Title>
        <button onClick={toggleDArkAtom}>Toggle Mode</button>
      </Header>
```

## 6.5 To Do Setup

새로운 프로젝트를 시작해봅시다.

```bash
npx create-react-app to-do-list --template typescript
npm i --save-dev @types/styled-components
npm i styled-components
npm i recoil
```

잠시 React Router, React Query는 잊어버리고, Recoil에 집중해봅시다.

우리 항상 하던 코드 만들어 봅시다.

```tsx
import { useState } from "react";

function ToDoList() {
  const [toDo, setToDo] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(toDo);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder="Write a to do" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
```

## 6.6 Forms

수 많은 form 라이브러리를 사용했지만 이건 최고입니다.

[https://react-hook-form.com](https://react-hook-form.com/)

```bash
npm install react-hook-form
```

form 작업은 지루합니다.

```tsx
import { useState } from "react";

function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDoError, setToDoError] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDoError("");
    setToDo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (toDo.length < 10) {
      return setToDoError("To do should be longer");
    }
    console.log("submit");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder="Write a to do" />
        <button>Add</button>
        {toDoError !== "" ? toDoError : null}
      </form>
    </div>
  );
}

export default ToDoList;
```

지금 form이 1개여서 그렇지, 입력이 50개면 이거 처리 다 해줘야 합니다…

바로 사용해봅시다.

```tsx
const { register } = useForm();
```

register에는 많은 기능이 있습니다. 그 전에 잠깐! HTML <input>에 대해 더 알아봅시다.

- onClick: input을 클릭했을때
- onChange: input에 입력할 때
- onBlur: input을 벗어났을 때

```tsx
function ToDoList() {
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div>
      <form>
        <input {...register("toDo")} placeholder="Write a to do" />
        <button>Add</button>
      </form>
    </div>
  );
}
export default ToDoList;
```

여러 개도 가능합니다!

```tsx
function ToDoList() {
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div>
      <form>
        <input {...register("Email")} placeholder="Email" />
        <input {...register("firstName")} placeholder="firstName" />
        <input {...register("lastName")} placeholder="lastName" />
        <input {...register("username")} placeholder="username" />
        <input {...register("password")} placeholder="password" />
        <input {...register("password1")} placeholder="password1" />
        <button>Add</button>
      </form>
    </div>
  );
}
export default ToDoList;
```

## 6.7 Form Validation

여러분의 길고 긴 onSubmit이 이렇게 짧아졌습니다.

```tsx
function ToDoList() {
  const { register, handleSubmit } = useForm();
  const onValid = (data: any) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input {...register("Email")} placeholder="Email" />
        <input {...register("firstName")} placeholder="firstName" />
        <input {...register("lastName")} placeholder="lastName" />
        <input {...register("username")} placeholder="username" />
        <input {...register("password")} placeholder="password" />
        <input {...register("password1")} placeholder="password1" />
        <button>Add</button>
      </form>
    </div>
  );
}
export default ToDoList;
```

Email을 반드시 입력하도록 하고 싶습니다. 둘은 뭐가 다를까요?

```tsx
        <input {...register("email")} required placeholder="email" />
        <input {...register("email", { required: true })} placeholder="email" />
```

1번은 HTML에서 제공하는 required기능을 사용합니다. 그런데 해커가 HTML을 수정해서 submit하면…? 막을 방법이 없습니다. 당해야죠 뭐.

그러나 2번은 라이브러리가 잘 처리해줍니다. 버튼 클릭 시, 입력되지 않은 input으로 커서가 이동합니다!
에러도 `formState.error`로 확인할 수 있습니다.

```tsx
const { register, handleSubmit, formState } = useForm();
const onValid = (data: any) => console.log(data);
console.log(formState.errors);
```

에러 처리를 아래처럼하고, 에러 메시지도 설정할 수 있습니다.

```tsx
<input
  {...register("password1", {
    required: "Password is required",
    minLength: {
      value: 5,
      message: "Your password is too short.",
    },
  })}
  placeholder="password1"
/>
```

## 6.8 Form Errors

Regular Expression에 대해서도 알아봅시다.

```
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="email"
        />
```

```tsx
type IFormData = {
  errors: {
    email: {
      message: string;
    };
  };
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  password1: string;
};

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    defaultValues: {
      email: "@naver.com",
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      password1: "",
    },
  });
  const onValid = (data: any) => console.log(data);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", { required: "write here" })}
          placeholder="firstName"
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register("lastName", { required: "write here" })}
          placeholder="lastName"
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register("username", { required: "write here", minLength: 10 })}
          placeholder="username"
        />
        <span>{errors?.username?.message}</span>
        <input
          {...register("password", { required: "write here", minLength: 5 })}
          placeholder="password"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("password1", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your password is too short.",
            },
          })}
          placeholder="password1"
        />
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
      </form>
    </div>
  );
}
export default ToDoList;
```

초기 값도 설정해 줄 수 있습니다.

```tsx
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<IFormData>({
  defaultValues: {
    email: "@naver.com",
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    password1: "",
  },
});
```

## 6.9 Custom Validation

이전 에러처리는 React Hook Form이 지원하는 에러처리입니다. 이것들을 다 통과하고 난 후 발생한 API오류는 직접 처리해줘야 합니다. 어떻게 할까요~~

onSubmit에 handleSubmit을 사용합시다.

```tsx
type IForm = {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  password1: string;
  extraError?: string;
};

function ToDoList() {;
  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      return setError("password1", { message: "Password are not the same" });
    }
    setError("extraError", { message: "Extra error" });
  };
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
```

커서를 특정할 수도 있습니다.

```tsx
const onValid = (data: IForm) => {
  if (data.password !== data.password1) {
    return setError(
      "password1",
      { message: "Password are not the same" },
      { shouldFocus: true }
    );
  }
  setError("extraError", { message: "Extra error" });
};
```

특정 입력만 Error를 일으킬 수도 있습니다.

```tsx
        <input
          {...register("firstName", {
            required: "write here",
            validate: {
              noNiko: (value) =>
                value.includes("nico") ? "no nicos allowed" : true,
              noNick: (value) =>
                value.includes("nick") ? "no nick allowed" : true,
            },
          })}
          placeholder="firstName"
        />
        <span>{errors?.firstName?.message}</span>
```

## 6.10 Recap

복습시간, 다시 해봅시다. 기억해야 할 것, `register`, `handleSubmit`, `setValue`

```tsx
// import { useState } from "react";
import { useForm } from "react-hook-form";

interface IData {
  toDo: string;
}

function ToDoList() {
  const { register, handleSubmit, setValue } = useForm<IData>();
  const handleValid = (data: IData) => {
    console.log(data);
    setValue("toDo", "");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "Please write a To Do",
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
    </div>
  );
}
export default ToDoList;
```

## 6.11 Add To Do

와 `useRecoilState()` 참 `useState()` 닮았다 그쵸?

```tsx
import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

interface IData {
  toDo: string;
}

interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

function ToDoList() {
  const [toDos, setTodos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IData>();
  const handleValid = ({ toDo }: IData) => {
    setTodos([{ text: toDo, id: Date.now(), category: "TO_DO" }, ...toDos]);
    setValue("toDo", "");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "Please write a To Do",
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
}
export default ToDoList;
```

여기서 주의할 점! Global state toDos는 타입이 never입니다. 왜냐! 타입이 안정해져있죠? 정해줍시다.

```tsx
interface IToDo {
  text: string;
  category: "TO_DO" | "DOING" | "DONE";
}

const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});
```

## 6.12 Refactoring

할 일 완료 기능을 추가해봅시다. 그 전에 Component를 분리해봅시다.

```tsx
import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoState);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}
export default ToDoList;
```

```tsx
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";

interface IData {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IData>();
  const handleValid = ({ toDo }: IData) => {
    setToDos((oldTodos) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...oldTodos,
    ]);
    setValue("toDo", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Please write a To Do",
        })}
        placeholder="Write a to do"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;
```

분리하면서 버튼도 만들어봅시다.

```tsx
import { IToDo } from "../atoms";

function ToDo({ text }: IToDo) {
  return (
    <li>
      <span>{text}</span>
      <button>Doing</button>
      <button>To Do</button>
      <button>Done</button>
    </li>
  );
}

export default ToDo;
```

## 6.13 Categories

- 카테고리 기능 만들기
- 버튼 누르면 카테고리가 변경됨

어떤 버튼을 눌렀는지 onClick이 알 수 있는 방법은~~~ onClick에 인자 전해주기, 혹은 button의 name attribute로 전해주기

편한걸로 하세요~

```tsx
import { IToDo } from "../atoms";

function ToDo({ text, category }: IToDo) {
  const onClick = (newCategory: IToDo["category"]) => {
    console.log(newCategory);
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button onClick={() => onClick("DOING")}>Doing</button>
      )}
      {category !== "TO_DO" && (
        <button onClick={() => onClick("TO_DO")}>To Do</button>
      )}
      {category !== "DONE" && (
        <button onClick={() => onClick("DONE")}>Done</button>
      )}
    </li>
  );
}

export default ToDo;
```

```tsx
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          To Do
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;
```

## 6.14 Immutability part One

전에 버튼 누르면 어떤 버튼 눌렀는지 onClick이 이제 알 수 있으니까, Global state인 toTos안에 있는 toDo의 category를 바꿉시다.

```tsx
setToDos((oldToDos) => {
  const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
  const oldToDo = oldToDos[targetIndex];
  const newToDo = { text, id, category: name };
  return oldToDos;
});
```

## 6.15 Immutability part Two

slice를 사용해서 newToDo로 삭 교채해봅시다.

```tsx
return [
  ...oldToDos.slice(0, targetIndex),
  newToDo,
  ...oldToDos.slice(targetIndex + 1),
];
```

```tsx
const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  const {
    currentTarget: { name },
  } = event;
  setToDos((oldToDos) => {
    const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
    const oldToDo = oldToDos[targetIndex];
    const newToDo = { text, id, category: name as any };
    return [
      ...oldToDos.slice(0, targetIndex),
      newToDo,
      ...oldToDos.slice(targetIndex + 1),
    ];
  });
};
```

## 6.16 Selectors part One

selector… 슬슬 머리에 과부하가 오지만, 조금 더 해봅시다.

Global State에 배열 값을 담고있는데, 배열의 카테고리가 여러개입니다. 근데 딱히 global state를 더 만들고 싶진 않고 분류는 하고 싶다면 바로 selector를 사용할 때입니다.

```tsx
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    return "hello";
  },
});
```

근데 아직까진 뭐하는지 잘 모르겠군요. 더 봅시다.

```tsx
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    return [
      toDos.filter((toDo) => toDo.category === "TO_DO"),
      toDos.filter((toDo) => toDo.category === "DOING"),
      toDos.filter((toDo) => toDo.category === "DONE"),
    ];
  },
});
```

오호… 2차원 배열로 분리해서 저장하고 있네요?

```tsx
function ToDoList() {
  const [toDo, doing, done] = useRecoilValue(toDoSelector);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <h2>To Do</h2>
      <ul>
        {toDo.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
    </div>
  );
}
```

selector의 핵심은 state를 바꾸지 않고 output만 바꾸는 겁니다.

## 6.17 Selectors part Two

selector는 다시 말하지만 state를 바꾸지 않고, state를 분류할 수 있습니다.

이번에 해볼 것은 HTML select를 만들어서 해당 category만 rendering하는 겁니다.

```tsx
export const categoryState = atom({
  key: "category",
  default: "TO_DO",
});
```

```
function ToDoList() {
  const [toDo, doing, done] = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select onInput={onInput}>
        <option value="TO_DO">To Do</option>
        <option value="DOING">Doing</option>
        <option value="DONE">Done</option>
      </select>
      <CreateToDo />
      {category === "TO_DO" &&
        toDo.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}
      {category === "DOING" &&
        doing.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}
      {category === "DONE" &&
        done.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}
    </div>
  );
}

```

어유 근데 복잡시렵다. 코드 중복을 제거해봅시다. 훨씬 낫습니다!!!

```tsx
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
```

```tsx
function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select onInput={onInput}>
        <option value="TO_DO">To Do</option>
        <option value="DOING">Doing</option>
        <option value="DONE">Done</option>
      </select>
      <CreateToDo />
      {toDos.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
```

다음 시간에는 select에서 보고있는 category로 바로 To Do 가 생성되는 기능을 추가해봅시다.

## 6.18 Enums

select에서 보고있는 category로 바로 To Do 가 생성되는 기능을 추가해봅시다. 별로 어렵지 않습니다. Global state를 가져와서 넣어주기만 하면 됩니다.

```tsx
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IData>();
  const handleValid = ({ toDo }: IData) => {
    setToDos((oldTodos) => [
      { text: toDo, id: Date.now(), category: category },
      ...oldTodos,
    ]);
```

그런데 IToDo의 category가 Literal인게 맘에 들지 않습니다.

```tsx
export interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}
```

type을 만들어줍시다.

```tsx
type categories = "TO_DO" | "DOING" | "DONE";

export interface IToDo {
  text: string;
  id: number;
  category: categories;
}
```

그냥 Enum이 최고입니다. TypeScript에서 지원합니다.

```tsx
export enum Categories {
  TO_DO = "To Do",
  DOING = "Doing",
  DONE = "Done",
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}
```

## 6.19 Recap

숙제

- localStorage, recoil-persist
- Delete

앞으로 추가해 볼 내용

- selector set
- 마우스 이동

# 7 TRELLO CLONE

## 7.0 Get Selectors

이전 것 지우고 새로 만들어봅시다. minute에 입력하면 hour가 바뀌는 프로그램입니다.

```tsx
import { atom, selector } from "recoil";

export const minuteState = atom({
  key: "minuteState",
  default: 0,
});

export const hourSelector = selector({
  key: "hours",
  get: ({ get }) => {
    const minute = get(minuteState);
    return Math.floor(minute / 60);
  },
});
```

```tsx
import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function App() {
  const [minute, setMinute] = useRecoilState(minuteState);
  const hour = useRecoilValue(hourSelector);
  const onMinuteChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinute(+event.currentTarget.value);
  };
  return (
    <div>
      <input
        value={minute}
        onChange={onMinuteChange}
        type="number"
        placeholder="Minutes"
      />
      <input value={hour} type="number" placeholder="Hours" />
    </div>
  );
}

export default App;
```

## 7.1 Set Selectors

이제 hour에 입력하면 minute이 바뀌도록 하고 싶어요. 자~ 드디어 Recoil selector의 set 들어갑니다.

hours를 변경하면 selector의 set이 minutes atom을 변경하고 그 변경된 minutes를 보고 selector의 get으로 받아서 다시 rendering됩니다.

selector는 여러개의 atom과 상호작용할 수 있습니다.

```tsx
import { atom, selector } from "recoil";

export const minuteState = atom({
  key: "minuteState",
  default: 0,
});

export const hourSelector = selector<number>({
  key: "hours",
  get: ({ get }) => {
    const minute = get(minuteState);
    return Math.floor(minute / 60);
  },
  set: ({ set }, newValue) => {
    const minutes = Number(newValue) * 60;
    set(minuteState, minutes);
  },
});
```

```tsx
import { useRecoilState } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);
  const onMinuteChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };

  return (
    <div>
      <input
        value={minutes}
        onChange={onMinuteChange}
        type="number"
        placeholder="Minutes"
      />
      <input
        value={hours}
        onChange={onHoursChange}
        type="number"
        placeholder="Hours"
      />
    </div>
  );
}

export default App;
```

## 7.2 Drag and Drop part One

react-beautiful-dnd 아주 유명합니다!!!

- <DragDropContext>
- <Draggable>
- <Droppable>

일단 모르겠지만 따라해보기!

```tsx
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function App() {
  return (
    <DragDropContext onDragEnd={() => {}}>
      <div>
        <Droppable droppableId="one">
          {() => (
            <ul>
              <Draggable draggableId="first" index={1}>
                {() => <li>One</li>}
              </Draggable>
              <Draggable draggableId="first" index={1}>
                {() => <li>Two</li>}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default App;
```

### sugar’s tip

react-beautiful-dnd: React로 list를 만들기 위한 아름답고 접근 가능한 드래그 앤 드롭

https://www.npmjs.com/package/react-beautiful-dnd

https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/about/installation.md

```tsx
npm i react-beautiful-dnd
npm i --save-dev @types/react-beautiful-dnd
```

react-beautiful-dnd 테스트해 보기: https://react-beautiful-dnd.netlify.app/iframe.html?id=board--simple

react-beautiful-dnd 예시 코드: https://codesandbox.io/s/k260nyxq9v

DragDropContext: https://github.com/LeeHyungGeun/react-beautiful-dnd-kr

## 7.3 Drag and Drop part Two

`Droppable`과 `Draggable`의 children으로 `() => {}`를 한 이유는, dnd에서 제공하는 props를 사용하기 위해서였습니다.

조금 복잡한데, 찬찬히 봐봅시다. 아래처럼 작성하면 li를 움직일 수 있습니다.

React 18 StrictMode와 호환이 안되서 지워줍시다.

```tsx
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function App() {
  return (
    <DragDropContext onDragEnd={() => {}}>
      <div>
        <Droppable droppableId="one">
          {(magic) => (
            <ul ref={magic.innerRef} {...magic.droppableProps}>
              <Draggable draggableId="first" index={1}>
                {(magic) => (
                  <li
                    ref={magic.innerRef}
                    {...magic.draggableProps}
                    {...magic.dragHandleProps}
                  >
                    One
                  </li>
                )}
              </Draggable>
              <Draggable draggableId="second" index={2}>
                {(magic) => (
                  <li
                    ref={magic.innerRef}
                    {...magic.draggableProps}
                    {...magic.dragHandleProps}
                  >
                    Two
                  </li>
                )}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default App;
```

특정 부분을 클릭해야만 움직일 수 있도록 바꿀 수도 있습니다.

```tsx
              <Draggable draggableId="first" index={0}>
                {(magic) => (
                  <li ref={magic.innerRef} {...magic.draggableProps}>
                    <span {...magic.dragHandleProps}>🔥</span>
                    One
                  </li>
                )}
              </Draggable>
              <Draggable draggableId="second" index={1}>
                {(magic) => (
                  <li ref={magic.innerRef} {...magic.draggableProps}>
                    <span {...magic.dragHandleProps}>🔥</span>
                    Two
                  </li>
                )}
              </Draggable>
```

## 7.4 Styles and Placeholders

이제 CSS를 만져서 좀 그럴듯하게 만들어봅시다.

toDos를 만들고, placeholder를 추가했습니다. placeholder는 draggable을 움직여도 droppable의 height이 변하지 않도록 유지해주는 기능입니다.

```tsx
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
`;

const Board = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
`;

const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  padding: 10px 10px;
  border-radius: 5px;
  margin-bottom: 5px;
`;

const toDos = ["a", "b", "c", "d", "e", "f"];

function App() {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {(magic) => (
              <Board ref={magic.innerRef} {...magic.droppableProps}>
                {toDos.map((toDo, index) => (
                  <Draggable draggableId={toDo} index={index}>
                    {(magic) => (
                      <Card
                        ref={magic.innerRef}
                        {...magic.draggableProps}
                        {...magic.dragHandleProps}
                      >
                        {toDo}
                      </Card>
                    )}
                  </Draggable>
                ))}
                {magic.placeholder}
              </Board>
            )}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
```

## 7.5 Reordering

`onDragEnd()`는 Drag가 끝날 때 실행되는 함수입니다.

Global state도 만들어봅시다.

```tsx
import { atom } from "recoil";

export const toDoState = atom({
  key: "toDo",
  default: ["a", "b", "c", "d", "e", "f"],
});
```

## 7.6 Reordering part Two

JavaScript의 mutation

[**Why can't I directly modify a component's state, really?**](https://stackoverflow.com/questions/37755997/why-cant-i-directly-modify-a-components-state-really)

```tsx
const [toDos, setToDos] = useRecoilState(toDoState);
const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
  setToDos((oldToDos) => {
    if (!destination) {
      return oldToDos;
    }
    const copyToDos = [...oldToDos];
    copyToDos.splice(source.index, 1);
    copyToDos.splice(destination.index, 0, draggableId);
    return copyToDos;
  });
};
```

DND에서 주의할 점은 `key`와 `draggableId`가 같아야 합니다.

```tsx
<Board ref={magic.innerRef} {...magic.droppableProps}>
  {toDos.map((toDo, index) => (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(magic) => (
        <Card
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  ))}
  {magic.placeholder}
</Board>
```
