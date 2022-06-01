import styled from "styled-components";

const ToDoHeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 48px;
  padding-top: 38px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const ToDoDate = styled.h1`
  font-size: 38px;
  font-weight: bold;
`;

const ToDoDay = styled.span`
  color: gray;
`;

const ToDoLeft = styled.span`
  margin-top: 24px;
  color: #21c28d;
  font-weight: bold;
`;

export default {
  ToDoHeadContainer,
  ToDoDate,
  ToDoDay,
  ToDoLeft,
};
