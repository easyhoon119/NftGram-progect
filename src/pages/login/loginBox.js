import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { LoginAction } from "../../store/action/loginAction";

function LoginBox() {
    const navigate = useNavigate();
    const [nowSign, setNowSign] = useState("SIGN IN");
    const IdRef = useRef();
    const PasswordRef = useRef();
    const dispatch = useDispatch();
    //반응형 작업
    const isPc = useMediaQuery({
        query: `(min-width: 768px)`,
    });

    const handleGoHome = () => {
        if (IdRef && PasswordRef) {
            console.log(
                `id : ${IdRef.current.value}, password : ${PasswordRef.current.value}`,
            );
            if (
                IdRef.current.value === "easy" &&
                PasswordRef.current.value === "1234"
            ) {
                dispatch(
                    LoginAction({
                        loginState: true,
                    }),
                );
                navigate("/");
            }
        }
    };

    const handleChangeSign = (e) => {
        setNowSign(e.target.innerText);
    };

    return (
        <LoginBoxStyle isPc={isPc}>
            <p className="login-title">{nowSign}</p>
            <div className="login-input loginStyle">
                <input type="text" placeholder="ID" ref={IdRef} />
            </div>
            <div className="login-input loginStyle">
                <input type="text" placeholder="PASSWORD" ref={PasswordRef} />
            </div>
            <div className="accept-sign loginStyle" onClick={handleGoHome}>
                {nowSign}
            </div>
            <div
                className="accept-sign loginStyle change-sign"
                onClick={handleChangeSign}>
                {nowSign === "SIGN IN" ? "SIGN UP" : "SIGN IN"}
            </div>
        </LoginBoxStyle>
    );
}

const LoginBoxStyle = styled.div`
    max-width: 18.062rem;
    box-sizing: border-box;
    margin: 0 auto;
    /* padding-top: ${(props) => (props.isPc ? "10rem" : "4rem")}; */
    padding-top: 10rem;
    padding-bottom: 3rem;
    box-sizing: border-box;

    .login-title {
        width: 100%;
        text-align: center;
        font-size: 1.625rem;
        margin-bottom: 1.25rem;
    }

    .login-input {
        padding: 1.125rem 0.5rem;
        box-sizing: border-box;

        border: solid 0.063rem #707070;
        margin-bottom: 0.688rem;

        &:last-child > input {
            margin-bottom: 1.312rem;
        }

        & > input {
            width: 100%;
            height: 100%;
            border: none;
            appearance: none;
            -moz-appearance: none;
            -webkit-appearance: none;
            border-radius: 0;
            -webkit-border-radius: 0;
            -moz-border-radius: 0;
            outline-style: none;
            font-size: 1.25rem;
        }
    }

    .accept-sign {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #323233;
        font-size: 1.188rem;
        color: #fff;
        cursor: pointer;
    }

    .change-sign {
        background-color: #fff;
        color: #b1b1b1;
        font-size: 1.125rem;
    }

    .loginStyle {
        width: 100%;
        height: 3.625rem;
        border-radius: 0.313rem;
    }
`;

export default LoginBox;
