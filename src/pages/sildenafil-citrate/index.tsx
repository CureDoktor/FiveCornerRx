import React from "react";
import styles from "./sildenafilcitrate.module.scss";
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
import SildenafilCitrateBottle from "../../assets/images/bottle-design-Sildenafil.svg";
import Accordion from "../../components/Accordian/Accordian";
import ConnectorImage from "../../assets/images/connector.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
const SildenafilCitrate = () => {
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
          <div className={styles.width_component + " container"}>
            <Hero
              type="light"
              redirect={redirekt}
              primaryHead="Generic Viagra"
              secondaryHead="Sildenafil Citrate"
              details="Get the Same Powerful Benefits at a Fraction of the Cost with Generic Viagra. Our FDA-approved medication contains the same active ingredient as Viagra, but is available at a fraction of the cost."
              image={SildenafilCitrateBottle}
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
            <div className="col-lg-4 d-flex justify-content-center align-items-center">
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
            <div className="col-lg-4 d-flex justify-content-center align-items-center">
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
              " d-flex"
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
                With Five Corners Rx, you only pay for what you need. Our
                straightforward pricing policy ensures there are no hidden fees
                or charges, so you can focus on what matters most. Choose your
                preferred treatment plan based on your individual needs and
                budget.
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
                styles.Affordable_right + "  text-center bg-light col-3"
              }
            >
              <h6>Starter Package</h6>
              <div
                className={
                  "d-flex justify-content-center align-items-end text-center"
                }
              >
                <h1>$2</h1>
                <p>/Per Pill</p>
              </div>
              <h5>Available Varities</h5>
              <p>20mg to 100mg</p>
              <p>4, 8, 12 and 16 tablets</p>
            </div>
          </div>
        </div>
        <div className={styles.OnlineServiceContainer}>
          <div>
            <h2 className={"text-center"}>
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
                <Image src={online2} alt="" width={90} height={90} />
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
                  " col-lg-3 d-flex flex-column justify-content-center align-items-center text-center"
                }
              >
                <Image src={online3} alt="" width={90} height={90} />
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
              content="Yes! Generic Viagra contains the same active ingredient as brand-name Viagra and is just as effective in treating ED. In fact, the only difference is the price. Five Corners Rx's U.S.-based pharmacy ensures that our generic Viagra meets the same quality, safety, and efficacy standards as the brand-name version."
            />
            <Accordion
              title="Is Generic Cialis as effective as Cialis?"
              content="Yes! Generic Viagra contains the same active ingredient as brand-name Viagra and is just as effective in treating ED. In fact, the only difference is the price. "
            />
            <Accordion
              title="Do I need to be on a video call with a doctor?"
              content="Yes! Generic Viagra contains the same active ingredient as brand-name Viagra and is just as effective in treating ED. In fact, the only difference is the price. "
            />
            <Accordion
              title="How safe are ED pills?"
              content="Yes! Generic Viagra contains the same active ingredient as brand-name Viagra and is just as effective in treating ED. In fact, the only difference is the price. "
            />
            <Accordion
              title="Can I take more than the prescribed dosage?"
              content="Yes! Generic Viagra contains the same active ingredient as brand-name Viagra and is just as effective in treating ED. In fact, the only difference is the price. "
            />
            <Accordion
              title="How can I get a refill of my ED pills?"
              content="Yes! Generic Viagra contains the same active ingredient as brand-name Viagra and is just as effective in treating ED. In fact, the only difference is the price. "
            />
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default SildenafilCitrate;
