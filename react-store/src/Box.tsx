import { useStore } from "./store/store";

const Box = () => {
  const { isDark, text } = useStore();
  return (
    <>
      <div
        style={
          isDark
            ? {
                width: 100,
                height: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid black",

                backgroundColor: "black",
                color: "white",
              }
            : {
                width: 100,
                height: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid black",

                backgroundColor: "white",
                color: "black",
              }
        }
      >
        <span>{text}</span>
      </div>
    </>
  );
};

export default Box;
