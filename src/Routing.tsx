import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Style.css";

import Home from "./views/home";
import DailyCenter from "./views/dailyCenter";
import Info from "./views/info";
import Attività from "./views/activities";
import Eventi from "./views/eventi";
import Corsi from "./views/corsi";

import Footer from "./components/footer";

function Routing() {
  return (
    <BrowserRouter>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Attività" element={<Attività />} />
        <Route path="/Centro-Diurno" element={<DailyCenter />} />
        <Route path="/Corsi" element={<Corsi />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/Eventi" element={<Eventi />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default Routing;
