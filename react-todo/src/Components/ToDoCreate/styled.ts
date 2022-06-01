import styled from "styled-components";

const ToDoCreateContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 18%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ToDoCreateForm = styled.form`
  width: 100%;
  padding: 12px 48px 48px 48px;
  background-color: #f7f8f9;
  box-sizing: border-box;
`;

const ToDoCreateInput = styled.input`
  width: 100%;
  padding: 10px 10px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid rgba(1, 1, 1, 0.2);
`;

export default {
  ToDoCreateContainer,
  ToDoCreateForm,
  ToDoCreateInput,
};
