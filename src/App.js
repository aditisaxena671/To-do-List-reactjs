import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import TaskList from "./components/TaskList";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Router>
        <Header user={user} setUser={setUser} />
        <Routes>
          <Route path="/signup" element={<SignUp setUser={setUser} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/tasks" element={<TaskList user={user} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
