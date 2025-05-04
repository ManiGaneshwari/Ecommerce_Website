import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shopping from "./components/Shopping.jsx";
import HelpContact from "./components/HelpContact.jsx";
import Login from "./components/Login.jsx";
import Cart from "./components/Cart.jsx";
import SignUp from "./components/SignUp.jsx";
import Payment from "./components/Payment.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Shopping />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/help-contact" element={<HelpContact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
