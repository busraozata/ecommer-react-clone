import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import { Route, Routes } from "react-router-dom";
import Products from './component/Products';
import Product from './component/Product';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
