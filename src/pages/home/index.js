import styled from "styled-components";
import GalleryItem from "./galleryItem";
import defaultImage from "../../assets/gallery/1.jpg";
import { useMediaQuery } from "react-responsive";
import HeaderRecent from "../../components/headerRecent";
import HeaderGalleryView from "../../components/headerGalleryView";

function HomePage() {
    //반응형 작업
    const isPc = useMediaQuery({
        query: `(min-width: 768px)`,
    });

    //홈 갤러리 더미데이터
    const dummy = [
        {
            image: defaultImage,
            name: "EASYHOON",
            mintue: 1,
            price: 35,
            like: 455,
        },
        {
            image: defaultImage,
            name: "EASY",
            mintue: 1,
            price: 35,
            like: 455,
        },
        {
            image: defaultImage,
            name: "HOON",
            mintue: 2,
            price: 25,
            like: 355,
        },
        {
            image: defaultImage,
            name: "KIMYEONGSAN",
            mintue: 2,
            price: 35,
            like: 455,
        },
        {
            image: defaultImage,
            name: "KIM",
            mintue: 2,
            price: 45,
            like: 455,
        },
        {
            image: defaultImage,
            name: "YEONGSAN",
            mintue: 2,
            price: 35,
            like: 455,
        },
        {
            image: defaultImage,
            name: "SAN",
            mintue: 2,
            price: 45,
            like: 455,
        },
        {
            image: defaultImage,
            name: "YEONG",
            mintue: 1,
            price: 35,
            like: 455,
        },
        {
            image: defaultImage,
            name: "KIMYEONGSAN",
            mintue: 1,
            price: 35,
            like: 455,
        },
    ];

    return (
        //홈화면
        <HomePageStyle isPC={isPc}>
            {isPc ? (
                ""
            ) : (
                <div className="mobile-home-select">
                    <HeaderRecent where="home" />
                    <HeaderGalleryView />
                </div>
            )}
            <p className="result-title">122,313,231 Result</p>
            {/* 갤러리 리스트 컨테이너 */}
            <div className="gallery-container">
                {dummy.map((item, index) => (
                    <GalleryItem key={index} data={item} isPc={isPc} />
                ))}
            </div>
        </HomePageStyle>
    );
}

const HomePageStyle = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    font-size: 1rem;
    padding: 0 3.125rem;
    box-sizing: border-box;
    ${(props) => (props.isPC ? "" : "padding : 0 2rem;")}
    padding-bottom: 3.125rem;

    .mobile-home-select {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 1.125rem;
    }

    .result-title {
        padding: 1.125rem 0;
    }

    .gallery-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 2.125rem;
        grid-row-gap: 2.5rem;
        ${(props) =>
            props.isPC
                ? ""
                : "grid-template-columns: repeat(1, 1fr)"}/* display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2.125rem;
        row-gap: 2.5rem; */
    }
`;

export default HomePage;
