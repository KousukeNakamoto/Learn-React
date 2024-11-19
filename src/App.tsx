import { Suspense } from "react";
import { Tanstack } from "./Tanstack";

function App() {
  return (
    <>
      <h2>Learn React</h2>
      <Suspense fallback={<div>loading.......</div>}>
        <Tanstack />
      </Suspense>
    </>
  );
}

export default App;
