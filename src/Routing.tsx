import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Style.css";

import Home from "./views/MNMhome";
import DailyCenter from "./views/dailyCenter";
import Info from "./views/MNMinfo";
import Activities from "./views/MNMactivities";
import Events from "./views/MNMevents";
import Courses from "./views/MNMcourses";
import DCcontacts from "./views/DCcontacts";
import DCevents from "./views/DCevents";
import DCinfo from "./views/DCinfo";
// import DCmodules from "./views/DCmodules";
import DCprofessionists from "./views/DCprofessionists";

import Footer from "./components/footer";

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Attività" element={<Activities />} />
                <Route path="/Centro-Diurno" element={<DailyCenter />} />
                <Route path="/Corsi" element={<Courses />} />
                <Route path="/Info" element={<Info />} />
                <Route path="/Eventi" element={<Events />} />
                <Route path="/CD-Contatti" element={<DCcontacts />} />
                <Route path="/CD-Eventi" element={<DCevents />} />
                <Route path="/CD-Info" element={<DCinfo />} />
                <Route
                    path="/CD-Professionisti"
                    element={<DCprofessionists />}
                />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default Routing;
