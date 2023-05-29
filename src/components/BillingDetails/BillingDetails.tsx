import * as React from "react";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import InputComponent from "../InputComponent/InputComponent";
import { useContext, useEffect, useState } from "react";
import styles from "./billingdetails.module.scss";
import MasterCardIcon from "../../assets/icons/MasterCardicon.svg";
import VisaIcon from "../../assets/icons/visaicon.svg";
import Spacer from "../Spacer/Spacer";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { motion } from "framer-motion";
import BillInfo from "../BillInfo";
import ShipInfo from "../ShipInfo";
import PayInfo from "../PayInfo";
import AuthContext from "../../store/auth-context";
import Axios from "axios";

const BillingDetails = () => {
  const isSmallDevice = useMediaQuery({
    query: "(max-width: 600px)",
  });

  const authCtx = useContext(AuthContext);
  const gettingUserInfo = async () => {
    const route = "/api/user/getUserInfo";

    try {
      const rese = await Axios.post(route, { Token: authCtx.Token() })
        .then((res: any) => {
          setUserInfo(res.data);
        })
        .catch((error) => {
          console.log(error);
          alert("Not Good!");
        });
    } catch (err) {
      alert("Something went wrong!" + err);
    }
  };

  useEffect(() => {
    gettingUserInfo();
  }, []);

  const [userInfo, setUserInfo] = useState({
    auth_customer_payment_id: null,
    auth_customer_profile_id: null,
    billingAddress: null,
    billingCityId: null,
    billingCityName: null,
    billingFirstName: null,
    billingLastName: null,
    billingSameAsShipping: null,
    billingState: null,
    billingZip: null,
    creditCardNumber: null,
    cvv: null,
    date_of_birth: null,
    email_notification: null,
    expirationDate: null,
    firstName: " ",
    id: 1,
    lastName: " ",
    patient_id: null,
    payment_processor: null,
    phone: "",
    shippingAddress: "",
    shippingCityId: "",
    shippingCityName: "",
    shippingMethod: null,
    shippingState: "",
    shippingZip: "",
    sms_notification: null,
    user_id: 2,
    verification_job_id: null,
    verification_status: null,
    verification_token: null,
  });

  const [save, setSave] = useState(false);
  const [billInfo, setBillInfo] = useState(false);
  const [payInfo, setPayInfo] = useState(false);
  const saveEnable = () => {
    setSave(true);
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div>
        <DashboardHeader
          heading="Shipping and Billing Details"
          details="Manage your billing and payment information."
        />
        {/* <div className={styles.updateBillingsDetailSection}>
          <div className={styles.contentRow}>
            <InputComponent
              type="text"
              placeholder="Billing Adress"
              label="Billing Adress"
            />
            {isSmallDevice ? <Spacer /> : null}
            <div className={styles.contentSeperator}></div>
            <InputComponent type="text" placeholder="Country" label="Country" />
          </div>
          {isSmallDevice ? null : <Spacer />}
          <div className={styles.contentRow}>
            {isSmallDevice ? <Spacer /> : null}
            <InputComponent type="text" placeholder="State" label="State" />
            {isSmallDevice ? <Spacer /> : null}
            <div className={styles.contentSeperator}></div>
            <InputComponent
              type="number"
              placeholder="ZIP Code"
              label="ZIP Code"
            />
          </div>
        </div>
        <div className={styles.paymentMethodsContainer}>
          <p className={styles.headText}>Payment Methods</p>
          <div className={styles.paymentMethod}>
            <div className={styles.leftSide}>
              <Image src={MasterCardIcon} alt="card_icon" />
              <p className={styles.headText}>William Smith</p>
              <p className={styles.primaryText}>**** **** *** 0096</p>
            </div>
            <div className={styles.rightSide}>
              <button className={styles.btnSecondary}>Edit</button>
              <button className={styles.btnDanger}> Remove</button>
            </div>
          </div>
          <div className={styles.paymentMethod}>
            <div className={styles.leftSide}>
              <Image src={VisaIcon} alt="card_icon" />
              <p className={styles.headText}>William Smith</p>
              <p className={styles.primaryText}>**** **** *** 0096</p>
            </div>
            <div className={styles.rightSide}>
              <button className={styles.btnSecondary}>Edit</button>
              <button className={styles.btnDanger}> Remove</button>
            </div>
          </div>
        </div> */}
        <ShipInfo reloadInfo={gettingUserInfo} info={userInfo} />
        <BillInfo reloadInfo={gettingUserInfo} info={userInfo} />
        <PayInfo reloadInfo={gettingUserInfo} info={userInfo} />
      </div>
    </motion.main>
  );
};

export default BillingDetails;
