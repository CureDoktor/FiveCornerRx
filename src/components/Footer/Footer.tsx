import React from "react";
// import { BrowserRouter as Link } from "react-router-dom";
import styles from "./style.module.scss";
import logo from "../../assets/icons/logo.svg";
import phone from "../../assets/icons/phone-icon.svg";
import mail from "../../assets/icons/mail.svg";
import payment from "../../assets/icons/visa.jpeg";
import Image from "next/image";
import { PATH } from "../../constants/paths";
import { CONSTANTS } from "../../constants/shared";
import { useRouter } from "next/router";
const Footer = () => {
  const history = useRouter();
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.footerDetails}>
          <h3>Disclaimer</h3>
          <br />
          <p>
            In order to obtain treatments for erectile dysfunction, an online
            consultation with a healthcare provider is required, and a
            prescription must be obtained. The cost of each dose is dependent on
            the specific product and subscription plan that is chosen. Five
            Corners RX LLC is not affiliated with any of the manufacturers of
            the Prescription Medications mentioned, and the trademarks and logos
            belong to their respective owners. Five Corners RX LLC does not
            offer advice, endorsements, or recommendations for any particular
            prescription drug, pharmacy, or other information. It is recommended
            to seek medical advice prior to making any changes to medication or
            prescription. Five Corners RX LLC is not an insurance provider or
            Medicaid/Medicare prescription drug plan. At checkout, users are
            responsible for paying the displayed price.
          </p>
        </div>
        <div
          className={
            styles.footer_section +
            " " +
            styles.width_component +
            " container d-flex justify-content-between"
          }
        >
          <div className={styles.footer_left}>
            <Image src={logo} alt="logo" width={164} height={18} />
            <ul className="d-block ">
              <li>
                <Image src={phone} alt="" width={22} height={20} />
                <span className="ps-2">{CONSTANTS.PHONE_NUMBER}</span>
              </li>
              <li>
                <Image src={mail} alt="" width={22} height={20} />
                <span className="ps-2">support@fivecornersrx.com</span>
              </li>
            </ul>
          </div>
          <div
            className={styles.footer_right + " d-flex justify-content-between"}
          >
            <div className={styles.footer_right_inner}>
              <h5>Useful Links</h5>
              <ul className="d-block">
                {/* <Link> */}
                {/* <li>About us</li> */}
                {/* </Link> */}
                <li onClick={() => history.push(PATH.HowItWork)}>
                  How it works
                </li>
                {/* <Link> */}
                <li onClick={() => history.push(PATH.FaqsPage)}>FAQs</li>
                {/* </Link> */}
              </ul>
            </div>
            <div className={styles.footer_right_inner}>
              <h5>Popular Treatments</h5>
              <ul className="d-block">
                {/* <Link> */}
                <li onClick={() => history.push(PATH.SildenafilCitrate)}>
                  Sildenafil Citrate
                </li>
                {/* </Link> */}
                {/* <Link> */}
                <li onClick={() => history.push(PATH.TadalafilCitrate)}>
                  Tadalafil Generic
                </li>
                {/* </Link> */}
              </ul>
            </div>
            <div className={styles.footer_right_inner}>
              <h5>Legal</h5>
              <ul className="d-block">
                {/* <Link> */}
                <li onClick={() => history.push(PATH.PrivacyPolicy)}>
                  Privacy Policy
                </li>
                {/* </Link> */}
                {/* <Link> */}
                <li onClick={() => history.push(PATH.TermsAndConditions)}>
                  Terms & Conditions
                </li>
                {/* </Link> */}
                <li onClick={() => history.push(PATH.ConsentToTeleHealth)}>
                  Consent To Telehealth
                </li>
                {/* </Link> */}
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.footer_lower}>
        <div
          className={
            styles.footer_section_lower +
            " " +
            styles.width_component +
            " container  d-flex justify-content-between align-items-center"
          }
        >
          <div className={styles.footer_lower_left}>
            <p>Copyright © Five Corners RX LLC 2023. All Rights Reserved</p>
          </div>
          {/* <div className={styles.footer_lower_right}>
            <Image
              src="/assets/icons/visa.jpeg"
              alt=""
              height={25}
              width={200}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
