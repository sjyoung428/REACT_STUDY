import S from "./styled";

const ToDoHead = () => {
  return (
    <S.ToDoHeadContainer>
      <S.ToDoDate>2022년 06월 01일</S.ToDoDate>
      <S.ToDoDay>수요일</S.ToDoDay>
      <S.ToDoLeft>할 일 2개 남음</S.ToDoLeft>
    </S.ToDoHeadContainer>
  );
};
export default ToDoHead;
//이 컴포넌트는 오늘의 날짜와 요일을 보여주고, 앞으로 해야 할 일이 몇개 남았는지 보여줍니다.
