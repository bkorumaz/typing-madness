import React from "react";
import { generate } from "./utils/words";
import useKeyPress from "./hooks/useKeyPress";

function App() {
  
  useKeyPress((key) => {
    console.log(key);
  });

  const initialWords = generate();

  return (
    <>
      <div>Generated words: {initialWords}</div>
    </>
  );
}

export default App;
