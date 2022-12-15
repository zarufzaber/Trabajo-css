import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Oficce from "./pages/Oficce";
import Courier from "./pages/Courier";
import Electric from "./pages/Electric";
import Form from "./pages/Form";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/empresa" element={<Oficce />} />
        <Route path="/courier" element={<Courier />} />
        <Route path="/courier/ingeniero-electrico" element={<Electric />} />
        <Route path="/courier/ingeniero-electrico/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
// https://editor.wix.com/html/editor/web/renderer/edit/e497687f-5396-45f8-a750-774fcf1881fc?metaSiteId=31a7a278-f5fd-4b8e-a710-8b5581aa0175
