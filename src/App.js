import React from "react";
import "./styles/normalize.css";
import "./styles/app.css";
import LargeHeader from "./components/LargeHeader";
import LargeFooter from "./components/LargeFooter";
import SmallFooter from "./components/SmallFooter";
import SmallHeader from "./components/SmallHeader";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/Privacy-Policy";
import TermsOfUse from "./pages/Terms-Of-Use";

function App() {
    return (
        <BrowserRouter>
            <div>
                <LargeHeader />
                <SmallHeader />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-of-use" element={<TermsOfUse />} />
                </Routes>
                <LargeFooter />
                <SmallFooter />
            </div>
        </BrowserRouter>
    );
}
export default App;
