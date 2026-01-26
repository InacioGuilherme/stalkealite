import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Direct from "./pages/Direct";
import Chat1 from "./pages/Chat1";
import Chat2 from "./pages/Chat2"; // ⬅️ CORRIGIDO
import Chat3 from "./pages/Chat3"; // ⬅️ CORRIGIDO
import Chat4 from "./pages/Chat4";
import Chat5 from "./pages/Chat5";
import "./index.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/direct" element={<Direct />} />
        <Route path="/chat1" element={<Chat1 />} />
        <Route path="/chat2" element={<Chat2 />} /> {/* ⬅️ CORRIGIDO */}
        <Route path="/chat3" element={<Chat3 />} /> {/* ⬅️ CORRIGIDO */}
        <Route path="/chat4" element={<Chat4 />} />
        <Route path="/chat5" element={<Chat5 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;