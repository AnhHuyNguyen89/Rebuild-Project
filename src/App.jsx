// import {createRoot} from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router";
import "../src/App.css";
import "tailwindcss";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import { MenuPage } from "./pages/MenuPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />}></Route>
        <Route path="/MenuPage" element={<MenuPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
