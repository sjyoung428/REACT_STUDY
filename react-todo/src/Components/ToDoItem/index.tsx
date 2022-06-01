import S from "./styled";
import { MdDelete, MdDone } from "react-icons/md";

interface IToDoItem {
  text: string;
  done: boolean;
}

const ToDoItem = ({ text, done }: IToDoItem) => {
  return (
    <>
      <S.ToDoItemContainer>
        <S.ToDoCheck done={done}>{done && <MdDone />}</S.ToDoCheck>
        <S.ToDoText done={done}>{text}</S.ToDoText>
        <S.ToDoRemove>
          <MdDelete className="delete" />
        </S.ToDoRemove>
      </S.ToDoItemContainer>
    </>
  );
};
export default ToDoItem;

// 각 할 일에 대한 정보를 렌더링해주는 컴포넌트입니다. 좌측에 있는 원을 누르면 할 일의 완료 여부를 toggle 할 수 있습니다.
// 할 일이 완료됐을 땐 좌측에 체크가 나타나고 텍스트의 색상이 연해집니다.
// 그리고, 마우스를 올리면 휴지통 아이콘이 나타나고 이를 누르면 항목이 삭제됩니다.
