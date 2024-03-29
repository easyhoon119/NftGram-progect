import styled from "styled-components";
import HeaderCountry from "./headerCountry";
import HeaderGalleryView from "./headerGalleryView";
import HeaderInput from "./headerInput";
import HeaderRecent from "./headerRecent";
import HeaderCategory from "./headerCategory";
import HeaderLogin from "./headerLogin";
import HeaderLogo from "./headerLogo";

function PcHeader() {
    return (
        //Pc 헤더
        <PcHeaderStyle>
            <div className="header-first header-padding">
                <HeaderCountry />
            </div>
            <div className="header-second header-padding">
                <div className="header-second-inner">
                    <HeaderLogo />
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            height: "100%",
                        }}>
                        <HeaderCategory />
                        <HeaderLogin />
                    </div>
                </div>
            </div>
            <div className="header-third header-padding">
                <div className="header-third-inner">
                    <HeaderInput />
                    <HeaderRecent />
                    <HeaderGalleryView />
                </div>
            </div>
        </PcHeaderStyle>
    );
}

const PcHeaderStyle = styled.div`
    .header-padding {
        padding: 0 3.125rem;
        box-sizing: border-box;
    }
`;

export default PcHeader;
