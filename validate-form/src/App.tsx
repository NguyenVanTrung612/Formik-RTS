import React from "react";
import "./App.css";
import SignupForm from "./Components/SignupForm";

const App: React.FC = () => {
  return (
    <div className="App">
      <header>Sign up</header>
      <SignupForm />
    </div>
  );
};

export default App;
