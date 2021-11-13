import type { Component } from "solid-js";
import { CreateBoardForm } from "./board/view/components/forms/CreateBoardForm";
import { Header } from "./landing/Header";

const App: Component = () => {
  return (
    <main>
      <Header />
      <CreateBoardForm />
    </main>
  );
};

export default App;
