# Motion

- 오늘의 강의: React JS 마스터클래스: From #8.0 to #8.16
- 오늘의 과제: 위의 강의를 시청하신 후, 아래 코드 챌린지를 제출하면 됩니다.
- 제출기간: 2일 챌린지! 48시간. 토요일 오전 6시까지

Here are some of the best To Do submissions! 모든 수고하셨습니다!:

- https://bamichoi.github.io/todo/ 🔥
- https://hs04111.github.io/react_second_challenge_todo/ 🔥
- https://seojunhwan.github.io/ToDo_React/ 🔥
- https://scvd03.github.io/recoil-todolist/ 🔥
- https://givvemee.github.io/Trello_TodoTracker/ 🔥
- https://bravacoreana.github.io/to-do-list/ 🔥

## Code Challenge:

- #8.0 ~ #8.16을 수강하고, Framer-motion을 이용해 영상에 보이는 것과 동일한 애니메이션을 제작해주세요.
- ![](kqL53Q9.mp4)

## Hints:

- Use layoutId
- Use AnimatePresence
- Use variants

## 제출방법

- 코딩 챌린지는 CodeSandbox 라는 툴을 이용하여 제출합니다.
- 위의 스크린을 재현한 후 해당 링크를 제출하면 됩니다.
- 제출기간: 2일 챌린지! 48시간. 토요일 오전 6시까지
- https://codesandbox.io/p/sandbox/practical-bhaskara-sk1ik

# TA's 힌트

구현해야 할 motion은 크게 세 가지입니다.

## 1. Circle 컴포넌트의 이동 motion.

- Circle 컴포넌트에 각각 `삼항연산자를 적용`해줍니다. state에 따라 `Circle컴포넌트` 또는 `null`을 return하면 됩니다.
- Switch 버튼을 생성하고, onClick 콜백함수로 `prev=>!prev`를 적용해줍니다.
- 이때, 두 개의 Circle에 동일한 `layoutId`를 부여해줍니다. 렌더링되는 컴포넌트가 교체될 때, 원이 이동하는 motion이 생성됩니다.

## 2. Hover된 컴포넌트의 크기가 커지는 motion.

