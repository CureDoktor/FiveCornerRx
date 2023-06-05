import React from "react";
import { Button } from "react-bootstrap";
import styles from "./howitwork.module.scss";

//image
import icon from "../../assets/icons/Icon.svg";
import bg from "../../assets/images/BG.svg";
import bg1 from "../../assets/images/BG-1.svg";
import bg2 from "../../assets/images/BG-2.svg";
import wave from "../../assets/images/wave.svg";
import MainNavbar from "../../components/Navbar/MainNavbar";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import { CONSTANTS } from "../../constants/shared";
import Image from "next/image";
import { useRouter } from "next/router";
const HowItsWork = () => {
  const history = useRouter();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className={styles.HowItsWOrkcontainer}>
        <div className={styles.hero_sectionHowItsWork}>
          <div
            className={
              styles.mainHOWITSWORK +
              " container width_component mainHOWITSWORK"
            }
          >
            {/* <Navbar /> */}

            <div className={styles.howitswork_container}>
              <h1>How it works</h1>
              <p>
                Welcome to Five Corners Rx, where getting ED medication online
                is now easier than ever before. Our optimized services have been
                designed to save you time and provide you with the simplest,
                fastest, and most affordable way to get your ED medication. Our
                process is straightforward - select your treatment plan,
                complete the checkout process, and answer a quick health survey
                to place your order. With an average order time of 5 minutes or
                less, you can start overcoming ED in no time!
              </p>
            </div>
          </div>
        </div>
        {/* Proper Work Telling section */}
        <div className={styles.mainWorkscontainer}>
          <div
            className={
              styles.mainWorkscontainer_box +
              " " +
              styles.width_component +
              " d-flex"
            }
          >
            <div className={styles.freeHealthImg}>
              <Image
                src="/assets/images/BG.svg"
                width={540}
                height={520}
                alt=""
              />
            </div>
            <div className={styles.freeHealthtxt}>
              <h2>Free Health Evaluation</h2>
              <p>
                To ensure your safety and satisfaction, we provide a free online
                health evaluation through our partner US-licensed physicians for
                every new customer. Our quick health survey will help our
                physicians effectively evaluate your health and preferred
                treatment plan. If approved, your order will be cleared and
                shipped to your doorstep. So why wait? Start your journey
                towards overcoming ED by completing our health survey now!
              </p>
              <Button
                onClick={() => history.push("/sign-up")}
                className={styles.Free_Consult_link}
              >
                Start FREE Consultation
                <Image
                  className={styles.Free_Consult_rightArrow + " px-1"}
                  src={icon}
                  width={15}
                  height={11}
                  alt="arrow"
                />
              </Button>
            </div>
          </div>
          <div className={styles.longterm_section}>
            <div
              className={
                styles.mainWorkscontainer_box +
                " " +
                styles.mainWorkscontainer_reverse +
                " " +
                styles.width_component +
                " d-flex"
              }
            >
              <div className={styles.freeHealthImg}>
                <Image
                  src="/assets/images/BG-1.svg"
                  width={540}
                  height={520}
                  alt=""
                />
              </div>
              <div className={styles.freeHealthtxt}>
                <h2>Free Health Evaluation</h2>
                <p>
                  To ensure your safety and satisfaction, we provide a free
                  online health evaluation through our partner US-licensed
                  physicians for every new customer. Our quick health survey
                  will help our physicians effectively evaluate your health and
                  preferred treatment plan. If approved, your order will be
                  cleared and shipped to your doorstep. So why wait? Start your
                  journey towards overcoming ED by completing our health survey
                  now!
                </p>
                {/* <Link href="#"> */}
                <Button
                  onClick={() => history.push("/sign-up")}
                  className={styles.Free_Consult_link}
                >
                  Start FREE Consultation
                  <Image
                    className={styles.Free_Consult_rightArrow + " px-1"}
                    src={icon}
                    width={15}
                    height={11}
                    alt="arrow"
                  />
                </Button>
                {/* </Link> */}
              </div>
            </div>
          </div>
          <div
            className={
              styles.mainWorkscontainer_box +
              " " +
              styles.mainWorkscontainer_save +
              " " +
              styles.width_component +
              " d-flex"
            }
          >
            <div className={styles.freeHealthImg}>
              <Image
                src="/assets/images/BG-2.svg"
                width={540}
                height={520}
                alt=""
              />
            </div>
            <div className={styles.freeHealthtxt}>
              <h2>SAFE and SECURE</h2>
              <p>
                Your privacy and security are our top priorities at Five Corners
                Rx. We exercise discretion on every level to protect your
                privacy and maintain compliance with existing regulations. All
                orders are shipped in plain, unbranded packages, and your bank
                statements will not disclose the specifics of your purchase.
                With our safe and secure service, you can order with confidence.
                Don't let ED hold you back any longer. Start your journey
                towards overcoming ED now with us.
              </p>
              <div>
                <Button
                  onClick={() => history.push("/sign-up")}
                  className={styles.Free_Consult_link}
                >
                  Start FREE Consultation
                  <Image
                    className={styles.Free_Consult_rightArrow + " px-1"}
                    src={icon}
                    width={15}
                    height={11}
                    alt="arrow"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Proper Work Telling section */}
        {/* Chat with us */}
        <div className={styles.chatWithUs_conatiner}>
          <div className={styles.chatWithUs_section}>
            <div
              className={
                "d-flex justify-content-center align-items-center text-center"
              }
            >
              <Image
                src="/assets/images/wave.svg"
                alt=""
                width={53}
                height={67}
              />
              <h2>Chat with us!</h2>
            </div>
            <p>
              If you have more questions, you may send us an email at{" "}
              <strong>support@fivecornersrx.com</strong>
            </p>
            <p>
              You may also reach us through our toll-free hotline{" "}
              <strong>{CONSTANTS.PHONE_NUMBER},</strong>
              <br />
              Monday- Sunday, 9 AM to 6 PM EST.
            </p>
            <p>
              You may also visit our{" "}
              <b
                style={{ cursor: "pointer" }}
                onClick={() => history.push("/faq")}
              >
                {" "}
                Frequently Asked Questions
              </b>{" "}
              page for more information.
            </p>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default HowItsWork;
