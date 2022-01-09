import styled from "styled-components";
import HeaderCountry from "./headerCountry";
import HeaderLogin from "./headerLogin";
import nftLogo from "../assets/ic-nftgram-logo.png";
import HeaderCategory from "./headerCategory";
import HeaderInput from "./headerInput";

function MobileHeader() {
    return (
        <MobileHeaderStyle>
            <div className="header-first header-padding">
                <HeaderCountry />
                <HeaderLogin />
            </div>
            <div className="header-second header-padding">
                <div className="header-second-inner">
                    <img src={nftLogo} alt="logo" />
                    <HeaderCategory />
                </div>
            </div>
            <div className="header-third header-padding">
                <div className="header-third-inner">
                    <HeaderInput />
                </div>
            </div>
        </MobileHeaderStyle>
    );
}

const MobileHeaderStyle = styled.div`
    padding: 0rem;
    font-size: 0.7rem;

    & > .header-first {
        padding-right: 1rem;
    }

    & > .header-second {
        width: 100%;
        height: 3.375rem;
        padding: 0 1rem;
        box-sizing: border-box;

        & > div.header-second-inner {
            width: 100%;
            height: 100%;
        }

        & > div.header-second-inner > img {
            width: 1.56rem;
            height: 1.548rem;
        }

        & > div.header-second-inner > div {
            margin-right: 0rem;

            & > p:not(:last-child) {
                margin-right: 1rem;
            }
        }
    }

    & > .header-third {
        width: 100%;
        padding: 0 1rem;
        box-sizing: border-box;
    }

    .header-padding {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export default MobileHeader;
