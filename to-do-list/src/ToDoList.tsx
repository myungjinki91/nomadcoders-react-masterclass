// import { useState } from "react";
import { useForm } from "react-hook-form";

interface IData {
  toDo: string;
}

function ToDoList() {
  const { register, handleSubmit, setValue } = useForm<IData>();
  const handleValid = (data: IData) => {
    console.log(data);
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
    </div>
  );
}
export default ToDoList;
