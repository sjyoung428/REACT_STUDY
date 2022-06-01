import S from "./styled";
import { MdAdd } from "react-icons/md";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { buttonState } from "../../store/atom";

const Button = () => {
  const [open, setOpen] = useRecoilState(buttonState);
  return (
    <>
      <S.CreateButton onClick={() => setOpen((prev) => !prev)} open={open}>
        <MdAdd />
      </S.CreateButton>
    </>
  );
};
export default Button;
