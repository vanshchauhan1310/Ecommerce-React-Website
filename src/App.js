import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Cart from './Pages/Cart';
import Home from './Pages/Home';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route index element={<Home />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/Cart" element={<Cart />} />

    </Routes>
    </BrowserRouter>


 </>
  );
}

export default App;
