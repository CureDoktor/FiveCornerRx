import React from "react";
import styles from "./tadalafilcitrate.module.scss";
import tickVerified from "../../assets/icons/tick-circle.svg";
import icon from "../../assets/icons/Icon.svg";
import bg4 from "../../assets/images/bg4.svg";
import online1 from "../../assets/icons/Icon (1).svg";
import online2 from "../../assets/icons/Icon (2).svg";
import online3 from "../../assets/icons/Icon (3).svg";
import Footer from "../../components/Footer/Footer";
import Button from "react-bootstrap/Button";
import Hero from "../../components/Hero/Hero";
import MainNavbar from "../../components/Navbar/MainNavbar";
import TadalafilBottle from "../../assets/images/genericCialis.svg";
import Accordion from "../../components/Accordian/Accordian";
import ConnectorImage from "../../assets/images/connector.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
const TadalafilCitrate = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const history = useRouter();

  const redirekt = () => {
    history.push("/sign-up");
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className={styles.HomePagecontainer}>
        <div className={styles.hero_sectionSildenafilCitrate}>
          <div className={styles.width_component + " container pt-5 pb-5"}>
            <Hero
              type="light"
              redirect={redirekt}
              primaryHead="Generic Cialis"
              secondaryHead="Tadalafil Generic"
              details="We offer Generic Cialis, the preferred ED medication of men who want long-lasting results. Our FDA-approved medication stays effective for up to 36 hours, perfect for spontaneous, uninterrupted performance."
              image="/assets/images/genericCialis.svg"
            />
          </div>
        </div>
        {/* Verified Things */}
        <div className={styles.benifitsBG}>
          <div
            className={
              styles.benifits_container +
              " " +
              styles.width_component +
              " container display-flex py-5"
            }
          >
            <div
              className={
                "col-lg-4 d-flex justify-content-center align-items-center"
              }
            >
              <Image
                className=""
                width={30}
                height={30}
                src={tickVerified}
                alt="Card"
              />
              <p className={styles.card_text + " ps-md-2"}>
                Free, discreet 2-day shipping
              </p>
            </div>
            <div
              className={
                "col-lg-4 d-flex justify-content-center align-items-center"
              }
            >
              <Image
                className=""
                width={30}
                height={30}
                src={tickVerified}
                alt="Card"
              />
              <p className={styles.card_text + " ps-md-2"}>
                100% Safe. Verified. FDA-Approved.
              </p>
            </div>
            <div
              className={
                "col-lg-4 d-flex justify-content-center align-items-center"
              }
            >
              <Image
                className=""
                width={30}
                height={30}
                src={tickVerified}
                alt="Card"
              />
              <p className={styles.card_text + " ps-md-2"}>
                Prescribed by US medical experts
              </p>
            </div>
          </div>
        </div>
        {/* Verified Things */}
        {/* Proper Work Telling section */}
        <div className={styles.mainWorkscontainer}>
          <div
            className={
              styles.mainWorkscontainer_box +
              " " +
              styles.width_component +
              "  d-flex"
            }
          >
            <div className={styles.freeHealthImg}>
              <Image
                src="/assets/images/bg4.svg"
                width={551}
                height={531}
                alt=""
              />
            </div>
            <div className={styles.freeHealthtxt}>
              <h2>Convenient. Secure. Affordable</h2>
              <p>
                At Five Corners Rx, we understand the hassle and expense of
                traditional doctor visits and pharmacy trips. That's why we've
                made it easy to order your medication completely online. Our
                quick and secure checkout process and health survey takes just
                minutes to complete, so you can get back to enjoying your life
                with confidence and peace of mind.
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
        {/* Proper Work Telling section */}
        {/* Affordable plan */}
        <div className={styles.Affordable_container}>
          <div
            className={
              styles.Affordable_section +
              " " +
              styles.width_component +
              " d-flex justigy-content-between align-items-center py-5"
            }
          >
            <div className={styles.Affordable_left + " col-8"}>
              <h2>Transparent & Affordable Pricing for Plan</h2>
              <p>
                Our transparent and straightforward pricing policy ensures that
                you only pay for your medication. No hidden charges, no doctor's
                fees, screening fees, handling fees, insurance fees, or
                convenience fees. Every treatment plan clearly outlines the
                dosage, number of pills, and treatment duration, so you know
                exactly what you're getting.
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
            <div
              className={
                styles.Affordable_right + " text-center bg-light col-3"
              }
            >
              <h6>Starter Package</h6>
              <div className="d-flex justify-content-center align-items-end text-center">
                <h1>$2</h1>
                <p>/Per Pill</p>
              </div>
              <h5>Available Varities</h5>
              <p>20mg to 100mg</p>
              <p>4, 8, 12 and 16 tablets</p>
            </div>
          </div>
        </div>
        {/* Affordable plan */}
        {/* Online Services */}
        <div className={styles.OnlineServiceContainer}>
          <div>
            <h2 className="text-center">
              Easy Online Medicine For Men
              <br /> In 3 Quick Steps
            </h2>
            <div className={styles.OnlineServiceBox_div + " d-flex"}>
              <div
                className={
                  styles.OnlineServiceBox +
                  " col-lg-3 d-flex flex-column justify-content-center align-items-center text-center"
                }
              >
                <Image src={online1} height={90} width={90} alt="" />
                <p>Step 1</p>
                <h6>Start online visit</h6>
                <p>
                  Answer a few questions about your health history and symptoms.
                </p>
              </div>
              <Image
                className={styles.connectorImg}
                src={ConnectorImage}
                alt="connector"
                width={200}
                height={11}
              />
              <div
                className={
                  styles.OnlineServiceBox +
                  " col-lg-3 d-flex flex-column justify-content-center align-items-center text-center"
                }
              >
                <Image src={online2} height={90} width={90} alt="" />
                <p>Step 2</p>
                <h6>Hear back in 24 hours</h6>
                <p>
                  Our healthcare professionals will review your condition and
                  get back to you.
                </p>
              </div>
              <Image
                className={styles.connectorImg}
                src={ConnectorImage}
                alt="connector"
                width={200}
                height={11}
              />
              <div
                className={
                  styles.OnlineServiceBox +
                  " " +
                  " col-lg-3 d-flex flex-column justify-content-center align-items-center text-center"
                }
              >
                <Image src={online3} height={90} width={90} alt="" />
                <p>Step 3</p>
                <h6>Fast and free shipping</h6>
                <p>
                  You will receive your order in a discreet, unmarked package
                  SHIPPED FREE.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Online Services */}
        {/* FAQS */}
        <div className={styles.accordion}>
          <h1>Frequently Asked Questions</h1>
          <p>
            Do you have questions about our ED pills? We've got you covered!
            Check out our FAQ page for answers on
            <br /> our generic Viagra and Cialis, how effective and safe they
            are, and how our process works.
          </p>
          <div className={styles.accordion_wrapper}>
            <Accordion
              title="Is Generic Viagra as effective as Viagra?"
              content="The answer is yes! Generic Viagra contains the same active ingredient (sildenafil citrate) as brand-name Viagra and is equally effective in treating erectile dysfunction (ED). At Five Corners Rx, we exclusively work with a reputable and licensed pharmacy in the U.S. to ensure the safety, quality, and effectiveness of your ED pills. Rest assured that generic Viagra meets the same quality, safety, and efficacy standards as brand-name Viagra."
            />
            <Accordion
              title="Is Generic Cialis as effective as Cialis?"
              content="If you're wondering about Generic Cialis, we're happy to report that it's just as effective as brand-name Cialis. Both contain the same active ingredient (tadalafil) and have the same dosage and effectiveness in treating ED or symptoms of benign prostatic hyperplasia (BPH). The FDA in the United States regulates and monitors the quality, safety, and efficacy of generic Cialis to ensure it meets the same standards as the brand-name version."
            />
            <Accordion
              title="Do I need to be on a video call with a doctor?"
              content="At Five Corners Rx, we understand the importance of convenience and confidentiality. That's why you won't need to be in a video or phone call with a doctor to order ED pills from us. Your health survey provides your assigned U.S.-based physician with the necessary health information to prescribe your medication. In certain situations, additional information may be requested via email to ensure proper evaluation."
            />
            <Accordion
              title="How safe are ED pills?"
              content="Safety is our top priority, and ED pills are generally safe when taken as prescribed by a doctor. Although they may have potential side effects, such as headache, flushing, nasal congestion, upset stomach, back pain, vision changes, hearing loss, and priapism, they're generally safe. It's crucial to provide accurate health information in your health survey to allow your assigned evaluating physician to properly supervise your treatment and provide you with the correct dosage and instructions for use."
            />
            <Accordion
              title="Can I take more than the prescribed dosage?"
              content="Please don't take more than the prescribed dosage of ED pills, as it may increase the risk of side effects. If you believe that a stronger dosage may help you, please contact your assigned physician first for proper evaluation. If you experience disturbing or alarming side effects, please refer to the medication information leaflet included in your package or contact your physician immediately for urgent medical care."
            />
            <Accordion
              title="How can I get a refill of my ED pills?"
              content="Refills are a breeze with Five Corners Rx. We take care of your entire treatment schedule for 12 months or as indicated in your online prescription. Every month, we'll send a refill of your ED medication as recommended by your evaluating physician.
                At Five Corners Rx, we're committed to providing you with high-quality, safe, and effective ED pills, along with exceptional service and convenience. Order now and experience the Five Corners Rx difference.
                "
            />
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default TadalafilCitrate;
