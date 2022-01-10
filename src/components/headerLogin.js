import styled from "styled-components";

function HeaderLogin() {
    return (
        //헤더 로그인 버튼
        <HeaderLoginStyle className="header-login">
            <p className="button">LOGIN</p>
        </HeaderLoginStyle>
    );
}

const HeaderLoginStyle = styled.div`
    & > p {
        width: 5.438rem;
        height: 1.888rem;
        justify-content: center;
        padding: 0.5rem 0;
        box-sizing: border-box;
    }
`;

export default HeaderLogin;
