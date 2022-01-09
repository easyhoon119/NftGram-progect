import styled from "styled-components";
import defaultImage from "../../assets/gallery/1.jpg";
import profile from "../../assets/ic-home-profile.png";
import price from "../../assets/ic-home-price.png";
import like from "../../assets/ic-home-like.png";

function GalleryItem() {
    return (
        <GalleryItemStyle>
            <div className="gallery-image">
                <img src={defaultImage} alt="default" />
            </div>
            <div className="gallery-image-explain">
                <div className="gallery-image-explain-left">
                    <img src={profile} alt="profile" />
                    <div className="explain-userInfo">
                        <p>USER NAME</p>
                        <p>1 MINUTE AGO</p>
                    </div>
                </div>
                <div className="gallery-image-explain-right">
                    <div className="gallery-image-price">
                        <img src={price} alt="price" />
                        <p>23</p>
                    </div>
                    <div className="gallery-image-like">
                        <img src={like} alt="like" />
                        <p>455</p>
                    </div>
                </div>
            </div>
        </GalleryItemStyle>
    );
}

const GalleryItemStyle = styled.div`
    width: 100%;
    /* width: 21.063rem; */

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
                font-weight: bold;
                margin-bottom: 0.188rem;
            }

            & > div.explain-userInfo > p:last-child {
                font-size: 0.5rem;
            }
        }

        & > .gallery-image-explain-right {
            display: flex;
            align-items: center;

            & > div {
                display: flex;
                align-items: center;

                &:not(:last-child) {
                    margin-right: 2.164rem;
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
