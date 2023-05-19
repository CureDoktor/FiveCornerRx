import React from "react";
// import { BrowserRouter as Link } from 'react-router-dom';
// import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import styles from "./faqpage.module.scss";
// import Hero from "../../components/Hero/Hero";
// import NavbarLight from "../../components/NavbarLight/NavbarLight";
import Footer from "../../components/Footer/Footer";
import Accordion from "../../components/Accordian/Accordian";
import AccordionSmall from "../../components/AccordianSmall/AccordianSmall";
import MainNavbar from "../../components/Navbar/MainNavbar";
import { motion } from "framer-motion";
import { CONSTANTS } from "../../constants/shared";
import Image from "next/image";
const FaqsPage = () => {
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
      <div className={styles.HomePagecontainer}>
        <div className={styles.hero_sectionFaqsPage}>
          <div className={styles.width_component + " container"}>
            {/* <NavbarLight /> */}

            <div className={styles.faqHero + "  order"}>
              <h1>FAQS</h1>
              <h6>
                Welcome to Five Corners Rx's Frequently Asked Questions, where
                we provide answers to your inquiries about our services and
                treatments.
              </h6>
            </div>
          </div>
        </div>
        <div className={styles.FaqsPage_container}>
          <div
            className={
              styles.FaqsPage_section +
              " " +
              styles.width_component +
              " d-flex col-lg-12"
            }
          >
            {/* small faqs */}
            <div
              className={
                styles.accordion + " " + styles.a_small + " col-lg-4 mr-5"
              }
            >
              <AccordionSmall
                title="About FiveCornerRx"
                content="There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by
            injected humour, or randomised words which don't look even
            slightly believable."
              />
              <AccordionSmall
                title="Our Services"
                content="There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by
            injected humour, or randomised words which don't look even
            slightly believable."
              />
              <AccordionSmall
                title="Treatments"
                content="There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by
            injected humour, or randomised words which don't look even
            slightly believable."
              />
              <AccordionSmall
                title="Delivery"
                content="There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by
            injected humour, or randomised words which don't look even
            slightly believable."
              />
            </div>
            {/* small faqs */}
            <div
              className={styles.accordion + " " + styles.a_large + " col-lg-8"}
            >
              <h4>About FiveCornerRX</h4>
              <div className={styles.accordion_wrapper_faq}>
                <Accordion
                  title="How do Five Corner Rx consultations work?"
                  content="There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable."
                />
                <Accordion
                  title="Do I need a prescription to use Five Corner Rx?"
                  content="Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version."
                />
                <Accordion
                  title="Do you provide the same medication as my local pharmacy?"
                  content="Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version."
                />
                <Accordion
                  title="Is the packaging discreet?"
                  content="Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version."
                />
                <Accordion
                  title="Will Rocket Rx appear on my bank statement?"
                  content="Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version."
                />
                <Accordion
                  title="Is this service confidential?"
                  content="Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version."
                />
                <Accordion
                  title="Why are Five Corners RX LLC telehealth services not available in South Carolina?"
                  content="Unfortunately, Five Corners RX LLC's telehealth services are not currently available in South Carolina
                due to regulatory limitations or other factors. We apologize for
                any inconvenience this may cause."
                />
                <Accordion
                  title="Are there any plans to expand telehealth services to South Carolina in the future?"
                  content="While we cannot provide a definite timeline, Five Corners RX LLC is constantly evaluating
                opportunities to expand telehealth services
                to new locations, including South Carolina. We recommend
                checking our website or contacting our customer support for updates."
                />
                <Accordion
                  title="Are there any alternative telehealth providers available in South Carolina?"
                  content="Yes, there are alternative telehealth providers
                available in South Carolina. We encourage you to
                explore other telehealth platforms or consult with local healthcare providers for options that best suit
                your needs."
                />
                <Accordion
                  title="Can I still receive medical advice or assistance from Five Corners RX LLC if I'm in So
                uth Carolina?"
                  content=" If you are located in South Carolina, you may not be able to access Five Corners RX LLC's telehealth
                services. However, you can still contact our customer support for general inquiries or seek medical
                advice from local healthcare providers
                in your area."
                />
                <Accordion
                  title="How can I stay updated on the availability of Five Corners RX LLC's telehealth services in South
                Carolina?"
                  content="To stay informed about the availability of telehealth services in South Carolina, we recommend
                regularly visiting our website or
                subscribing to our newsletter, where we will provide updates on service
                expansions and new offerings."
                />
                <Accordion
                  title="Are there any other online healthcare resources I can use in South Carolina?"
                  content="Yes, there are various online healthcare resources available in South
                Carolina. These may include local
                telehealth providers, online directories, or platforms that connect patients with healthcare
                professionals. It is recommended to research and explore options that meet your specific needs."
                />
              </div>

              <h4 className={styles.mtop_h4}>Our Services</h4>
              <div className={styles.accordion_wrapper_faq}>
                <Accordion
                  title="Do I need a prescription to buy from Five Corners Rx?"
                  content="There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable."
                />
                <Accordion
                  title="Is my information secure?"
                  content="Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version."
                />
                <Accordion
                  title="How can I get a refill of my ED pills?"
                  content="Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version."
                />
                <Accordion
                  title="Which payment methods do you accept?"
                  content="Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version."
                />
              </div>

              <h4 className={styles.mtop_h4}>Treatments</h4>
              <div className={styles.accordion_wrapper_faq}>
                <Accordion
                  title="Are you wondering whether Generic Viagra is as effective as Viagra?"
                  content="There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable."
                />
                <Accordion
                  title="Is Generic Cialis as effective as Cialis?"
                  content="Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version."
                />
                <Accordion
                  title="Do I need to be on a video call with a doctor?"
                  content="Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version."
                />
                <Accordion
                  title="How safe are ED pills?"
                  content="Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version."
                />
                <Accordion
                  title="Can I take more than the prescribed dosage?
"
                  content="Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version."
                />
              </div>

              <h4 className={styles.mtop_h4}>Delivery</h4>
              <div className={styles.accordion_wrapper_faq}>
                <Accordion
                  title="What are my delivery options?"
                  content="There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable."
                />
                <Accordion
                  title="Which states do you deliver to?"
                  content="Yes! Generic Viagra contains the same active ingredient as
                brand-name Viagra and is just as effective in treating ED. In
                fact, the only difference is the price. Five Corners Rx's
                U.S.-based pharmacy ensures that our generic Viagra meets the
                same quality, safety, and efficacy standards as the brand-name
                version."
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.StillQuestion_container}>
          <div className={styles.StillQuestion_section + " text-center"}>
            <h1>Still got a question?</h1>
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
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default FaqsPage;
