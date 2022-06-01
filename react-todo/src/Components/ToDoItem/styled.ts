import styled, { css } from "styled-components";

const ToDoRemove = styled.div`
  color: #dee2e6;
  font-size: 22px;
  :hover {
    cursor: pointer;
    color: #ff6b6b;
  }
  visibility: hidden;
`;
const ToDoItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  width: 100%;
  align-items: center;
  :hover {
    .delete {
      visibility: visible;
    }
  }
`;
const ToDoItemColumn = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ToDoCheck = styled.div<{ done: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid rgba(1, 1, 1, 0.2);
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      color: #21c28d;
      border-color: #21c28d;
    `}
`;
const ToDoText = styled.span<{ done: boolean }>`
  font-size: 18px;
  line-height: 150%;
  ${(props) =>
    props.done &&
    css`
      color: rgba(1, 1, 1, 0.2);
    `}
`;

export default {
  ToDoItemContainer,
  ToDoRemove,
  ToDoCheck,
  ToDoText,
  ToDoItemColumn,
};
