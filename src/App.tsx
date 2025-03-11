import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import "./styles/style.css";
import "./styles/utils.css";
import { ActiveSectionProvider } from "./components/nav";

function App() {
  return (
    <BrowserRouter>
      <ActiveSectionProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ActiveSectionProvider>
    </BrowserRouter>
  );
}

export default App;
