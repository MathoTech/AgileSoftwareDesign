
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Logout from './pages/Dashboard';
import Document from "./pages/Document";
import MBP from './pages/MBP';
import Degree from "./pages/Degree";
import Studentenrolled from "./pages/studentenrolled";
import  Administrator from './pages/Administrator';
import { Homepage } from './pages/Homepage';

import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route index path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/mbp" element={<MBP/>}/>
          <Route path="/document" element={<Document/>}/>
          <Route path="/degree" element={<Degree/>}/>
          <Route path="/studentenrolled" element={<Studentenrolled/>}/>
          <Route path="/homepage" element={<Homepage/>}/>
          <Route path="/administrator" element={<Administrator/>}/>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
