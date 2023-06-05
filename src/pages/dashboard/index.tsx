import * as React from "react";
import styles from "./userdashboard.module.scss";
import ProfileImage from "../../../public/assets/images/profileuser.jpg";
import CloseIcon from "../../../public/assets/icons/close.png";
import UserAvatar from "../../components/UserAvatar/UserAvatar";
import ProfileIconOne from "../../../public/assets/icons/profileiconselected.svg";
import ProfileIconTwo from "../../../public/assets/icons/profileicon.svg";
import TreatmentIconOne from "../../../public/assets/icons/treatementicon.svg";
import TreatmentIconTwo from "../../../public/assets/icons/treatementiconselected.svg";
import MyCaseIconOne from "../../../public/assets/icons/caseicon.svg";
import MyCaseIconTwo from "../../../public/assets/icons/caseiconselected.svg";
import HistoryIconOne from "../../../public/assets/icons/historyicon.svg";
import HistoryIconTwo from "../../../public/assets/icons/historyiconselected.svg";
import BillingIconOne from "../../../public/assets/icons/billingdetailicon.svg";
import BillingIconTwo from "../../../public/assets/icons/billingdetailiconselected.svg";
import SecurityIconOne from "../../../public/assets/icons/securityicon.svg";
import SecurityIconTwo from "../../../public/assets/icons/securityiconselected.svg";
import EditProfile from "../../components/EditProfile/EditProfile";
import TreatmentPlan from "../../components/TreatmentPlan/TreatmentPlan";
import MyCase from "../../components/MyCase/MyCase";
import OrderHistory from "../../components/OrderHistory/OrderHistory";
import BillingDetails from "../../components/BillingDetails/BillingDetails";
import Security from "../../components/Security/Security";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import MainNavbar from "../../components/Navbar/MainNavbar";
import { useMediaQuery } from "react-responsive";
import { PATH } from "../../constants/paths";
import { motion } from "framer-motion";
import AuthContext from "../../store/auth-context";
import Axios from "axios";

