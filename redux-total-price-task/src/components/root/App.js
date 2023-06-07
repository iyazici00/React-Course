import React from "react";
import { Container } from "reactstrap";
import Header from "../navi/Header";
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom";
import CartDetail from "../cart/Detail";
import Payment from "../navi/Payment";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cart" element={<CartDetail />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Container>
  );
}


export default App;