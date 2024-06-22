import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

interface IData {
  toDo: string;
}

interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

function ToDoList() {
  const [toDos, setTodos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IData>();
  const handleValid = ({ toDo }: IData) => {
    setTodos([{ text: toDo, id: Date.now(), category: "TO_DO" }, ...toDos]);
    setValue("toDo", "");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "Please write a To Do",
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
}
export default ToDoList;
