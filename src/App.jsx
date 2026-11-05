
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shows from "./pages/Shows";
import "./App.css";

function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/shows" element={<Shows />} />
<Route path="*" element={<Home />} />
</Routes>
</BrowserRouter>
);
}

export default App;