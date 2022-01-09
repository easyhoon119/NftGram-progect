import styled from "styled-components";

function HeaderRecent() {
    return (
        <HeaderRecentStyle className="header-recently button">
            RECENTLY LISTED
            <i className="fas fa-sort-down"></i>
        </HeaderRecentStyle>
    );
}

const HeaderRecentStyle = styled.div`
    width: 27rem;
    height: 100%;
    padding: 0.75rem 2rem;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;

    & > i {
        font-size: 1.5rem;
        margin-left: 0.5rem;
        padding-bottom: 0.9rem;
    }
`;

export default HeaderRecent;
