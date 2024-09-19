import React from "react";
import NavButtons from "./components/NavButtons";
import Counter from "./components/Counter";

const App = (): React.ReactElement => {
  return (
    <div className="w-full h-dvh">
      <main className="flex flex-col w-full h-full">
        <NavButtons />
        <Counter />
      </main>
    </div>
  );
};

export default App;
