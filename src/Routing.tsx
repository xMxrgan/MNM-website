import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Style.css";

import Home from "./views/home";
import DailyCenter from "./views/dailyCenter";
import Info from "./views/info";
import Contacts from "./views/contacts";

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/daily-center" element={<DailyCenter />} />
                <Route path="info" element={<Info />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;
