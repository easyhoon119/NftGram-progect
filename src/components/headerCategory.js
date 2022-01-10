import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { NowCategoryAction } from "../store/action/nowCategoryAction";

function HeaderCategory() {
    const dispatch = useDispatch();
    //현재 카테고리
    const { nowCategory } = useSelector((state) => state.NowCategoryReducer);

    //현재 카테고리 변경
    const handleCategory = (data) => {
        dispatch(
            NowCategoryAction({
                nowCategory: data,
            }),
        );
    };

    return (
        // 헤더 카테고리
        <HeaderCategoryStyle className="header-second-inner-category">
            <CategoryStyle
                now={nowCategory}
                name="EXPLOLER"
                onClick={() => {
                    handleCategory("EXPLOLER");
                }}>
                EXPLOLER
            </CategoryStyle>
            <CategoryStyle
                now={nowCategory}
                name="MY FAVORITE"
                onClick={() => {
                    handleCategory("MY FAVORITE");
                }}>
                MY FAVORITE
            </CategoryStyle>
            <CategoryStyle
                now={nowCategory}
                name="MY COLLECTION"
                onClick={() => {
                    handleCategory("MY COLLECTION");
                }}>
                MY COLLECTION
            </CategoryStyle>
        </HeaderCategoryStyle>
    );
}

const HeaderCategoryStyle = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    margin-right: 2.188rem;
`;

const CategoryStyle = styled.p`
    width: fit-content;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    ${(props) =>
        props.now === props.name
            ? "border-bottom: solid 0.125rem #323233; box-sizing: border-box;"
            : ""}

    &:not(:last-child) {
        margin-right: 2.188rem;
    }
`;

export default HeaderCategory;
