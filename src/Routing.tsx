import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Style.css";

import Home from "./views/MNMhome";
import DailyCenter from "./views/dailyCenter";
import Info from "./views/MNMinfo";
import Attività from "./views/MNMactivities";
import Eventi from "./views/MNMeventi";
import Corsi from "./views/MNMcorsi";

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
