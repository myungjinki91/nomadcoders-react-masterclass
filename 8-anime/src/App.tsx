import { styled } from "styled-components";
import CountryForm from "./components/CountryForm";
import { Category } from "./atom";
import Column from "./components/Column";

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  background-color: #222831;
  width: 100vw;
  height: 100vh;
  color: #00adb5;
`;

const Grid = styled.div`
  display: grid;
  grid-template:
    "title title title " 1fr
    "form form form" 1fr
    "col col col" 10fr / 25vw 25vw 25vw;
  gap: 1rem;
`;

const H1 = styled.div`
  grid-area: title;
  place-self: center;
  font-size: 32px;
  font-weight: bold;
`;

export default function App() {
  return (
    <Wrapper>
      <Grid>
        <H1>Country bucket list</H1>
        <CountryForm />
        <Column title="Want" category={Category.Want} />
        <Column title="Visited" category={Category.Visited} />
        <Column title="Like" category={Category.Like} />
      </Grid>
    </Wrapper>
  );
}
