import styled from "styled-components";
import view from "../assets/ic-header-view.png";
import gallery from "../assets/ic-header-gallery.png";

function HeaderGalleryView() {
    return (
        //갤러리 & view 버튼
        <HeaderGalleryViewStyle>
            <img src={view} alt="view" />
            <img src={gallery} alt="gallery" />
        </HeaderGalleryViewStyle>
    );
}

const HeaderGalleryViewStyle = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 2.278rem;
        height: 2.175rem;
        cursor: pointer;

        &:first-child {
            margin-right: 0.75rem;
        }
    }
`;

export default HeaderGalleryView;
