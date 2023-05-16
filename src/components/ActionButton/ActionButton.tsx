import React, { ReactElement } from "react";
import styles from "./actionbutton.module.scss";
import Image from "next/image";
type Props = {
  type: string;
  text: string;
  img?: string;
  action?: () => void;
  disabled?: boolean;
};

const ActionButton: React.FC<Props> = ({
  type,
  text,
  img,
  action,
  disabled,
}) => {
  return (
    <button disabled={disabled} onClick={action} className={styles[type]}>
      {img && <Image alt="button" width={50} height={50} src={img} />}
      {text}
    </button>
  );
};

export default ActionButton;
