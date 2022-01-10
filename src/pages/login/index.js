import styled from "styled-components";
import LoginBox from "./loginBox";

function LoginPage() {
    return (
        <LoginPageStyle>
            <LoginBox />
        </LoginPageStyle>
    );
}

const LoginPageStyle = styled.div`
    width: 100%;
    padding: 0 1rem;
    box-sizing: border-box;
`;

export default LoginPage;
