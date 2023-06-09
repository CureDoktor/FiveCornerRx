import React from "react";
import styles from "./billingquestionnaire.module.scss";
import FormHeader from "../../components/FormHeader/FormHeader";
import QuestionnaireSteps from "../../components/QuestionnaireSteps/QuestionnaireSteps";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import { billingSteps } from "../../constants/quessionairesteps";
import ShippingForm from "../../components/CheckoutForm/ShippingForm";
import BillingForm from "../../components/CheckoutForm/BillingForm";
import PaymentInformation from "../../components/CheckoutForm/PaymentInformation";
import MainNavbar from "../../components/Navbar/MainNavbar";
import { motion } from "framer-motion";
import Image from "next/image";
const BillingQuestionnaire: React.FC = () => {
  const [step, setStep] = React.useState(0);

  const componentsArr = [
    <ShippingForm step={step} setStep={setStep} />,
    <BillingForm step={step} setStep={setStep} />,
    <PaymentInformation step={step} setStep={setStep} />,
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className={styles.pageContainer}>
        <div className={styles.contentContainer}>
          <div>
            <QuestionnaireSteps
              steps={billingSteps}
              setStep={setStep}
              step_no={step + 1}
            />
            <div className={styles.formsContainer + " container"}>
              <div className={styles.leftSide}>
                <ProductDetails />
              </div>
              <div className={styles.rightSide}>{componentsArr[step]}</div>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default BillingQuestionnaire;
