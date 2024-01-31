import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login/>} />
          <Route path="/Signup" element={<Signup/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
