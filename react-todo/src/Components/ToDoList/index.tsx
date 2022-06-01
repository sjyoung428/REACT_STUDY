import { useRecoilValue } from "recoil";
import { toDoListState } from "../../store/atom";
import ToDoItem from "../ToDoItem";
import S from "./styled";

const ToDoList = () => {
  const toDoList = useRecoilValue(toDoListState);
  return (
    <>
      <S.ToDoListContainer>
        {/* <ToDoItem text="프로젝트 생성하기" done={true} />
        <ToDoItem text="컴포넌트 생성하기" done={true} />
        <ToDoItem text="Context 만들기" done={false} />
        <ToDoItem text="기능 구현하기" done={false} /> */}
        {toDoList.map((toDo) => (
          <ToDoItem key={toDo.id} text={toDo.text} done={toDo.done} />
        ))}
      </S.ToDoListContainer>
    </>
  );
};
export default ToDoList;
//이 컴포넌트는 할 일에 대한 정보가 들어있는 todos 배열을 내장함수 map 을 사용하여
//여러개의 TodoItem 컴포넌트를 렌더링해줍니다.
