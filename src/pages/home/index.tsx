import React from "react";

//Components
import Hero from "../../components/Hero/Hero";
import BenifitsCard from "../../components/BenefitCard/BenefitCard";
import { Button } from "react-bootstrap";
import styles from "./homepage.module.scss";
import freeConsult from "../../assets/icons/freeConsult.svg";
import shipping from "../../assets/icons/shipping.svg";
import hearBack from "../../assets/icons/hearBack.svg";
import icon from "../../assets/icons/Icon.svg";
import halfBottle1 from "../../assets/images/halfbottle.svg";
import CialisHalfBottle1 from "../../assets/images/cialishalfbottle.svg";
import drMen from "../../assets/images/drMen.svg";
import cialis from "../../assets/images/cialis.svg";
import Sildenafil from "../../assets/images/bottle-design-Tadalafil1.svg";
import Footer from "../../components/Footer/Footer";
import MainNavbar from "../../components/Navbar/MainNavbar";
import BottleDesign from "../../assets/images/bottle-design.svg";
import Link from "next/link";
import Accordion from "../../components/Accordian/Accordian";
import Spacer from "../../components/Spacer/Spacer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
const HomePage = () => {
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
                image={BottleDesign}
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
                <Link
                  style={{ textDecoration: "none" }}
                  href="/SildenafilCitrate"
                >
                  <Button className={styles.FreeConsultlink}>
                    Start Now
                    <Image
                      className={styles.Free_Consult_rightArrow + " px-1"}
                      src={icon}
                      width={15}
                      height={11}
                      alt="arrow"
                    />
                  </Button>
                </Link>

                {/* </Link> */}
                <Image src={halfBottle1} alt="" width={280} height={300} />
              </div>
              <div className={styles.treatment_offers_box}>
                <p className={styles.offers_p1}>Tadalafil Generic</p>
                <h5>Version of Cialis</h5>
                <p className={styles.offers_p2}>Begins at $3 per pill</p>
                {/* <Link > */}
                <Link
                  style={{ textDecoration: "none" }}
                  href="/TadalafilCitrate"
                >
                  <Button className={styles.FreeConsultlink}>
                    Start Now{" "}
                    <Image
                      className={styles.Free_Consult_rightArrow + " px-1"}
                      src={icon}
                      width={15}
                      height={11}
                      alt="arrow"
                    />
                  </Button>
                </Link>
                <Image
                  src={CialisHalfBottle1}
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
                <Button className={styles.FreeConsultlink}>
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
                <Image src={drMen} alt="" width={470} height={405} />
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
                    src={Sildenafil}
                    className={styles.getReady_viagra}
                    alt="get ready"
                    width={470}
                    height={405}
                  />
                </div>
                <div className={styles.getReady_img_box}>
                  <Image
                    src={cialis}
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
                <Button className={styles.FreeConsultlink}>
                  Start Now
                  <Image
                    className={styles.Free_Consult_rightArrow + " mx-2"}
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

export default HomePage;
