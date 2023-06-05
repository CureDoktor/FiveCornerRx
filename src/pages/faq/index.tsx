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
                content="Five Corners Rx is your trusted telehealth provider. We offer convenient online consultations with licensed healthcare providers, ensuring you receive the care you need from the comfort of your home. With a focus on confidentiality and quality, we provide safe and effective medications delivered right to your doorstep. Experience accessible healthcare with Five Corners Rx."
              />
              <AccordionSmall
                title="Our Services"
                content="Five Corners Rx offers online telehealth consultations with licensed healthcare providers and convenient delivery of safe and effective medications. Experience accessible and confidential healthcare from the comfort of your own home."
              />
              <AccordionSmall
                title="Treatments"
                content="Five Corners Rx provides telehealth consultations and treatments for erectile dysfunction (ED). Our licensed healthcare providers offer personalized assessments and prescribe effective medications to help address ED concerns. Experience discreet and convenient solutions for ED with Five Corners Rx's telehealth services."
              />
              <AccordionSmall
                title="Delivery"
                content="At Five Corners Rx, we offer convenient and reliable delivery options for your medications. We partner with trusted shipping carriers to ensure your prescriptions reach you in a timely manner. Depending on your location and preferences, we provide standard shipping with estimated delivery times, as well as expedited shipping options for faster delivery. During the ordering process, you will be able to select the delivery option that best suits your needs."
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
                  content="At Five Corner Rx, consultations are conducted through our secure telehealth platform. You can schedule an appointment with one of our licensed healthcare providers who will assess your medical condition, discuss your symptoms, and recommend appropriate treatment options. Our consultations are convenient, confidential, and designed to ensure you receive the necessary care from the comfort of your own home."
                />
                <Accordion
                  title="Do I need a prescription to use Five Corner Rx?"
                  content="Yes, you will need a prescription to obtain medication through Five Corner Rx. During your telehealth consultation, our healthcare providers will evaluate your medical condition and if appropriate, prescribe the necessary medication. We prioritize your health and safety, ensuring that you receive the proper treatment for your specific needs."
                />
                <Accordion
                  title="Do you provide the same medication as my local pharmacy?"
                  content="Yes, Five Corners Rx provides the same medications that you would find at your local pharmacy. We work with licensed pharmacies and reputable suppliers to ensure that the medications we offer are of the highest quality. You can trust that the medications you receive through our service are safe, effective, and meet the necessary regulatory standards."
                />
                <Accordion
                  title="Is the packaging discreet?"
                  content="Yes, we understand the importance of privacy and take discreet packaging seriously. Your medications will be packaged in plain, unmarked packaging without any indication of the contents. We prioritize your confidentiality and strive to ensure that your healthcare needs are handled with the utmost discretion."
                />
                <Accordion
                  title="Will Five Corners RX appear on my bank statement?"
                  content="No, your bank statement will not show the name 'Five Corners Rx.' To ensure your privacy, we use a discreet billing descriptor that does not directly reference our services or the nature of your purchase. We understand the importance of confidentiality and take measures to protect your privacy throughout the entire process."
                />
                <Accordion
                  title="Is this service confidential?"
                  content="Yes, confidentiality is a top priority at Five Corners Rx. We adhere to strict privacy and security measures to safeguard your personal information. All consultations and medical records are kept confidential in accordance with applicable laws and regulations. Your personal information is handled with the utmost care and stored securely to ensure your privacy and peace of mind."
                />
              </div>

              <h4 className={styles.mtop_h4}>Our Services</h4>
              <div className={styles.accordion_wrapper_faq}>
                <Accordion
                  title="Do I need a prescription to buy from Five Corners Rx?"
                  content="At Five Corners Rx, you won't need a prescription to order ED pills. All orders come with a free online evaluation from a U.S.-licensed physician. If approved, an e-prescription will be provided to dispense and ship your medication. We specialize in men's health and plan to expand our offerings to include other essential men's health medication following the same ordering process as our ED pills."
                />
                <Accordion
                  title="Is my information secure?"
                  content="We understand the importance of privacy, which is why all orders are packed and shipped discreetly. Your shared information is also safe with us, and we make all reasonable efforts to ensure its security. We don't charge any hidden fees, including doctor's fees, pharmacy fees, maintenance fees, insurance fees, or handling fees. With Five Corners Rx, you only pay for your ED pills."
                />
                <Accordion
                  title="How can I get a refill of my ED pills?"
                  content="Refills are a breeze with Five Corners Rx. We take care of your entire treatment schedule for 12 months or as indicated in your online prescription. Every month, we'll send a refill of your ED medication as recommended by your evaluating physician. At Five Corners Rx, we're committed to providing you with high-quality, safe, and effective ED pills, along with exceptional service and convenience. Order now and experience the Five Corners Rx difference."
                />
                <Accordion
                  title="Which payment methods do you accept?"
                  content="At Five Corners Rx, we currently accept credit cards as our primary payment method. We accept major credit cards, including Visa, Mastercard, American Express, and Discover. By utilizing credit card payments, we aim to provide a convenient and secure transaction process for our customers. We understand the importance of online security and take measures to ensure that your payment information is protected. If you have any concerns or questions regarding payment methods, please feel free to reach out to our customer support team, and they will be happy to assist you."
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
                  title="Can I still receive medical advice or assistance from Five Corners RX LLC if I'm in South Carolina?"
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

              <h4 className={styles.mtop_h4}>Treatments</h4>
              <div className={styles.accordion_wrapper_faq}>
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
              </div>

              <h4 className={styles.mtop_h4}>Delivery</h4>
              <div className={styles.accordion_wrapper_faq}>
                <Accordion
                  title="What are my delivery options?"
                  content="At Five Corners Rx, we offer convenient and reliable delivery options for your medications. We partner with trusted shipping carriers to ensure your prescriptions reach you in a timely manner. Depending on your location and preferences, we provide standard shipping with estimated delivery times, as well as expedited shipping options for faster delivery."
                />
                <Accordion
                  title="Which states do you deliver to?"
                  content="We currently deliver medications to a wide range of states across the United States. However, delivery availability may vary based on state regulations and licensing requirements. To determine if we deliver to your state, please visit our website or contact our customer support team. We are committed to expanding our reach and providing our services to as many states as possible, ensuring accessible healthcare for our valued customers."
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
