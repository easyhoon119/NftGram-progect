import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";

function RootRoute() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    );
}

export default RootRoute;
