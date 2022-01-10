import { useNavigate } from "react-router-dom";
import nftLogo from "../assets/ic-nftgram-logo.png";

function HeaderLogo() {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate("/");
    };

    return (
        <>
            <img src={nftLogo} alt="logo" onClick={handleGoHome} />
        </>
    );
}

export default HeaderLogo;
