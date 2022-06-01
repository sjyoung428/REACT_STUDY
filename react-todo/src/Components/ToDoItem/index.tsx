import S from "./styled";
import { MdDelete, MdDone } from "react-icons/md";
import React from "react";
import { useRecoilState } from "recoil";
import { toDoListState } from "../../store/atom";
import produce from "immer";

interface IToDoItem {
  text: string;
  done: boolean;
  id: number;
}

const ToDoItem = ({ text, done, id }: IToDoItem) => {
  const [toDoList, setToDoList] = useRecoilState(toDoListState);

  const onDelete = () => {
    const deletedToDoList = produce(toDoList, (draft) => {
      const index = draft.findIndex((toDo) => toDo.id === id);
      if (index !== -1) draft.splice(index, 1); // immer 공식 홈페이지 참고 https://immerjs.github.io/immer/update-patterns/
    });
    setToDoList(deletedToDoList);
  };

  const onClick = () => {
    const clickedToDo = produce(toDoList, (draft) => {
      const index = draft.findIndex((toDo) => toDo.id === id);
      draft[index].done = !draft[index].done;
    });
    setToDoList(clickedToDo);
  };

  return (
    <>
      <S.ToDoItemContainer>
        <S.ToDoCheck onClick={onClick} done={done}>
          {done && <MdDone />}
        </S.ToDoCheck>
        <S.ToDoText done={done}>{text}</S.ToDoText>
        <S.ToDoRemove>
          <MdDelete className="delete" onClick={onDelete} />
        </S.ToDoRemove>
      </S.ToDoItemContainer>
    </>
  );
};
export default ToDoItem;

// 각 할 일에 대한 정보를 렌더링해주는 컴포넌트입니다. 좌측에 있는 원을 누르면 할 일의 완료 여부를 toggle 할 수 있습니다.
// 할 일이 완료됐을 땐 좌측에 체크가 나타나고 텍스트의 색상이 연해집니다.
// 그리고, 마우스를 올리면 휴지통 아이콘이 나타나고 이를 누르면 항목이 삭제됩니다.
