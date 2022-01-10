import styled from "styled-components";

function HeaderRecent({ where }) {
    return (
        //헤더 최근 리스트 버튼
        <HeaderRecentStyle className="header-recently button" where={where}>
            RECENTLY LISTED
            <i className="fas fa-sort-down"></i>
        </HeaderRecentStyle>
    );
}

const HeaderRecentStyle = styled.div`
    ${(props) => (props.where === "home" ? "" : "width: 20rem;")}
    height: 100%;
    padding: 0rem 2rem;
    box-sizing: border-box;
    display: flex;
    border-radius: 0.25rem;
    align-items: center;
    justify-content: center;
    border: 1px solid #b1b1b1;
    cursor: pointer;

    & > i {
        font-size: 1.5rem;
        margin-left: 0.5rem;
        padding-bottom: 0.9rem;
    }
`;

export default HeaderRecent;
