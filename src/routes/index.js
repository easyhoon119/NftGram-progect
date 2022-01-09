import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";

function RootRoute() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
}

export default RootRoute;
