import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Style.css";
import NavBar from "./components/navbar";
import Home from "./views/home";
import DailyCenter from "./views/dailyCenter";
import Info from "./views/info";

function Routing() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/daily-center" element={<DailyCenter />} />
                <Route path="info" element={<Info />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;
