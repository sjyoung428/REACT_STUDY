import styled from "styled-components";
import ToDoTemplate from "./Components/ToDoTemplate";

const ToDoContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <ToDoContainer>
      <ToDoTemplate />
    </ToDoContainer>
  );
}

export default App;
