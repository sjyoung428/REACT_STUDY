import styled, { css } from "styled-components";

const CreateButton = styled.div<{ open: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #21c28d;
  font-size: 38px;
  color: white;
  cursor: pointer;
  position: absolute;
  bottom: 5%;
  transition: 0.125s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }

      transform: rotate(45deg);
    `}
`;

export default {
  CreateButton,
};
