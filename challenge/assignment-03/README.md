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
