import styled from "styled-components";
import profile from "../../assets/ic-home-profile.png";
import price from "../../assets/ic-home-price.png";
import like from "../../assets/ic-home-like.png";

function GalleryItem({ data }) {
    return (
        //갤러리 아이템
        <GalleryItemStyle>
            <div className="gallery-image">
                <img src={data.image} alt="default" />
            </div>
            <div className="gallery-image-explain">
                <div className="gallery-image-explain-left">
                    <img src={profile} alt="profile" />
                    <div className="explain-userInfo">
                        <p>{data.name}</p>
                        <p>{data.mintue} MINUTE AGO</p>
                    </div>
                </div>
                <div className="gallery-image-explain-right">
                    <div className="gallery-image-price">
                        <img src={price} alt="price" />
                        <p>{data.price}</p>
                    </div>
                    <div className="gallery-image-like">
                        <img src={like} alt="like" />
                        <p>{data.like}</p>
                    </div>
                </div>
            </div>
        </GalleryItemStyle>
    );
}

const GalleryItemStyle = styled.div`
    /* min-width: 21.063rem; */
    width: 100%;

    .gallery-image {
        width: 100%;
        height: 21.063rem;
        border-radius: 0.313rem;
        display: flex;
        align-items: center;
        justify-content: center;
        /* border: solid 0.063rem #b1b1b1; */
        margin-bottom: 0.875rem;

        & > img {
            width: 100%;
            height: 100%;
            border-radius: 0.313rem;
            object-fit: fill;
        }
    }

    .gallery-image-explain {
        width: 100%;
        display: flex;
        justify-content: space-between;

        & > .gallery-image-explain-left {
            display: flex;
            align-items: center;

            & > img {
                width: 1.875rem;
                height: 1.875rem;
                margin-right: 0.375rem;
            }

            & > div.explain-userInfo > p:first-child {
                margin-bottom: 0.188rem;
            }

            & > div.explain-userInfo > p:last-child {
                font-size: 0.5rem;
                padding-left: 0.1rem;
            }
        }

        & > .gallery-image-explain-right {
            display: flex;
            align-items: center;

            & > div {
                display: flex;
                align-items: center;

                &:not(:last-child) {
                    margin-right: 1.164rem;
                }

                & > img {
                    width: 0.8rem;
                    height: 1.261rem;
                    margin-right: 0.759rem;
                }
            }
        }
    }
`;

export default GalleryItem;
