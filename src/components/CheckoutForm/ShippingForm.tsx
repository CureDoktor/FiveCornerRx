import React from "react";
import FormHeader from "../FormHeader/FormHeader";
import InputComponent from "../InputComponent/InputComponent";
import Spacer from "../Spacer/Spacer";
import "./checkoutforms.module.scss";
import { Form } from "react-bootstrap";
import ActionButton from "../ActionButton/ActionButton";
import { BtnTypes, is18YearsOld, validateEmail } from "../../utils/util";
import DatePickerComponent from "../DatePickerComponent/DatePickerComponent";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import Axios from "axios";
import AuthContext from "../../store/auth-context";

type Props = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const ShippingForm: React.FC<Props> = ({ step, setStep }) => {
  const [firstName, setFirstName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [address, setAddress] = React.useState<string>("");
  const [state, setState] = React.useState<string>("");
  const [city, setCity] = React.useState<string>("");
  const [zip, setZip] = React.useState<string>("");

  const [billingSameAsShipping, setBillingSameAsShipping] =
    React.useState<boolean>(false);

  const [formValidated, setFormValidated] = React.useState<boolean>(false);

  const isSmallScreen = useMediaQuery({
    query: "(max-width: 575px)",
  });
  const authCtx = React.useContext(AuthContext);

  async function submitHandler(event: any) {
    event.preventDefault();
    const route = "/api/user/updateShippingInfo";
    var formData = {
      firstName: firstName,
      lastName: lastName,
      shippingAddress: address,
      shippingCityName: city,
      shippingState: state,
      shippingZip: zip,
      phone: phone,
    };
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

  const shippingValidation = () => {
    if (
      firstName.length > 3 &&
      lastName.length > 3 &&
      phone.length > 7 &&
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

  React.useEffect(() => {
    shippingValidation();
  }, [firstName, lastName, phone, address, state, city, zip]);

  return (
    <div className="form_container">
      <h1 className="formHead">Shipping Information</h1>
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

        <div className="contentSeperator"></div>
        {isSmallScreen && firstName && firstName.length < 3 && (
          <p className="errorMessage">
            First name must contain min 3 characters
          </p>
        )}
        <InputComponent
          value={lastName}
          setValue={setLastName}
          type="text"
          placeholder="Enter last name"
          label="Last name"
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

      {/* {lastName && lastName.length < 3 && <p style={{ display: 'block' }}>Last name must contain min 3 characters</p>} */}
      <Spacer />
      <div className="contentRow">
        <div className="contentSeperator"></div>
        <InputComponent
          type="text"
          value={phone.replace(/\D/g, "")}
          setValue={setPhone}
          placeholder="Phone"
          label="Phone"
          bigInput={true}
        />
        {isSmallScreen && phone && phone.length < 7 && (
          <p className="errorMessage">Phone Number must be of min 7 digits</p>
        )}
      </div>
      {!isSmallScreen && (
        <div className="contentRow">
          <div className="contentSeperator"></div>

          {phone && phone.length < 7 && (
            <p className="errorMessage">Phone Number must be of min 7 digits</p>
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
          <p className="errorMessage">Please Enter State</p>
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
          <p className="errorMessage">Please Enter City</p>
        )}
      </div>
      {!isSmallScreen && (
        <div className="contentRow">
          {state && state.length < 3 ? (
            <p className="errorMessage">Please Enter State</p>
          ) : (
            <div className="emptySide"></div>
          )}
          <div className="contentSeperator"></div>

          {city && city.length < 3 && (
            <p className="errorMessage">Please Enter City</p>
          )}
        </div>
      )}
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
      <div className="contentRow">
        {zip && zip.length < 3 ? (
          <p className="errorMessage">Please Enter Valid Zip</p>
        ) : (
          <div className="emptySide"></div>
        )}
        <div className="contentSeperator"></div>
      </div>
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <div className="contentRow">
        {/* <Form.Check
          className="radioBtn"
          label={"Billing same as shipping"}
          type="radio"
          name="question"
          checked={billingSameAsShipping}
          onClick={() => setBillingSameAsShipping(!billingSameAsShipping)}
        /> */}
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

export default ShippingForm;
