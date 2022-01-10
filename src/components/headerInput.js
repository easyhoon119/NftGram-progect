import styled from "styled-components";
import search from "../assets/ic-header-search.png";

function HeaderInput() {
    return (
        // 헤더 input 창
        <HeaderInputStyle>
            <div className="header-input">
                <img src={search} alt="search" />
                <input type="text" />
            </div>
        </HeaderInputStyle>
    );
}

const HeaderInputStyle = styled.div`
    width: 100%;

    & > .header-input {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        border-radius: 0.313rem;
        border: solid 0.063rem #b1b1b1;
        background-color: #f2f2f2;
        padding: 0.594rem 0.818rem;
        box-sizing: border-box;
    }

    & > .header-input > img {
        width: 1.057rem;
        height: 1.159rem;
        margin-right: 1rem;
    }

    & > .header-input input {
        width: 100%;
        height: 100%;
        background-color: #f2f2f2;
        border: none;
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        border-radius: 0;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        outline-style: none;
    }
`;

export default HeaderInput;
