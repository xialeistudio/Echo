import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import { Home } from "./pages/home";
import { Speaking } from "./pages/speaking";
import { Settings } from "./pages/settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="speaking" element={<Speaking />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
