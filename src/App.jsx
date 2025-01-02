import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Home";
import { SignUp } from "./Pages/SignUp";
import { SignIn } from "./Pages/SignIn";
import { Support } from "./Pages/Support";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/support" element={<Support />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
