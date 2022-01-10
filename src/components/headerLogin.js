import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import profileImg from "../assets/ic-home-profile.png";
import wallet from "../assets/ic-header-wallet.png";
import { LoginAction } from "../store/action/loginAction";

function HeaderLogin() {
    const navigate = useNavigate();
    const { loginState } = useSelector((state) => state.LoginReducer);
    const dispatch = useDispatch();

    const handleGoLogin = () => {
        navigate("/login");
    };

    const handleGoLogout = () => {
        dispatch(
            LoginAction({
                loginState: false,
            }),
        );
    };

    return (
        //헤더 로그인 버튼
        <HeaderLoginStyle className="header-login">
            {loginState ? (
                <div className="login-complete">
                    <img src={profileImg} alt="profile" />
                    <img src={wallet} alt="wallet" />
                    <p className="button" onClick={handleGoLogout}>
                        LOGOUT
                    </p>
                </div>
            ) : (
                <p className="button" onClick={handleGoLogin}>
                    LOGIN
                </p>
            )}
        </HeaderLoginStyle>
    );
}

const HeaderLoginStyle = styled.div`
    & > p,
    & > div > p {
        width: 5.438rem;
        height: 1.888rem;
        justify-content: center;
        padding: 0.5rem 0;
        box-sizing: border-box;
    }

    .login-complete {
        display: flex;
        align-items: center;

        & > img {
            width: 1.875rem;
            height: 1.875rem;
            margin-right: 1.625rem;
            cursor: pointer;
        }
    }
`;

export default HeaderLogin;
