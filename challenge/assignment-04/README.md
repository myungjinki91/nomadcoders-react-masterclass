# Recoil

- 오늘의 강의: React JS 마스터클래스: From #6.0 to #6.19
- 오늘의 과제: 위의 강의를 시청하신 후, 아래 코드 챌린지를 제출하면 됩니다.
- 제출기간: 3일 챌린지! 목요일 오전 6시까지

## Code Challenge:

- #6.0 ~ #6.19를 수강하고, 강의에서 만든 To Do List에, Recoil을 사용하여 아래의 두 가지 기능을 추가해주세요.
- 유저가 커스텀 카테고리를 생성할 수 있는 기능.
- localStorage를 사용하여, 새로고침을 했을 때 이전의 데이터가 유지되는 기능(persistance).

## 참고사항:

- 이번 챌린지는 github.io를 사용해 배포 후, 제출하게 됩니다. 해당 강의를 참조해주세요!

## 제출방법

- 제출기간: 3일 챌린지! 목요일 오전 6시까지
- Github.io 링크로 제출해주세요!

# TA's 힌트

## 카테고리 추가 기능

- React-hook-form을 이용해 새로운 카테고리의 제목을 받는 input을 만들어줍니다.
- onSubmit일 때, 작동할 콜백함수인 onValid를 작성합니다. 해당 콜백함수는 input에 들어온 text값을 key값으로, value에는 빈 Array를 추가하는 기능을 가지고 있어야 합니다.

## Recoil에 영속성 부여하기

- recoil-persist는 Recoil 데이터에 영속성을 부여해주는 hook입니다. 단, 3줄의 코드로 state에 영속성을 부여할 수 있습니다.
- recoil-persist 공식문서 참조
- 혹시 localStorage에 저장되는 키 값을 직접 설정하고자 한다면, 아래와 같이 presistAtom을 설정하실 때 key값을 부여하시면 됩니다. 다만, 여러 키 값을 사용해야 하는 경우가 아니라면, 해당 코드를 사용할 필요는 없습니다.

## 이외의 힌트

- State가 Array 또는 Object형태라면, 스프레드 연산자(Spread Operator)를 이용해 State를 수정해주어야 합니다.
- Spread Operator 공식문서 참조
- Object.keys()는 Obeject의 Key값을 배열로 return 해줍니다.
- Object.keys() 공식문서 참조