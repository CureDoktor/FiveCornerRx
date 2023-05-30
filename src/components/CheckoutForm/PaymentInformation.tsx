import React from "react";
import FormHeader from "../FormHeader/FormHeader";
import InputComponent from "../InputComponent/InputComponent";
import Spacer from "../Spacer/Spacer";
import "./checkoutforms.module.scss";
import { Form } from "react-bootstrap";
import ActionButton from "../ActionButton/ActionButton";
import { BtnTypes } from "../../utils/util";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import { CONSTANTS } from "../../constants/shared";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import Axios from "axios";
import AuthContext from "../../store/auth-context";

import { useRouter } from "next/router";

type Props = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};
const PaymentInformation: React.FC<Props> = ({ step, setStep }) => {
  const [cardName, setCardName] = React.useState<string>("");
  const [cardNumber, setCardNumber] = React.useState<string>("");
  const [cvv, setCvv] = React.useState<string>("");
  const [expDate, setDate] = React.useState<string>("");
  const [year, setYear] = React.useState<string>("");
  const [formValidated, setFormValidated] = React.useState<boolean>(false);
  const router = useRouter();

  const paymentValidation = () => {
    if (cardNumber.length === 16 && cvv.length == 3) {
      setFormValidated(true);
    } else {
      setFormValidated(false);
    }
  };

  const authCtx = React.useContext(AuthContext);
  const route = "/api/user/getUserInfo";

  const orderWithUserProfile = async () => {
    const route = "/api/order/order-from-profile";
    try {
      const rese = await Axios.post(route, {
        Token: authCtx.Token(),
      })
        .then((res) => {
          router.push("/dashboard");
        })
        .catch((error) => {
          return alert(
            error.response.data.name + " " + error.response.data.message
          );
        });
    } catch (err) {
      return alert("Something went wrong!" + err);
    }
  };

  async function submitHandler(event: any) {
    const [year, month] = expDate.split("-");
    const formattedDate = `${month}/${year.slice(-2)}`;

    var formData = {
      payment_processor: "credit_card",
      creditCardNumber: cardNumber,
      expirationDate: formattedDate,
      cvv: cvv,
    };
    console.log(formData);
    event.preventDefault();
    const route = "/api/user/updatePaymentInfo";
    try {
      const rese = await Axios.post(route, { Token: authCtx.Token(), formData })
        .then((res) => {
          orderWithUserProfile();
        })
        .catch((error) => {
          var answer: any = "";
          Object.entries(error.response.data).map(
            ([key, value]: [key: any, value: any]) => {
              answer += answer + "\n" + "Error" + " : " + value;
            }
          );

          return alert(answer);
        });
    } catch (err) {
      return alert("Something went wrong!" + err);
    }
  }

  React.useEffect(() => {
    paymentValidation();
  }, [cardName, cardNumber, cvv, expDate]);

  const isSmallScreen = useMediaQuery({
    query: "(max-width: 575px)",
  });

  function handleInputChange(value: string) {
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    if (alphanumericRegex.test(value)) {
      setCardNumber(value);
    }
  }
  React.useEffect(() => {
    // handleInputChange(cardNumber.replace(/^[0-9]+$/, ''))
    console.log("cardNumber", cardNumber.replace(/^[0-9]+$/, ""));
  }, [cardNumber]);

  return (
    <div className="form_container">
      <h1 className="formHead">Payment Information</h1>
      <Spacer />
      <Spacer />

      {/* <div className="contentRow">
        <InputComponent
          type="text"
          value={cardName}
          setValue={setCardName}
          placeholder="Name on card"
          label="Name on card"
          bigInput={true}
        />
      </div> */}
      <div className="contentRow">
        {cardName && cardName.length < 3 ? (
          <p className="errorMessage">Please Enter Card Name</p>
        ) : (
          <div className="emptySide"></div>
        )}
        <div className="contentSeperator"></div>
      </div>
      <Spacer />
      <div className="contentRow">
        <InputComponent
          type="text"
          value={cardNumber.replace(/\D/g, "")}
          setValue={setCardNumber}
          placeholder="0000-0000-0000-0000"
          label="Card Number"
          maxlength={16}
          bigInput={true}
        />
        {cardNumber && cardNumber.length !== 16 && (
          <p className="errorMessage">Card Number must be of 16 digits</p>
        )}
        <div className="contentSeperator"></div>
        <InputComponent
          value={cvv.replace(/\D/g, "")}
          setValue={setCvv}
          type="text"
          placeholder="CVV"
          label="CVV Number"
          maxlength={3}
          bigInput={true}
        />
        {isSmallScreen && cvv && cvv.length !== 3 && (
          <p className="errorMessage">CVV must be of 3 digits</p>
        )}
      </div>
      {!isSmallScreen && (
        <div className="contentRow">
          {/* {cardNumber && cardNumber.length !== 16 ? (
            <p className="errorMessage">Card Number must be of 16 digits</p>
          ) : (
            <div className="emptySide"></div>
          )} */}
          <div className="contentSeperator"></div>
          {cvv && cvv.length !== 3 && (
            <p className="errorMessage">CVV must be of 3 digits</p>
          )}
        </div>
      )}
      <Spacer />
      <div className="contentRow">
        <InputComponent
          value={expDate}
          setValue={setDate}
          type="month"
          placeholder="MM/YY"
          label="Expiration Date"
          bigInput={true}
        />
      </div>
      {/* <CustomDropdown bigInput={true} label="OPTIONS" /> */}
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <div className="contentRow">
        <div className="emptySide"></div>
        <div className="btnContainer">
          <ActionButton
            disabled={!formValidated}
            action={() => submitHandler(event)}
            type={BtnTypes.Success}
            text="Next"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentInformation;
