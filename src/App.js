import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { darkTheme, lightTheme } from "./theme";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Container = styled.div`
  background-color: ${({ theme }) => theme.bg};
`;
const App = () => {
  const [mode, setMode] = useState(true);
  return (
    <ThemeProvider theme={mode ? lightTheme : darkTheme}>
      <Container>
        <BrowserRouter>
          <Navbar mode={mode} setMode={setMode} />
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/products/:category" element={<ProductList />} />
          </Routes>
          <Routes>
            <Route path="/product/:id" element={<Product/>} />
          </Routes>
          <Routes>
            <Route path="/cart" element={<Cart/>} />
          </Routes>
          <Routes>
            <Route path="/register" element={<Register/>} />
          </Routes>
          <Routes>
            <Route path="/login" element={<Login/>} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
};

export default App;
