import React from "react";
import styles from "./useravatar.module.scss";
import Image from "next/image";
type Props = {
  image: any;
  width: string;
  height: string;
  primaryText?: string;
  secondaryText?: string;
};

const UserAvatar: React.FC<Props> = ({
  primaryText = "William Smith",
  secondaryText = "email@example.com",
  image,
  width,
  height,
}) => {
  return (
    <div className={styles.userProfileAvatarContainer}>
      <Image width={width} height={height} src={image} alt="profile_image" />
      <div className={styles.profileDetails}>
        <p className={styles.userName}>{primaryText}</p>
        <p className={styles.secondaryDetails}>{secondaryText}</p>
      </div>
    </div>
  );
};

export default UserAvatar;
