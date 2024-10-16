import React from "react";
import HomePage from "./components/HomePage";
// import { Login } from "./components/Login";
// import { SignUp } from "./components/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import AllTrip from "./components/Alltrip";



const App = () => {
  return (
    <>
    {/* <Login /> */}
    {/* <SignUp /> */}
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/all-trip" element={<AllTrip />} />
        <Route path="/home" element={<HomePage />} />

      </Routes>
    </Router>
    </>
  );
};

export default App;
