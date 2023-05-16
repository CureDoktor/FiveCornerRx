import React from "react";
import styles from "./textarea.module.scss";
import Image from "next/image";
type Props = {
  placeholder: string;
};

const TextArea: React.FC<Props> = ({ placeholder }) => {
  return (
    <textarea placeholder={placeholder} className={styles.textarea}></textarea>
  );
};

export default TextArea;
