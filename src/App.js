import "./styles.css";
import { useReducer } from "react";

export default function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD ONE":
        return { count: state.count + 1 };
      case "MINUS ONE":
        return { count: state.count - 1 };
      case "ADD TEN":
        return { count: state.count + 10 };
      case "MINUS TEN":
        return { count: state.count - 10 };
      case "RESET":
        return { count: (state.count = 0) };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="App">
      <h1>count is:{state.count}</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch({ type: "ADD ONE" });
        }}
      >
        Add 1
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch({ type: "MINUS ONE" });
        }}
      >
        Minuse One{" "}
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch({ type: "ADD TEN" });
        }}
      >
        ADD+10
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch({ type: "MINUS TEN" });
        }}
      >
        MINUS+10
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        Reset
      </button>
    </div>
  );
}
