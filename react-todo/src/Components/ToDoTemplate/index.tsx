import Button from "../Button";
import ToDoCreate from "../ToDoCreate";
import ToDoHead from "../ToDoHead";
import ToDoList from "../ToDoList";
import S from "./styled";

const ToDoTemplate = () => {
  return (
    <>
      <S.TemplateContainer>
        <ToDoHead />
        <ToDoList />
        <ToDoCreate />
      </S.TemplateContainer>
      <Button />
    </>
  );
};
export default ToDoTemplate;

//이 컴포넌트는 우리가 만들 투두리스트의 레이아웃을 설정하는 컴포넌트입니다.
//페이지의 중앙에 그림자가 적용된 흰색 박스를 보여줍니다.
