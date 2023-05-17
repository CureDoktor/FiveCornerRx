import * as React from "react";
import UserAvatar from "../UserAvatar/UserAvatar";
import styles from "./profilemenupopup.module.scss";
import UserPlaceHolderImage from "../../assets/images/profileuser.jpg";
import LogoutIcon from "../../assets/icons/logout.svg";
import ProfileIcon from "../../assets/icons/profileiconblack.svg";
import { PATH } from "../../constants/paths";
import { useRouter } from "next/router";
import Image from "next/image";
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
  const history = useRouter();
  return (
    <div
      className={
        right
          ? styles.profileMenuPopUpContainerRight
          : styles.profileMenuPopUpContainer
      }
    >
      <UserAvatar image={UserPlaceHolderImage} width="4.8rem" height="4.8rem" />
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
