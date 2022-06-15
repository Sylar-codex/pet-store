import './App.css';
import Main from './components/Main';
import Cart from './components/pages/Cart';
import Product from './components/pages/Product';
import { Routes, Route, } from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>

        <Route path="/" exact element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
