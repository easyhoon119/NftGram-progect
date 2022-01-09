import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { NowCategoryAction } from "../store/action/nowCategoryAction";
import china from "../assets/img-header-china.png";
import korea from "../assets/img-header-korea.png";
import america from "../assets/img-header-america.png";
import japan from "../assets/img-header-japan.png";
import nftLogo from "../assets/ic-nftgram-logo.png";
import search from "../assets/ic-header-search.png";
import view from "../assets/ic-header-view.png";
import gallery from "../assets/ic-header-gallery.png";

function Header() {
    const { nowCategory } = useSelector((state) => state.NowCategoryReducer);
    const dispatch = useDispatch();

    const handleCategory = (data) => {
        dispatch(
            NowCategoryAction({
                nowCategory: data,
            }),
        );
    };

    return (
        <HeaderStyle>
            <div className="header-first header-padding">
                <div className="header-first-inner">
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
                </div>
            </div>
            <div className="header-second header-padding">
                <div className="header-second-inner">
                    <img src={nftLogo} alt="logo" />
                    <div className="header-second-inner-category">
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
                        <div className="header-login button">
                            <p>LOGIN</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-third header-padding">
                <div className="header-third-inner">
                    <div className="header-input">
                        <img src={search} alt="search" />
                        <input type="text" />
                    </div>
                    <div className="header-recently button">
                        RECENTLY LISTED <i className="fas fa-sort-down"></i>
                    </div>
                    <img src={view} alt="view" />
                    <img src={gallery} alt="gallery" />
                </div>
            </div>
        </HeaderStyle>
    );
}

const HeaderStyle = styled.div`
    width: 100%;
    font-size: 1rem;

    .header-padding {
        padding: 0 3.125rem;
        box-sizing: border-box;
        border-bottom: solid 0.063rem #b1b1b1;
    }

    .header-first {
        & > .header-first-inner {
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }

        & > .header-first-inner > div {
            padding: 1.014rem 0.763rem;
            border-left: solid 0.063rem #b1b1b1;
        }

        & > .header-first-inner > div:last-child {
            border-right: solid 0.063rem #b1b1b1;
        }

        & > .header-first-inner > div > img {
            width: 1.601rem;
            height: 1.056rem;
            cursor: pointer;
        }
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

        & > .header-second-inner-category {
            display: flex;
            height: 100%;
            align-items: center;

            & > .header-login {
                width: 5.438rem;
                height: 1.688rem;
                justify-content: center;
                padding: 0.375rem 0;
                box-sizing: border-box;
            }
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

        & > .header-recently {
            width: 20.812rem;
            height: 100%;
            padding: 0.75rem 1.313rem 0.688rem 1.375rem;
            box-sizing: border-box;
            align-items: center;
            justify-content: center;
        }

        & > .header-recently > i {
            font-size: 1.5rem;
            margin-left: 0.438rem;
            padding-bottom: 0.9rem;
        }

        & > img {
            width: 2.278rem;
            height: 2.175rem;
        }
    }

    .button {
        border: 1px solid #b1b1b1;
        border-radius: 0.25rem;
        display: flex;
        cursor: pointer;
    }
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
    margin-right: 2.188rem;
`;

export default Header;
