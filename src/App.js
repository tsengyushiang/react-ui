import React from "react";
import { Button, Input } from "./components";

function App() {
  return (
    <div>
      <Button text={"Click me!"} onClick={() => console.log("button clicked")} />
      <br />
      <Input text={"placeholder"} onChange={(e)=>console.log(e)}/>
    </div>
  );
}

export default App;
