# Crypto Tracker
- 오늘의 강의: React JS 마스터클래스: From #5.0 to #5.16
- 오늘의 과제: 위의 강의를 시청하신 후, 아래 코드 챌린지를 제출하면 됩니다.
- 제출기간: 3일 챌린지! 72시간. 토요일 오전 6시까지
- Watch all the section #4 and complete the code challenge.

## Code Challenge:
- 누르면 다크모드가 적용되는 토글 버튼을 만들어주세요.
- /:coinId에서 홈으로 돌아갈 수 있는 버튼을 만들어주세요.
- 강의에서 구현하지 않은 Coin의 /:coinId/price탭을 구현해주세요.
- /:coinId/chart탭의 차트 형식을 CandleStick 형식으로 변경해주세요.
- [챌린지 설명 보기](https://nomadcoders.co/react-masterclass/lectures/3327)

## 참고사항:

- 이번 챌린지는 github.io를 사용해 배포 후, 제출하게 됩니다. [해당 강의](https://nomadcoders.co/react-for-beginners/lectures/3293)를 참조해주세요!
- [CandleStick 차트란?](https://apexcharts.com/react-chart-demos/candlestick-charts/basic/)

## 제출방법

- 제출기간: 3일 챌린지! 72시간. 토요일 오전 6시까지
- Github.io 링크로 제출해주세요!
- 챌린지는 어떠신가요? [피드백 남겨주세요](https://docs.google.com/forms/d/e/1FAIpQLSexB-UyToiVN_TNJ21XYCkKT0ec5jY51AJ2ybZUYwRFUiqi_g/viewform)
- 토.일은 휴일입니다. 야호!

# TA's 힌트

## react-query 설치 변경사항

- [react-query 공식문서 참조](https://tanstack.com/query/v4/docs/overview)

```
npm i @tanstack/react-query --save --legacy-peer-deps
import {} from '@tanstack/react-query'
const { data, isLoading } = useQuery([“queryKey”], queryFunction);
```

## 다크모드

- 다크모드는 recoil과 ThemeProvider로 구현할 수 있습니다. 방식은 아래와 같습니다.
- theme.tsx에 dark/light 두 가지 theme 생성.
- ThemeProvider적용 및 GlobalStyle과 theme 연결.
- 토글 버튼을 눌렀을 때, state가 변경.
- ThemeProvider의 theme 프로퍼티 내부에 삼항연산자를 이용해 state가 변할 때 다른 Theme이 적용되도록 설정.

## CandleStick

- Chart를 CandleStick으로 나타내기 위해선, data에 두 가지 인수(x,y)를 전달해줘야 합니다. x는 x축의 이름, y는 [open, high, low, close]가 순서대로 담긴 배열입니다.
- 기존의 방식과는 달리 전달해야 할 데이터가 약간 복잡합니다. 그렇다면, 우리는 아래와 같이 외부에서 변수를 선언 및 가공한 후, 전달하는 것을 고려해보는 것이 좋습니다.
- ![](https://i.imgur.com/x3zgfYs.png)
- [ApexChart-CandleStick 공식문서 참조](https://apexcharts.com/react-chart-demos/candlestick-charts/basic/)
- ApexChart의 공식 Docs DB가 자주 날아갑니다. 접속되지 않는다면 가장 하단의 사진을 참고해주세요!

## 이외의 팁

- Coin탭은 Chart와 Price를 render하기 위해 중첩 라우팅을 사용해야 합니다. 중첩 라우팅에는 두 가지 방식이 있습니다.
    - V6 Descendant Routes(강의Ver) [Descendant Routes 공식문서 참조](https://reactrouter.com/docs/en/v6/getting-started/overview#descendant-routes)
    - V6 Nested Route [Nested Route 공식문서 참조](https://reactrouter.com/docs/en/v6/getting-started/overview#nested-routes)
- V5로 구현할 경우, Routes를 Switch로 바꿔주신 뒤, 각 Route 컴포넌트에 렌더링을 할 컴포넌트를 넣어주시면 됩니다.
- React에서 Home과 같은 특정 페이지로 이동해야 할 때, <a>를 사용하는 건 좋은 방법이 아닙니다. <Link />를 사용해봅시다!
- [<Link> 공식문서 참조](https://reactrouter.com/docs/en/v6/components/link)
- Coin의 데이터를 fetch 할 땐, react-query를 사용합니다. queryFunction 자리에는 fetch를 사용하는 promise 함수가 들어갑니다.
- [react-query 공식문서 참조](https://tanstack.com/query/v4/docs/adapters/react-query)

## ApexChart - CandleStick Chart

- ![](https://i.imgur.com/IfxzUFl.png)
- ![](https://i.imgur.com/FoTytuC.png)

# TA's 정답해설

## 1. 다크/라이트 토글 버튼

- 우선, 다크 / 라이트 테마에 적용될 styled-components theme을 만들어 주어야 합니다. theme.tsx에 아래와 같이 lightTheme과 darkTheme을 생성합니다.

![](https://i.imgur.com/MY0C1zg.png)

- 우리는 두 Theme에 대한 타입을 선언 해주어야 합니다. 강의에서 사용된 방식은 Ambient Modules방식입니다. 우선 styled.d.ts 파일을 생성해준 뒤, 아래와 같이 styled를 import하고 DefaultTheme이라는 interface를 선언해줍니다.
- [Ambient Modules 공식문서 참조](Ambient Modules 공식문서 참조)

![](https://i.imgur.com/wXcz5XH.png)

- createGlobalStyle을 통해 현재의 theme을 전역적으로 적용하도록 합시다. body(혹은 theme을 적용하고자 하는 컴포넌트)의 background와 color에 각각 props.theme.변수명을 연결해줍니다.
- 다크모드를 확인하기 위한 atom 생성합니다. 우리가 구현하려고 하는 다크모드는 Dark/Light라는 두 개의 테마를 가집니다. 따라서 boolean값을 통해 true인 경우 dark모드, false인 경우 light모드를 적용하시면 됩니다. Atom의 이름은 isDark와 같은 직관적인 이름을 사용하는 것이 좋습니다.
- 토글 버튼의 onClick에 clickHandler를 달아줍시다. 클릭 이벤트가 발생할 경우, recoil의 state를 반대로 바꾸어주시면 됩니다. ()=>{setIsDark((prev) => !prev)}
- ThemeProvider의 theme 프로퍼티 내부에 삼항연산자를 사용해봅시다.theme = { isDark? darkTheme : lightTheme } recoil의 값이 true일 경우 dark모드를, false일 경우 light모드가 적용됩니다.

## 2. 홈으로 돌아가는 버튼

- Anchor 대신 Link 태그를 사용하는 것은 그리 어려운 일이 아닙니다.

```jsx
<Link to={"/"}>Home &rarr;</Link>
```

- 다만, 그 이유를 아는 것이 중요하다고 생각됩니다. React는 엄청난 효율성을 자랑합니다. state가 변할 경우, 해당 컴포넌트만을 re-render하기 때문입니다. 반면, <a>는 페이지 이동 간에 새로고침을 유발합니다. 새로고침에 발생함에 따라, 모든 컴포넌트는 re-rendering되며 모든 state가 초기화됩니다. 따라서, React를 사용하는 우리는 anchor대신 <Link>라는 친구에게 익숙해지는 것이 좋습니다.

## 3. 중첩 라우팅(Nested Routing)

- 중첩 라우팅을 구현하는 방식 크게 Nested Route 방식과 Descendant Routes 방식으로 나뉩니다.
- Nested Route 방식(V6)은 하나의 Switch(또는 Routes) 안의 Route 내부에 또 다른 Route를 넣음으로써 모든 Route의 경로를 사전에 구성하는 방식입니다. 해당 방식은 <Outlet />을 이용해 컴포넌트를 렌더링 할 위치를 결정합니다.
- 한편, 수업에서는 Descendant Route 방식을 채택합니다. 해당 방식은 하위 Route가 없는 Route들로 구성된 여러 Switch(또는 Routes)를 생성한 뒤, Route의 컴포넌트 내부에 다시 Switch(Routes)를 할당하는 방식입니다. 대신 Route의 하위 컴포넌트에 또 다른 Switch(Routes)를 사용하기 위해, 상위 Route의 path의 마지막에 “/*”를 명시해주어야 합니다.

## 4. ApexChart(CandleStick)

- CandleStick은 아래의 형식대로 데이터를 받습니다.

![](https://i.imgur.com/6vzkzPW.png)

- series 내부에서 데이터를 가공하기엔 너무 복잡해지는 경향이 있기 때문에, 컴포넌트 외부에서 data를 가공 및 예외 처리를 진행한 뒤, 전달해주도록 합시다.

![](https://i.imgur.com/x3zgfYs.png)

- 예외 처리를 위해, 널 병합 연산자와 옵셔널 체이닝을 사용합니다. “??”라는 연산자는 널 병합 연산자(Nullish Coalescing Operator)라고 합니다.
- Nullish coalescing operator 공식문서
- 데이터 가공을 완료했다면, 아래와 같이 넣어주시면 됩니다. :)

![](https://i.imgur.com/uDCwHwV.png)

## 5. 결론

- 첫 코드 챌린지는 잘 완료하셨나요?🥰 ReactMasterClass 챌린지에서 가장 중요한 것은 강의를 미리 수강하고 챕터 마지막의 과제를 수행하는 것이라 생각됩니다.
- 해당 과제들이 챌린지의 내용이기 때문이지요!!😆
- 첫 코드 챌린지를 수행하시느라 고생 많으셨습니다. 남은 챌린지도 화이팅입니다!! :)