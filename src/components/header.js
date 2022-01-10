import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "./mobileHeader";
import PcHeader from "./pcHeader";

function Header() {
    //반응형 작업
    const isPc = useMediaQuery({
        query: `(min-width: 768px)`,
    });

    return (
        <HeaderStyle>
            {/* Pc화면 */}
            {isPc && <PcHeader />}

            {/* Mobile화면 */}
            {!isPc && <MobileHeader />}
        </HeaderStyle>
    );
}

const HeaderStyle = styled.div`
    width: 100%;
    font-size: 1rem;

    .header-padding {
        border-bottom: solid 0.063rem #b1b1b1;
    }

    .header-second-inner {
        height: 4.375rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        & > img {
            width: 1.86rem;
            height: 1.848rem;
            cursor: pointer;
        }
    }

    .header-third-inner {
        width: 100%;
        height: 4.375rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 0;
        box-sizing: border-box;
        gap: 0.75rem;
    }

    .button {
        border: 1px solid #b1b1b1;
        border-radius: 0.25rem;
        display: flex;
        cursor: pointer;
    }
`;

export default Header;
