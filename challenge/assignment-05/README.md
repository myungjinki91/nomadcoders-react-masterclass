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
