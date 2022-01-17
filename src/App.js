import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home/Home';
import Driver from './driver/Driver';

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element ={<Home/>}/>
  <Route path="/driver" element ={<Driver />}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
