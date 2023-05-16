import React from "react";
import styles from "./treatmentplan.module.scss";
import SidenafilMedicine from "../../assets/images/sidenafil.svg";
import { useEffect, useState, useContext } from "react";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import { motion } from "framer-motion";
import Image from "next/image";
import AuthContext from "../../store/auth-context";
import Axios from "axios";

const TreatmentPlan = () => {
  const [Case, setCase] = useState({
    status: "",
    created_at: "",
  });
  const authCtx = useContext(AuthContext);
  const [product, setProduct] = React.useState({
    id: 1,
    partner_medication_id: "eb37cfd0-6b3a-472f-8cf6-2bdd1a0c806a",
    product_dosage_mg: "25.0",
    product_dosage_tag: "beginner",
    product_dosages_per_month: 4,
    product_image: "Viagra_25mg_4",
    product_price: "280.00",
    product_qty: 4,
    product_tag: "Viagra",
    product_title: "Viagra 25 mg, 4 day supply",
  });

  const getProduct = async () => {
    const route = "/api/case/get-product";
    try {
      const rese = await Axios.post(route, { Token: authCtx.Token() })
        .then((res) => {
          setProduct(res.data);
        })
        .catch((error) => {
          console.log(error);
          return alert("Not Good!");
        });
    } catch (err) {
      return alert("Something went wrong!" + err);
    }
  };
  var Image_source: any =
    "/assets/images/products/" +
    product.product_image +
    "/" +
    product.product_image +
    "_bottle.png";

  const getCase = async () => {
    const route = "/api/case/get-case";

    try {
      const rese = await Axios.post(route, { Token: authCtx.Token() })
        .then((res) => {
          setCase({
            status: res.data.status,
            created_at: res.data.created_at,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCase();
    getProduct();
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div>
        <DashboardHeader
          heading="Treatment Plan"
          details="You have full control to manage and change your treatment plan."
        />
        <div className={styles.treatmentPlanContentContainer}>
          <div className={styles.medicineDetails}>
            <Image
              src={Image_source}
              width={50}
              height={50}
              alt="medicine_image"
            />
            <p className={styles.bigText}>{product.product_tag}</p>
            <p className={styles.primaryText}>
              {product.product_dosage_mg}mg {product.product_tag}
            </p>
            <p className={styles.primaryText}>{product.product_qty} Doses</p>
            <p className={styles.primaryText}>{product.product_title}</p>
            <br />
            <button>Switch Plan</button>
          </div>
          <div className={styles.orderDetails}>
            <div className={styles.orderDetailsHeader}>
              <p className={styles.primaryText}>Status</p>
              <button>Pending</button>
            </div>
            <div className={styles.orderDetailsContent}>
              <div className={styles.contentRow}>
                <p className={styles.primaryText}>Order Status:</p>
                <p className={styles.primaryText + " " + styles.success_Text}>
                  {Case.status}
                </p>
              </div>
              <div className={styles.contentRow}>
                <p className={styles.primaryText}>ID Verification:</p>
                <p className={styles.primaryText + " " + styles.success_Text}>
                  {/* Verification Successfull */}
                </p>
              </div>
              <div className={styles.contentRow}>
                <p className={styles.primaryText}>Medical Status:</p>
                <p className={styles.primaryText}></p>
              </div>
              <div className={styles.contentRow}>
                <p className={styles.primaryText}>Created</p>
                <p className={styles.primaryText}>{Case.created_at}</p>
              </div>
              <div className={styles.contentRow}>
                <p className={styles.primaryText}>Subscribtion Status:</p>
                <p className={styles.primaryText}></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default TreatmentPlan;
