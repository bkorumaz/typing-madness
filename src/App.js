import React from "react";
import { generate } from "./utils/words";

function App() {
  const initialWords = generate();

  return (
    <>
      <div>Generated words: {initialWords}</div>
    </>
  );
}

export default App;
