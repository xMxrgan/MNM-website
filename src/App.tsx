import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/home";
import DailyCenter from "./views/dailyCenter";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/daily-center" element={<DailyCenter />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
