import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
