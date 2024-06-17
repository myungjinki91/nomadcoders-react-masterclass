import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  h1 {
    color: tomato;
    &:hover {
      color: teal;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <h1>Hello</h1>
    </Wrapper>
  );
}

export default App;