const UserDashboard: React.FC = () => {
  const authCtx = React.useContext(AuthContext);
  const gettingUserInfo = async () => {
    const route = "/api/user/getUserInfo";

    try {
      const rese = await Axios.post(route, { Token: authCtx.Token() })
        .then((res: any) => {
          setUserInfo(res.data);
        })
        .catch((error: any) => {
          console.log(error);
        });
    } catch (err) {
      console.log("Something went wrong!");
    }
  };

  React.useEffect(() => {
    gettingUserInfo();
  }, []);

  const [userInfo, setUserInfo] = React.useState<any>({
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

  var primaryText = " ";

  React.useEffect(() => {
    if (userInfo == null) {
      primaryText = " ";
    } else {
      primaryText = userInfo.firstName + " " + userInfo.lastName;
    }
  }, [userInfo]);

  const ProfileIconSelected = (
    <Image alt="" width={50} height={50} src={ProfileIconOne} />
  );
  const ProfileIcon = (
    <Image alt="" width={50} height={50} src={ProfileIconTwo} />
  );
  const TreatementPlanIcon = (
    <Image alt="" width={50} height={50} src={TreatmentIconOne} />
  );
  const TreatementPlanIconSelected = (
    <Image alt="" width={50} height={50} src={TreatmentIconTwo} />
  );
  const MyCaseIcon = (
    <Image alt="" width={50} height={50} src={MyCaseIconOne} />
  );
  const MyCaseIconSelected = (
    <Image alt="" width={50} height={50} src={MyCaseIconTwo} />
  );
  const OrderHistoryIcon = (
    <Image alt="" width={50} height={50} src={HistoryIconOne} />
  );
  const OrderHistoryIconSelected = (
    <Image alt="" width={50} height={50} src={HistoryIconTwo} />
  );
  const BillingDetailIcon = (
    <Image alt="" width={50} height={50} src={BillingIconOne} />
  );
  const BillingDetailIconSelected = (
    <Image alt="" width={50} height={50} src={BillingIconTwo} />
  );
  const SecurityIcon = (
    <Image alt="" width={50} height={50} src={SecurityIconOne} />
  );
  const SecurityIconSelected = (
    <Image alt="" width={50} height={50} src={SecurityIconTwo} />
  );

  const [showSidebar, setShowSidebar] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (showSidebar) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [showSidebar]);

  const [content, setContent] = React.useState<any>();

  const location = useRouter();
  console.log(location.pathname);

  const isSmallDevice = useMediaQuery({
    query: "(max-width: 820px)",
  });

  const checkPath = (path: string) => {
    return location.pathname === path ? true : false;
  };

  const OnClickContent = (route: string) => {
    setShowSidebar(false);
    if (route === "editprofile") {
      setContent(<EditProfile />);
    } else if (route === "treatmentplan") {
      setContent(<TreatmentPlan />);
    } else if (route === "mycase") {
      setContent(<MyCase />);
    } else if (route === "orderhistory") {
      setContent(<OrderHistory />);
    } else if (route === "billingdetails") {
      setContent(<BillingDetails />);
    } else {
      setContent(<Security />);
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className={styles.pageContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.coverSection}>
            <div className={styles.coverImageContainer}></div>
            <div className={styles.coverContentContainer + " py-4"}>
              <UserAvatar
                image="/assets/icons/profileicon.svg"
                width="30.5rem"
                height="22.5rem"
                primaryText={primaryText}
              />
            </div>
          </div>
          <div className={styles.dashboardContainer}>
            <div
              className={
                isSmallDevice
                  ? !showSidebar
                    ? styles.sidebarContainerMobile
                    : styles.sidebarContainerMobileOpened
                  : styles.sidebarContainer
              }
            >
              {isSmallDevice ? (
                <Image
                  onClick={(prevState) => setShowSidebar(false)}
                  className={styles.closeicon}
                  src={CloseIcon}
                  alt="close_icon"
                  height={50}
                  width={50}
                />
              ) : null}

              <p className={styles.sidebarHead}>MANAGE PROFILE</p>
              {/* <div
                onClick={() => OnClickContent("editprofile")}
                style={{ textDecoration: "none" }}
              >
                <div
                  className={
                    checkPath(PATH.EditProfile)
                      ? styles.sidebarItem + " " + styles.selectedSidebarItem
                      : styles.sidebarItem
                  }
                >
                  {checkPath(PATH.EditProfile)
                    ? ProfileIconSelected
                    : ProfileIcon}
                  <p>Edit Profile</p>
                </div>
              </div> */}
              <div
                onClick={() => OnClickContent("treatmentplan")}
                style={{ textDecoration: "none" }}
              >
                <div
                  className={
                    checkPath(PATH.TreatmentPlan)
                      ? styles.sidebarItem + " " + styles.selectedSidebarItem
                      : styles.sidebarItem
                  }
                >
                  {checkPath(PATH.TreatmentPlan)
                    ? TreatementPlanIconSelected
                    : TreatementPlanIcon}
                  <p>Treatment Plan</p>
                </div>
              </div>
              <div
                onClick={() => OnClickContent("mycase")}
                style={{ textDecoration: "none" }}
              >
                <div
                  className={
                    checkPath(PATH.MyCase)
                      ? styles.sidebarItem + " " + styles.selectedSidebarItem
                      : styles.sidebarItem
                  }
                >
                  {checkPath(PATH.MyCase) ? MyCaseIconSelected : MyCaseIcon}
                  <p>My Case</p>
                </div>
              </div>
              <div
                onClick={() => OnClickContent("orderhistory")}
                style={{ textDecoration: "none" }}
              >
                <div
                  className={
                    checkPath(PATH.OrderHistory)
                      ? styles.sidebarItem + " " + styles.selectedSidebarItem
                      : styles.sidebarItem
                  }
                >
                  {checkPath(PATH.OrderHistory)
                    ? OrderHistoryIconSelected
                    : OrderHistoryIcon}
                  <p>Order History</p>
                </div>
              </div>
              <div
                onClick={() => OnClickContent("billingdetails")}
                style={{ textDecoration: "none" }}
              >
                <div
                  className={
                    checkPath(PATH.BillingDetails)
                      ? styles.sidebarItem + " " + styles.selectedSidebarItem
                      : styles.sidebarItem
                  }
                >
                  {checkPath(PATH.BillingDetails)
                    ? BillingDetailIconSelected
                    : BillingDetailIcon}
                  <p>Shipping and Billing Detail</p>
                </div>
              </div>
              {/* <div
                onClick={() => OnClickContent("security")}
                style={{ textDecoration: "none" }}
              >
                <div
                  className={
                    checkPath(PATH.Security)
                      ? styles.sidebarItem + " " + styles.selectedSidebarItem
                      : styles.sidebarItem
                  }
                >
                  {checkPath(PATH.Security)
                    ? SecurityIconSelected
                    : SecurityIcon}
                  <p>Security</p>
                </div>
              </div> */}
            </div>
            <div className={styles.dashContent}>{content}</div>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default UserDashboard;
