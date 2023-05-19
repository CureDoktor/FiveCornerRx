import React from "react";
import styles from "./benefitcard.module.scss";
import Image from "next/image";
// import { BrowserRouter as Link } from "react-router-dom";
type Props = {
  title: string;
  desc: string;
  img: string;
};
const BenefitCard: React.FC<Props> = ({ title, desc, img }) => {
  return (
    <>
      <div className={styles.benifitsCard + " col-lg-4"}>
        <Image className="" src={img} width={50} height={50} alt="Card" />
        <div className={styles.card_body + " ps-md-3"}>
          <h5 className={styles.card_title}>{title}</h5>
          <p className={styles.card_text}>{desc}</p>
        </div>
      </div>
    </>
  );
};

export default BenefitCard;
