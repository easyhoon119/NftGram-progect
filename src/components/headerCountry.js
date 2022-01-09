import china from "../assets/img-header-china.png";
import korea from "../assets/img-header-korea.png";
import america from "../assets/img-header-america.png";
import japan from "../assets/img-header-japan.png";
import styled from "styled-components";

function HeaderCountry() {
    return (
        <HeaderCountryStyle className="header-first-inner">
            <div className="america">
                <img src={america} alt="america" />
            </div>
            <div className="korea">
                <img src={korea} alt="korea" />
            </div>
            <div className="japan">
                <img src={japan} alt="japan" />
            </div>
            <div className="chinese">
                <img src={china} alt="china" />
            </div>
        </HeaderCountryStyle>
    );
}

const HeaderCountryStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    & > div {
        padding: 1.014rem 0.763rem;
        border-left: solid 0.063rem #b1b1b1;
    }

    & > div:last-child {
        border-right: solid 0.063rem #b1b1b1;
    }

    & > div > img {
        width: 1.601rem;
        height: 1.056rem;
        cursor: pointer;
    }
`;

export default HeaderCountry;
