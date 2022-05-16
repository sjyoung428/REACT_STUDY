import Box from "./Box";
import Form from "./Form";
import { useStore } from "./store/store";

function App() {
  const { isDark, setIsDark, name } = useStore();

  return (
    <>
      <nav>{name}</nav>
      <button onClick={() => setIsDark()}>
        {isDark ? "다크모드" : "라이트모드"}
      </button>
      <Box />
      <Form />
    </>
  );
}

export default App;
