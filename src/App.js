import RootRoute from "./routes";
import "./reset.css";
import "./setRem.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import styled from "styled-components";

function App() {
    return (
        <BrowserRouter>
            <PageWrap>
                <Header />
                <RootRoute />
            </PageWrap>
        </BrowserRouter>
    );
}

const PageWrap = styled.div`
    width: 100%;
    height: 100vh;
`;

export default App;
