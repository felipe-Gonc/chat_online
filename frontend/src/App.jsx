import { useState } from "react";
import "./index.css";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/Singnup"
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-certer">
      {/*<SignUp/>*/}
      <Home/>
    </div>
  );
}

export default App;
