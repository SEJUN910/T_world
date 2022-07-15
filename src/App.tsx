import * as React from "react";
import Main from "./Layout/Main";
import Practice from "./practice/Practice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/practice" element={<Practice />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
