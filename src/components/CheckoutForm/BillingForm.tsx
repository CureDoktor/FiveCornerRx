import React from "react";
import FormHeader from "../FormHeader/FormHeader";
import InputComponent from "../InputComponent/InputComponent";
import Spacer from "../Spacer/Spacer";
import "./checkoutforms.module.scss";
import { Form } from "react-bootstrap";
import ActionButton from "../ActionButton/ActionButton";
import { BtnTypes } from "../../utils/util";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import Axios from "axios";
import AuthContext from "../../store/auth-context";

type Props = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const BillingForm: React.FC<Props> = ({ step, setStep }) => {
  const [firstName, setFirstName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");
  const [address, setAddress] = React.useState<string>("");
  const [state, setState] = React.useState<string>("");
  const [city, setCity] = React.useState<string>("");
  const [zip, setZip] = React.useState<string>("");
  const [formValidated, setFormValidated] = React.useState<boolean>(false);

  const shippingValidation = () => {
    if (
      firstName.length > 3 &&
      lastName.length > 3 &&
      address.length > 5 &&
      state.length > 3 &&
      city.length > 3 &&
      zip.length > 3
    ) {
      setFormValidated(true);
    } else {
      setFormValidated(false);
    }
  };

  const authCtx = React.useContext(AuthContext);
  const route = "/api/user/getUserInfo";

  async function submitHandler(event: any) {
    var formData = {
      billingFirstName: firstName,
      billingLastName: lastName,
      billingAddress: address,
      billingCityName: city,
      billingState: state,
      billingZip: zip,
    };
    event.preventDefault();
    const route = "/api/user/updateBillingInfo";
    try {
      const rese = await Axios.post(route, { Token: authCtx.Token(), formData })
        .then((res) => {
          setStep(step + 1);
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
    shippingValidation();
  }, [firstName, lastName, address, state, city, zip]);

  const isSmallScreen = useMediaQuery({
    query: "(max-width: 575px)",
  });

  return (
    <div className="form_container">
      <h1 className="formHead">Billing Information</h1>
      <Spacer />
      <Spacer />
      <div className="contentRow">
        <InputComponent
          value={firstName}
          setValue={setFirstName}
          type="text"
          placeholder="Enter first name"
          label="First Name"
          bigInput={true}
        />
        {isSmallScreen && firstName && firstName.length < 3 && (
          <p className="errorMessage">
            First name must contain min 3 characters
          </p>
        )}
        <div className="contentSeperator"></div>
        <InputComponent
          value={lastName}
          setValue={setLastName}
          type="text"
          placeholder="Enter last name"
          label="Last Name"
          bigInput={true}
        />
        {isSmallScreen && lastName && lastName.length < 3 && (
          <p className="errorMessage">
            Last name must contain min 3 characters
          </p>
        )}
      </div>
      {!isSmallScreen && (
        <div className="contentRow">
          {firstName && firstName.length < 3 ? (
            <p className="errorMessage">
              First name must contain min 3 characters
            </p>
          ) : (
            <div className="emptySide"></div>
          )}
          <div className="contentSeperator"></div>

          {lastName && lastName.length < 3 && (
            <p className="errorMessage">
              Last name must contain min 3 characters
            </p>
          )}
        </div>
      )}
      <Spacer />
      <div className="contentRow">
        <InputComponent
          value={address}
          setValue={setAddress}
          type="text"
          placeholder="Address"
          label="Address"
          bigInput={true}
        />
      </div>
      <div className="contentRow">
        {address && address.length < 5 ? (
          <p className="errorMessage">Please Enter Valid Address</p>
        ) : (
          <div className="emptySide"></div>
        )}
        <div className="contentSeperator"></div>
      </div>
      <Spacer />
      <div className="contentRow">
        <InputComponent
          value={state}
          setValue={setState}
          type="text"
          placeholder="State"
          label="Select state"
          bigInput={true}
        />
        {isSmallScreen && state && state.length < 3 && (
          <p className="errorMessage">Please Enter valid State</p>
        )}
        <div className="contentSeperator"></div>
        <InputComponent
          value={city}
          setValue={setCity}
          type="text"
          placeholder="Select city"
          label="City"
          bigInput={true}
        />
        {isSmallScreen && city && city.length < 3 && (
          <p className="errorMessage">Please Enter Valid City</p>
        )}
      </div>
      {!isSmallScreen && (
        <div className="contentRow">
          {state && state.length < 3 ? (
            <p className="errorMessage">Please Enter Valid State</p>
          ) : (
            <div className="emptySide"></div>
          )}
          <div className="contentSeperator"></div>

          {city && city.length < 3 && (
            <p className="errorMessage">Please Enter Valid City</p>
          )}
        </div>
      )}
      <Spacer />
      <div className="contentRow">
        <InputComponent
          value={zip}
          setValue={setZip}
          type="text"
          placeholder="Zip code"
          label="ZIP"
          bigInput={true}
        />
        <div className="emptySide"></div>
        <div className="contentSeperator"></div>
      </div>
      {zip && zip.length < 3 ? (
        <p className="errorMessage">Please Enter Valid Zip</p>
      ) : (
        <div className="emptySide"></div>
      )}
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

export default BillingForm;
