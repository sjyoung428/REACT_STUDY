import { useRecoilValue } from "recoil";
import { toDoListState } from "../../store/atom";
import S from "./styled";

const ToDoHead = () => {
  const toDoList = useRecoilValue(toDoListState);
  const countList = toDoList.filter((toDo) => toDo.done === false);

  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <S.ToDoHeadContainer>
      <S.ToDoDate>{dateString}</S.ToDoDate>
      <S.ToDoDay>{dayName}</S.ToDoDay>
      <S.ToDoLeft>할 일 {countList.length}개 남음</S.ToDoLeft>
    </S.ToDoHeadContainer>
  );
};
export default ToDoHead;
//이 컴포넌트는 오늘의 날짜와 요일을 보여주고, 앞으로 해야 할 일이 몇개 남았는지 보여줍니다.
