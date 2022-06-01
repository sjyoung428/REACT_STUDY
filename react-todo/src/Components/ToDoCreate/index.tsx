import { useRecoilValue } from "recoil";
import { buttonState } from "../../store/atom";
import S from "./styled";

const ToDoCreate = () => {
  const open = useRecoilValue(buttonState);
  return (
    <S.ToDoCreateContainer>
      {open && (
        <S.ToDoCreateForm>
          <S.ToDoCreateInput placeholder="할 일을 입력 후, Enter 를 누르세요" />
        </S.ToDoCreateForm>
      )}
    </S.ToDoCreateContainer>
  );
};
export default ToDoCreate;
//새로운 할 일을 등록할 수 있게 해주는 컴포넌트입니다.
//TodoTemplate 의 하단부에 초록색 원 버튼을 렌더링해주고, 이를 클릭하면 할 일을 입력 할 수 있는 폼이 나타납니다.
//버튼을 다시 누르면 폼이 사라집니다.
