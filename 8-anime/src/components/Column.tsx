import styled from "styled-components";
import { Category, countriesState } from "../atom";
import { useRecoilState, useRecoilValue } from "recoil";
import { motion } from "framer-motion";

const Col = styled.div`
  justify-self: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bolder;
  text-align: center;
`;

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: 4px solid black;
  padding: 4px;
  width: 130px;
  background-color: white;
`;

const Name = styled.div`
  font-size: 1.2rem;
  color: black;
`;

const Buttons = styled.div`
  display: flex;
  gap: 4px;
`;

const Button = styled.button`
  background-color: white;
  border-radius: 4px;
`;

interface ICountry {
  id: number;
  name: string;
  category: Category;
}

function Country({ id, name, category }: ICountry) {
  const [countries, setCountries] = useRecoilState(countriesState);

  function handleDelete() {
    const prev = [...countries];
    const index = prev.findIndex((e) => e.name === name);
    prev.splice(index, 1);
    setCountries([...prev]);
  }

  function handleClick(category: Category) {
    const prev = [...countries];
    const index = prev.findIndex((e) => e.name === name);
    prev[index] = { id, name, category: category };
    setCountries([...prev]);
  }

  return (
    <Card layoutId={name}>
      <Name>{name}</Name>
      <div>
        <Buttons>
          {category === Category.Want ? (
            <Button onClick={handleDelete}>Delete</Button>
          ) : null}
          {category === Category.Want ? (
            <Button onClick={() => handleClick(Category.Visited)}>
              Visited
            </Button>
          ) : null}
        </Buttons>
        <Buttons>
          {category === Category.Visited ? (
            <Button onClick={() => handleClick(Category.Want)}>Want</Button>
          ) : null}
          {category === Category.Visited ? (
            <Button onClick={() => handleClick(Category.Like)}>Like</Button>
          ) : null}
        </Buttons>
        {category === Category.Like ? (
          <Button onClick={() => handleClick(Category.Visited)}>Visited</Button>
        ) : null}
      </div>
    </Card>
  );
}

export default function Column({
  title,
  category,
}: {
  title: string;
  category: Category;
}) {
  const countries = useRecoilValue(countriesState);
  return (
    <Col>
      <Title>{title}</Title>
      {countries
        .filter((country) => country.category === category)
        .map((country) => (
          <Country key={country.id} {...country} />
        ))}
    </Col>
  );
}
