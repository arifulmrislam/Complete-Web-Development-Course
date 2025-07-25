import FindUs from "../FindUs";
import QZone from "../Qzone";
import SocialLogin from "../SocialLogin";

const RightNavbar = () => {
    return (
        <div>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <QZone></QZone>
        </div>
    );
};

export default RightNavbar;