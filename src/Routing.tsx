import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Style.css";

import Home from "./views/home";
import DailyCenter from "./views/dailyCenter";
import Info from "./views/info";
import Attività from "./views/activities";
import Eventi from "./views/eventi";
import Corsi from "./views/corsi";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

function Routing() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/attivita" element={<Attività />} />
                <Route path="/daily-center" element={<DailyCenter />} />
                <Route path="/corsi" element={<Corsi />} />
                <Route path="info" element={<Info />} />
                <Route path="/blog" element={<Eventi />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Routing;