- 잘 보시면 크기만 커지는 것이 아닙니다. `위치`에 따라 `커지는 방향`이 결정됩니다.
- 이를 구현하기 위해서는 custom과 variants를 조합하여, 위치에 따른 조건부 motion을 부여하면 구현이 가능합니다.
- [Framer Motion 공식문서 참조](https://www.framer.com/docs/component/##advanced)

## 3. 선택된 Box 컴포넌트를 중앙으로 이동하며 Overlay가 깔리는 motion.

- `Box 컴포넌트`는 onClick `콜백 함수`를 갖습니다. 해당 콜백함수는 `클릭 된 컴포넌트`의 `layoutId`를 가져와 `Overlay 내부`에 존재하는 `Box 컴포넌트`에 해당 `layoutId`를 전달해주어야 합니다. 두 컴포넌트에 동일한 layoutId를 부여함으로써 overlay가 마운트, 언마운트 될 때 영상과 같은 motion을 구현할 수 있습니다.
- `Overlay 컴포넌트`는 onClick `콜백 함수`를 갖습니다. 해당 콜백함수는 Overlay에 내부에서 사용되는 `layoutId state`를 null로 변경해 Overlay 컴포넌트를 언마운트하고 다시 원래 화면으로 돌아갑니다.
- Overlay 컴포넌트는 부모 컴포넌트로 `AnimatePresence`를 갖습니다. `언마운트(exit) 되는 시점에서의 motion이 필요하기 때문`입니다.
- `Overlay 컴포넌트는 삼항연산자를 사용`합니다. Box가 클릭 되어 layoutId state가 존재할 때, Overlay를 렌더링하며, Overlay를 다시 클릭하여 state를 null값으로 바꿈으로써 Overlay를 언마운트합니다.

## 추가적인 팁

- 힌트에서 언급한 방법뿐 아니라, 다양한 방법으로 애니메이션을 구현할 수 있습니다. 여러분들만의 풀이를 만들어보세요! 😊
- 사라지는 Component에 animation(motion)을 부여하고자 한다면, AnimatePresence를 사용해보세요!
- [AnimatePresence 공식문서 참고](https://www.framer.com/docs/animate-presence/)

# TA's 정답해설

## TA's Solution #2

- https://codesandbox.io/s/zen-worker-eupoj5?file=/src/App.js
- 해당 챌린지를 해결하는 솔루션은 여러 가지가 존재합니다. 해설에서 사용하는 방법은 `각 컴포넌트에 id를 부여하는 방식`으로 진행해보겠습니다.

## Circle 컴포넌트의 이동 motion.

- 토글 버튼을 생성해줍니다.
- Boolean state를 하나 생성해줍니다. 해당 state는 true일 경우, 두 번째 컴포넌트의 Circle을, false일 경우 세 번째 컴포넌트의 Circle을 렌더링해야 합니다.
- State의 값에 따라 조건적인 렌더링을 위해, 아래와 같이 Box의 컴포넌트 내부에 삼항연산자를 적용해주도록 합시다.

![](https://i.imgur.com/TDYmU4b.png)

## Hover된 컴포넌트의 크기가 커지는 motion.

- 해당 기능을 구현하기 위해 custom 프로퍼티를 사용하여, variants 내부에서 조건에 따라 서로 다른 animation을 적용해보도록 하겠습니다.

![](https://i.imgur.com/uGu3hGf.png)

- 위의 코드에 대해 살펴보겠습니다. 위 코드는 1에서 4의 id가 담겨있는 Array에 map을 사용해 컴포넌트를 렌더링합니다. 이때, 각 컴포넌트는 hover의 motion을 부여하기 위한 hoverVariants(하단 사진 코드)를 가지며, whileHover일 때 variants의 hover상태를 적용해줍니다. Transition은 type은 linear을 적용해주었습니다. 가장 중요한 custom입니다. whileHover 상태일 때, 적용되는 hover은 아래와 같이 조건부로 적용되게 해두었습니다. 따라서 custom의 값이 무엇이냐에 따라 적용되는 animation(motion)에 차이가 발생합니다.

![](https://i.imgur.com/mhOeHQY.png)

- 요컨대 1,2,3,4의 Array에 map을 사용해 렌더링한 각 컴포넌트는 각각 1,2,3,4의 custom 값을 가진 컴포넌트가 됩니다. 따라서 whileHover 상태일 때, 적용되는 hoverVar은 hover될 경우 scale이 1.2가 되며, 1,3번째 박스(왼쪽 박스)일 경우 x로 -25. 2,4번째 박스(오른쪽 박스)일 경우 x로 25 이동합니다. 또한, 1,2번째 박스(위쪽 박스)일 경우 y로 -15. 3,4번째 박스(아래 박스)일 경우 y로 15로 이동하는 코드입니다.

## 선택된 Box 컴포넌트를 중앙으로 이동하며 Overlay가 깔리는 motion.

- 컨셉은 다음과 같습니다. Box를 클릭했을 때, Overlay의 z-index를 최우선순위에 두며, Overlay 컴포넌트 내부에 Box 컴포넌트 하나를 렌더링합니다. 이때, 클릭한 컴포넌트와 Overlay 내부의 Box 컴포넌트가 동일한 Box인 것처럼 보여주기 위해, 두 컴포넌트에 동일한 layoutId를 부여해주어야 합니다.
- 필자 이를 구현하기 위해 다음과 같은 방법을 사용했습니다. 우선 State를 하나 생성합니다.
- `const [id, setId] = React.useState(null)`
- 우리는 Box 컴포넌트를 클릭할 때, setId를 통해 클릭 된 컴포넌트의 id를 새로운 id 값으로 부여할 것입니다. 그리고 아래의 삼항연산자를 통해 Overlay를 렌더링합니다.

![](https://i.imgur.com/GBU7K1o.png)

- Overlay 내부에 선언된 overlayHandler는 한 가지 조건만 만족하면 됩니다. Overlay 컴포넌트를 클릭했을 때, setId라는 modifier를 통해 다시 id를 null 값으로 돌려놓을 것.

![](https://i.imgur.com/tW4oYxH.png)
