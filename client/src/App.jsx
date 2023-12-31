import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Speech from "./pages/Speech";
import './App.css';

function App() {
  return (
    <BrowserRouter>      {/* //routes created using react-router-dom package */}       {/* routes ke uper lgane se sbhi pages ke uper aa jaata h*/ }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speech" element={<Speech/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
