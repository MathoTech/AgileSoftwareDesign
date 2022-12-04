import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route index path="/login" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
