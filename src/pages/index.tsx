import React from "react";

//Components
import Hero from "../components/Hero/Hero";
import BenifitsCard from "../components/BenefitCard/BenefitCard";
import { Button } from "react-bootstrap";
import styles from "../pages/home/homepage.module.scss";
import freeConsult from "../assets/icons/freeConsult.svg";
import shipping from "../assets/icons/shipping.svg";
import hearBack from "../assets/icons/hearBack.svg";
import icon from "../assets/icons/Icon.svg";
import halfBottle1 from "../assets/images/halfbottle.svg";
import CialisHalfBottle1 from "/assets/images/cialishalfbottle.svg";
import drMen from "../assets/images/drMen.svg";
import cialis from "../assets/images/cialis.svg";
import Sildenafil from "../assets/images/bottle-design-Tadalafil1.svg";
import MainNavbar from "../components/Navbar/MainNavbar";
import BottleDesign from "/assets/images/genericCialis.svg";
import Link from "next/link";
import Accordion from "../components/Accordian/Accordian";
import Spacer from "../components/Spacer/Spacer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
const Home: React.FC = () => {
  const history = useRouter();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <div>
        <div className={styles.HomePagecontainer}>
          <div className={styles.hero_section}>
            <div className={styles.width_component + " container pt-5"}>
              <Hero
                type="dark"
                redirect={redirekt}
                primaryHead="Regain Control of Erectile Dysfunction"
                secondaryHead=""
                details="Obtain AUTHENTIC FDA-approved medication for ED in under 5 minutes. No face-to-face medical consultations, no medical bills, and no insurance necessary."
                image="/assets/images/genericCialis.svg"
              />
            </div>
          </div>
          {/* Benifits Section */}
          <div
            className={
              styles.benifits_container +
              " " +
              styles.width_component +
              " container display-flex"
            }
          >
            <BenifitsCard
              title="FREE Consulatation"
              desc="Answer a few questions about your health history and symptoms."
              img={freeConsult}
            />
            <BenifitsCard
              title="Hear back in 24 hours"
              desc="Our healthcare professionals will review your condition and get back to you."
              img={hearBack}
            />
            <BenifitsCard
              title="Fast and free shipping"
              desc="You will receive your order in a discreet, unmarked package SHIPPED FREE."
              img={shipping}
            />
          </div>
          {/* Get Treatment Section */}
          <div
            className={
              styles.get_treatment_container +
              " " +
              styles.width_component +
              " container"
            }
          >
            <h1 className="text-center">Get the best treatment you need</h1>
            <p className={styles.lead + " text-center"}>
              Five Corners Rx provides various treatment options suitable for
              your finances and daily routine.
            </p>
            <div className={styles.treatment_offers_container}>
              <div className={styles.treatment_offers_box}>
                <p className={styles.offers_p1}>Sildenafil Citrate</p>
                <h5>Generic Viagra</h5>
                <p className={styles.offers_p2}>Begins at $3 per pill</p>
                {/* <Link > */}
                <Button
                  className={styles.FreeConsultlink}
                  onClick={() => {
                    history.push("/sildenafil-citrate");
                  }}
                >
                  Start Now
                  <Image
                    className={styles.Free_Consult_rightArrow + " px-1"}
                    src={icon}
                    width={15}
                    height={11}
                    alt="arrow"
                  />
                </Button>
                {/* </Link> */}
                <Image
                  src="/assets/images/halfbottle.svg"
                  alt=""
                  width={280}
                  height={300}
                />
              </div>
              <div className={styles.treatment_offers_box}>
                <p className={styles.offers_p1}>Tadalafil Generic</p>
                <h5>Version of Cialis</h5>
                <p className={styles.offers_p2}>Begins at $3 per pill</p>
                {/* <Link > */}
                <Button
                  className={styles.FreeConsultlink}
                  onClick={() => {
                    history.push("/tadalafil-citrate");
                  }}
                >
                  Start Now
                  <Image
                    className={styles.Free_Consult_rightArrow + " px-1"}
                    src={icon}
                    width={15}
                    height={11}
                    alt="arrow"
                  />
                </Button>
                <Image
                  src="/assets/images/cialishalfbottle.svg"
                  alt=""
                  width={280}
                  height={300}
                />
              </div>
            </div>
          </div>
          {/* Treatment Option */}
          <div className={styles.treatment_option_container}>
            <div
              className={
                styles.treatment_option_container_flex +
                " " +
                styles.width_component +
                " container d-flex"
              }
            >
              <div className={styles.treatment_option_text_container}>
                <h2>
                  Which Treatment Option
                  <br /> Suits You Best?
                </h2>
                <p className={styles.lead}>
                  Our top priority is giving you the best results. Simply select
                  your preferred treatment option, and our team of certified
                  American doctors will find the best approach for your needs.
                </p>
                {/* <Link > */}
                <Button
                  className={styles.FreeConsultlink}
                  onClick={() => {
                    history.push("/sign-up");
                  }}
                >
                  Start Now
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
              <div className={styles.treatment_option_img_container}>
                <Image
                  src="/assets/images/drMen.svg"
                  alt=""
                  width={470}
                  height={405}
                />
              </div>
            </div>
          </div>
          {/* FAQS */}
          {/* <Faqs /> */}

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
          </div>
          {/* FAQS */}
          {/* Get Ready */}
          <div className={styles.getReady_container}>
            <div
              className={
                styles.getReady_section +
                " container" +
                " " +
                styles.width_component
              }
            >
              <div className={styles.getReady_img_container}>
                <div className={styles.getReady_img_box}>
                  <Image
                    src="/assets/images/bottle-design-Tadalafil1.svg"
                    className={styles.getReady_viagra}
                    alt="get ready"
                    width={470}
                    height={405}
                  />
                </div>
                <div className={styles.getReady_img_box}>
                  <Image
                    src="/assets/images/cialis.svg"
                    alt="get ready"
                    className={styles.getReady_cialis}
                    width={350}
                    height={350}
                  />
                </div>
              </div>
              <div className={styles.getReady_txt_container}>
                <h2>Ready to get started?</h2>
                <h5>Try Five Corners Rx's ED pills for real satisfaction!</h5>
                <p>
                  Say goodbye to ED with Five Corners Rx Don't let ED control
                  your life any longer. With safe, effective, and trusted ED
                  pills, you can regain your youthful drive and vigor in the
                  bedroom. For more than 20 years, men have trusted ED pills to
                  extend their sexual prime, and now it's your turn.
                </p>
                {/* <Link > */}
                <Button
                  className={styles.FreeConsultlink}
                  onClick={() => {
                    history.push("/sign-up");
                  }}
                >
                  Start Now
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
        </div>
      </div>
    </motion.main>
  );
};

export default Home;
