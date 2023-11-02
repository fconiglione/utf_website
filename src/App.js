import React from "react";
import "./styles/normalize.css";
import "./styles/app.css";
import "./helpers/SeasonalButtons";
import "./helpers/DropdownMenus";
import LargeHeader from "./components/LargeHeader";
import LargeFooter from "./components/LargeFooter";
import SmallFooter from "./components/SmallFooter";
import SmallHeader from "./components/SmallHeader";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
            <div>
                <LargeHeader />
                <SmallHeader />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <LargeFooter />
                <SmallFooter />
            </div>
        </BrowserRouter>
    );
}

export default App;
