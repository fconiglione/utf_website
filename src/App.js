import React from "react";
import "./styles/normalize.css";
import "./styles/app.css";
import LargeHeader from "./components/LargeHeader";
import LargeFooter from "./components/LargeFooter";
import SmallFooter from "./components/SmallFooter";
import SmallHeader from "./components/SmallHeader";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import PrivacyPolicy from "./pages/Privacy-Policy";
import TermsOfUse from "./pages/Terms-Of-Use";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <div>
                <LargeHeader />
                <SmallHeader />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-of-use" element={<TermsOfUse />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <LargeFooter />
                <SmallFooter />
            </div>
        </BrowserRouter>
    );
}
export default App;
