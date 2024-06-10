# Quiz: Styled Components

- 오늘의 강의: React JS 마스터클래스: From #2.0 to #2.7
- 오늘의 과제: 위의 강의를 시청하신 후, 아래 퀴즈를 풀면 됩니다.
- 제출기간: 익일 오전 6시까지
- 퀴즈는 단 1회만 응할 수 있습니다.

## QUESTION 1 OF 7

Is this valid styled components code?

const Box = styled.div`
    backgroundColor:"red",
    width:200,
    height:200,
`;

## QUESTION 2 OF 7

When we do this:

```js
const Text = styled.span`
    color:tomato;
`;
```

The resulting element will have a style tag like this:

<span style="color:tomato;"></span>

## QUESTION 3 OF 7

Can styled components receive custom props?

Yes.

## QUESTION 4 OF 7

If I send a textColor prop to my styled component, how can I use it on the styles?

color: ${props => props.textColor};

## QUESTION 5 OF 7

How can I extend a styled component?

const B = styled(A)``;

## QUESTION 6 OF 7

What does the ‘as’ prop do?

It changes the component's resulting HTML tag

## QUESTION 7 OF 7

Is doing this:

```js
span {
    color:blue;
    &:hover {
        color:red;
    }
}
```

the same as:

```js
span {
    color:blue;
}
span:hover {
    color:red;
}
```
