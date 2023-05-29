import * as React from "react";
import UserAvatar from "../UserAvatar/UserAvatar";
import styles from "./profilemenupopup.module.scss";
import UserPlaceHolderImage from "../../assets/icons/profileicon.svg";
import LogoutIcon from "../../assets/icons/logout.svg";
import ProfileIcon from "../../assets/icons/profileiconblack.svg";
import { PATH } from "../../constants/paths";
import { useRouter } from "next/router";
import Image from "next/image";
import Axios from "axios";
import AuthContext from "../../store/auth-context";
type Props = {
  right?: boolean;
  setShowProfilePopUp: React.Dispatch<React.SetStateAction<boolean>>;
  logout: () => void;
};

const ProfileMenuPopUp: React.FC<Props> = ({
  right,
  setShowProfilePopUp,
  logout,
}) => {
  const authCtx = React.useContext(AuthContext);
  const gettingUserInfo = async () => {
    const route = "/api/user/getUserInfo";

    try {
      const rese = await Axios.post(route, { Token: authCtx.Token() })
        .then((res: any) => {
          setUserInfo(res.data);
        })
        .catch((error: any) => {
          console.log(error);
        });
    } catch (err) {
      console.log("Something went wrong!");
    }
  };

  React.useEffect(() => {
    gettingUserInfo();
  }, []);

  const [userInfo, setUserInfo] = React.useState({
    auth_customer_payment_id: null,
    auth_customer_profile_id: null,
    billingAddress: null,
    billingCityId: null,
    billingCityName: null,
    billingFirstName: null,
    billingLastName: null,
    billingSameAsShipping: null,
    billingState: null,
    billingZip: null,
    creditCardNumber: null,
    cvv: null,
    date_of_birth: null,
    email_notification: null,
    expirationDate: null,
    firstName: " ",
    id: 1,
    lastName: " ",
    patient_id: null,
    payment_processor: null,
    phone: "",
    shippingAddress: "",
    shippingCityId: "",
    shippingCityName: "",
    shippingMethod: null,
    shippingState: "",
    shippingZip: "",
    sms_notification: null,
    user_id: 2,
    verification_job_id: null,
    verification_status: null,
    verification_token: null,
  });

  const history = useRouter();
  return (
    <div
      className={
        right
          ? styles.profileMenuPopUpContainerRight
          : styles.profileMenuPopUpContainer
      }
    >
      <UserAvatar
        image={UserPlaceHolderImage}
        width="4.8rem"
        height="4.8rem"
        primaryText={
          userInfo.firstName ? userInfo.firstName + " " + userInfo.lastName : ""
        }
      />
      <div
        onClick={() => {
          setShowProfilePopUp(false);
          history.push(PATH.EditProfile);
        }}
        className={styles.popUpOption}
      >
        <Image src={ProfileIcon} alt="logout_icon" width={15} height={13} />
        <p>Account Setting</p>
      </div>
      <div
        onClick={() => {
          logout();
          setShowProfilePopUp(false);
        }}
        className={styles.popUpOption}
      >
        <Image src={LogoutIcon} alt="logout_icon" width={15} height={13} />
        <p>Log out</p>
      </div>
    </div>
  );
};

export default ProfileMenuPopUp;
