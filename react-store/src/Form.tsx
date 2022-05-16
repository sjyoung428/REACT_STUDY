import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useStore } from "./store/store";

const Form = () => {
  const { register, handleSubmit, watch, reset } = useForm();
  const { setText, setName } = useStore();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setText(data.text);
    setName(data.name);
  };
  const onReset = () => {
    reset();
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", width: "30%" }}
      >
        <input type="text" {...register("name")} placeholder="name" />
        <input type="text" {...register("text")} placeholder="text" />
        <button>클릭</button>
        <button onClick={onReset}>리셋</button>
      </form>
    </>
  );
};

export default Form;
