import React from "react";
import styles from "./productdetails.module.scss";
import MedicineImage from "../../assets/images/genericviagra.svg";
import VerifiedIcon from "/../../assets/icons/verifiedicon.svg";

import Spacer from "../Spacer/Spacer";
import Image from "next/image";
import Axios from "axios";
import AuthContext from "../../store/auth-context";

const ProductDetails = (event: any) => {
  const authCtx = React.useContext(AuthContext);
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

  React.useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className={styles.productDetailsContainer}>
      <p className={styles.primaryText + " " + styles.dullText}>
        {product.product_title}
      </p>
      <p className={styles.headText}>{product.product_tag}</p>
      <p className={styles.medicine_detail}></p>
      <Image
        className={styles.medicine_image}
        src={Image_source}
        width={100}
        height={100}
        alt="medicine_image"
      />
      <div className={styles.pricingDetailsRow}>
        <p className={styles.primaryText + " " + styles.dullText}>Price</p>
        <p className={styles.primaryText}>${product.product_price}</p>
      </div>
      <div className={styles.pricingDetailsRow}>
        <p className={styles.primaryText + " " + styles.dullText}>Shipping</p>
        <p className={styles.primaryText}>$0.00</p>
      </div>
      <div className={styles.pricingDetailsRow}>
        <p className={styles.primaryText + " " + styles.dullText}>
          Service charges + Tax
        </p>
        <p className={styles.primaryText}>$0.00</p>
      </div>
      <div className={styles.pricingDetailsRow}>
        <p className={styles.primaryText + " " + styles.dullText}>Total</p>
        <p className={styles.primaryText}>
          <strong>${product.product_price}</strong>
        </p>
      </div>
      <Spacer />
      <Spacer />
      <div className={styles.extraDetailsRow}>
        <Image src={VerifiedIcon} alt="medicine_image" />
        <p className={styles.lightText}>12 doses - 1 month supply</p>
      </div>
      <Spacer />
      <Spacer />
      <div className={styles.extraDetailsRow}>
        <Image src={VerifiedIcon} alt="medicine_image" />
        <p className={styles.lightText}>Discreet shipping to your house</p>
      </div>
      <Spacer />
      <Spacer />
      <div className={styles.extraDetailsRow}>
        <Image src={VerifiedIcon} alt="medicine_image" />
        <p className={styles.lightText}>FREE online physician consultation.</p>
      </div>
      <Spacer />
      <Spacer />
      <div className={styles.extraDetailsRow}>
        <Image src={VerifiedIcon} alt="medicine_image" />
        <p className={styles.lightText}>Automatic refills every 30 days.</p>
      </div>
    </div>
  );
};

export default ProductDetails;
