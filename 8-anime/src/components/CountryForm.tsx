import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { countriesState, Category } from "../atom";

interface IForm {
  country: string;
}

const Container = styled.form`
  grid-area: form;
  place-self: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Input = styled.input`
  height: 2rem;
  width: 20rem;
  padding: 5px;
`;

const Button = styled.button`
  height: 2rem;
`;

const Error = styled.div`
  color: red;
`;

export default function CountryForm() {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<IForm>();
  const [countries, setCountries] = useRecoilState(countriesState);

  function handleValid(data: IForm) {
    if (countries.find((country) => country.name === data.country)) {
      return setError("country", { message: "Already Exist" });
    }
    setCountries([
      ...countries,
      { id: Date.now(), name: data.country, category: Category.Want },
    ]);
    setValue("country", "");
  }

  return (
    <Container onSubmit={handleSubmit(handleValid)}>
      <div>
        <Input
          {...register("country", { required: "Must write a country" })}
          placeholder="Write a country"
        />
        <Button>Add</Button>
      </div>
      <Error>{errors.country?.message}</Error>
    </Container>
  );
}
